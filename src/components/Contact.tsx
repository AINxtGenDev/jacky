import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const INITIAL_FORM: FormData = { name: '', email: '', phone: '', message: '' };

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Bitte gib deinen Namen ein.';
  if (!data.email.trim()) {
    errors.email = 'Bitte gib deine E-Mail ein.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Bitte gib eine gültige E-Mail ein.';
  }
  if (!data.message.trim()) errors.message = 'Bitte schreibe eine Nachricht.';
  return errors;
}

export function Contact() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setForm(INITIAL_FORM);
  }

  return (
    <section
      id="contact"
      className="bg-brand-sand py-16 sm:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="contact-heading"
            className="font-display text-3xl font-bold text-brand-dark sm:text-4xl lg:text-5xl"
          >
            Kontakt
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-primary" />
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-brand-dark p-6 text-white sm:p-8">
              <h3 className="font-display text-xl font-bold sm:text-2xl">Direkt erreichen</h3>

              <div className="mt-6 space-y-5">
                <a
                  href="tel:+436604922409"
                  className="flex min-h-[44px] items-start gap-3 transition-colors hover:text-brand-primary-hover"
                >
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <div>
                    <p className="font-medium">+43 660 4922409</p>
                    <p className="text-sm text-white/60">Mo–Fr, 09:00–18:00</p>
                  </div>
                </a>

                <a
                  href="mailto:jacky.kryzer@gmail.com"
                  className="flex min-h-[44px] items-start gap-3 transition-colors hover:text-brand-primary-hover"
                >
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <p className="font-medium break-all">jacky.kryzer@gmail.com</p>
                </a>

                <a
                  href="https://www.instagram.com/jacquelinekryzer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[44px] items-center gap-3 transition-colors hover:text-brand-primary-hover"
                >
                  <svg className="h-5 w-5 flex-shrink-0 text-brand-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  <p className="font-medium">@jacquelinekryzer</p>
                </a>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm text-white/60">Tätig in</p>
                <p className="mt-1 font-medium">Österreich & Spanien</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
              {submitted ? (
                <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
                  <div className="rounded-full bg-brand-primary/10 p-4">
                    <svg className="h-8 w-8 text-brand-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-brand-dark">
                    Danke für deine Nachricht!
                  </h3>
                  <p className="mt-2 text-brand-dark/70">
                    Ich melde mich in Kürze bei dir.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-medium text-brand-primary hover:text-brand-dark"
                  >
                    Neue Nachricht senden
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brand-dark">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        className={`mt-1 block w-full rounded-lg border px-4 py-2.5 text-sm text-brand-dark transition-colors placeholder:text-brand-dark/40 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary ${
                          errors.name ? 'border-red-400' : 'border-brand-sand'
                        }`}
                        placeholder="Dein Name"
                        maxLength={100}
                        autoComplete="name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500" role="alert">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-dark">
                        E-Mail <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        className={`mt-1 block w-full rounded-lg border px-4 py-2.5 text-sm text-brand-dark transition-colors placeholder:text-brand-dark/40 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary ${
                          errors.email ? 'border-red-400' : 'border-brand-sand'
                        }`}
                        placeholder="deine@email.com"
                        maxLength={254}
                        autoComplete="email"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500" role="alert">{errors.email}</p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-brand-dark">
                        Telefon
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-lg border border-brand-sand px-4 py-2.5 text-sm text-brand-dark transition-colors placeholder:text-brand-dark/40 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                        placeholder="+43 660 ..."
                        maxLength={20}
                        autoComplete="tel"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-brand-dark">
                        Wie kann ich dir helfen? <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className={`mt-1 block w-full resize-y rounded-lg border px-4 py-2.5 text-sm text-brand-dark transition-colors placeholder:text-brand-dark/40 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary ${
                          errors.message ? 'border-red-400' : 'border-brand-sand'
                        }`}
                        placeholder="Erzähl mir von deinem Anliegen..."
                        maxLength={2000}
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-500" role="alert">{errors.message}</p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-6 w-full rounded-full bg-brand-primary px-6 py-3 text-sm font-medium text-white transition-all hover:bg-brand-primary-hover hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 sm:w-auto"
                  >
                    Nachricht senden
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
