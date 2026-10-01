import { useState } from 'react';
import { Loader2, Send } from 'lucide-react';
import Button from './Button';
import { contactProjectTypes, FORM_ENDPOINT, site } from '../data/portfolioData';

const empty = { name: '', email: '', projectType: contactProjectTypes[0], message: '', _gotcha: '' };
const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Enter your name.';
  if (!v.email.trim()) e.email = 'Enter your email address.';
  else if (!emailOk(v.email.trim())) e.email = 'Enter a valid email address, like name@example.com.';
  if (v.message.trim().length < 10) e.message = 'Write a few words about your project (at least 10 characters).';
  return e;
}

const field =
  'mt-2 w-full rounded-lg border bg-bg px-4 py-3.5 text-base text-ink placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30';

export default function ContactForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error | mailto
  const [serverError, setServerError] = useState('');
  const configured = Boolean(FORM_ENDPOINT);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  async function onSubmit(e) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      document.getElementById(`cf-${first}`)?.focus();
      return;
    }
    if (values._gotcha) return; // spam trap

    if (!configured) {
      // Fallback: open the visitor's email app with the message filled in
      const subject = encodeURIComponent(`Project enquiry: ${values.projectType}`);
      const body = encodeURIComponent(
        `Name: ${values.name}\nEmail: ${values.email}\nProject type: ${values.projectType}\n\n${values.message}`
      );
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus('mailto');
      return;
    }

    setStatus('sending');
    setServerError('');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          projectType: values.projectType,
          message: values.message,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setValues(empty);
      } else {
        const data = await res.json().catch(() => ({}));
        setServerError(data?.errors?.map((x) => x.message).join(' ') || '');
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="border border-accent/40 bg-accent/10 p-8">
        <h3 className="font-display text-2xl font-semibold">Message sent.</h3>
        <p className="mt-3 text-muted">
          Thanks for getting in touch. I&apos;ll reply to the email address you provided.
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="mt-6 font-medium text-accent underline underline-offset-4">
          Send another message
        </button>
      </div>
    );
  }

  const busy = status === 'sending';

  return (
    <form onSubmit={onSubmit} noValidate aria-busy={busy} className="space-y-6">
      <div>
        <label htmlFor="cf-name" className="font-medium">Name</label>
        <input
          id="cf-name" name="name" type="text" autoComplete="name"
          value={values.name} onChange={onChange} required
          aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'cf-name-err' : undefined}
          className={`${field} ${errors.name ? 'border-danger' : 'border-line/20'}`}
        />
        {errors.name && <p id="cf-name-err" className="mt-2 text-sm text-danger">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="cf-email" className="font-medium">Email</label>
        <input
          id="cf-email" name="email" type="email" autoComplete="email"
          value={values.email} onChange={onChange} required
          aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'cf-email-err' : undefined}
          className={`${field} ${errors.email ? 'border-danger' : 'border-line/20'}`}
        />
        {errors.email && <p id="cf-email-err" className="mt-2 text-sm text-danger">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="cf-projectType" className="font-medium">Project type</label>
        <select
          id="cf-projectType" name="projectType" value={values.projectType} onChange={onChange}
          className={`${field} border-line/20`}
        >
          {contactProjectTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cf-message" className="font-medium">Message</label>
        <textarea
          id="cf-message" name="message" rows={5}
          value={values.message} onChange={onChange} required
          aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'cf-message-err' : undefined}
          className={`${field} resize-y ${errors.message ? 'border-danger' : 'border-line/20'}`}
        />
        {errors.message && <p id="cf-message-err" className="mt-2 text-sm text-danger">{errors.message}</p>}
      </div>

      {/* Honeypot: hidden from people, tempting to bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="cf-gotcha">Leave this empty</label>
        <input id="cf-gotcha" name="_gotcha" tabIndex={-1} autoComplete="off" value={values._gotcha} onChange={onChange} />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={busy} magnetic={false}>
          {busy ? (
            <>
              <Loader2 size={18} className="animate-spin" aria-hidden="true" /> Sending
            </>
          ) : (
            <>
              <Send size={18} aria-hidden="true" /> {configured ? 'Send message' : 'Send by email'}
            </>
          )}
        </Button>
        {!configured && <p className="text-sm text-muted">Opens your email app with this message filled in.</p>}
      </div>

      <div aria-live="polite" className="min-h-[1.5rem]">
        {status === 'error' && (
          <p className="text-sm text-danger">
            The message didn&apos;t send. {serverError || 'Check your connection and try again,'} or email me at{' '}
            <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        )}
        {status === 'mailto' && (
          <p className="text-sm text-muted">
            If your email app didn&apos;t open, write to{' '}
            <a className="text-accent underline" href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        )}
      </div>
    </form>
  );
}
