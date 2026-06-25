import { useState } from "react";
import Section from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";
import Icon from "../components/ui/Icon";
import {
  COUNTRIES,
  FORM_INDUSTRIES,
  FORM_SERVICES,
} from "../data/content";

const INITIAL = {
  company: "",
  contact: "",
  designation: "",
  email: "",
  phone: "",
  country: "",
  industry: "",
  service: "",
  details: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+]?[\d\s().-]{7,18}$/;

function validate(values) {
  const e = {};
  if (!values.company.trim()) e.company = "Company name is required.";
  if (!values.contact.trim()) e.contact = "Contact person is required.";
  if (!values.designation.trim()) e.designation = "Designation is required.";

  if (!values.email.trim()) e.email = "Email is required.";
  else if (!EMAIL_RE.test(values.email.trim()))
    e.email = "Enter a valid email address.";

  if (!values.phone.trim()) e.phone = "Phone number is required.";
  else if (!PHONE_RE.test(values.phone.trim()))
    e.phone = "Enter a valid phone number.";

  if (!values.country) e.country = "Please select a country.";
  if (!values.industry) e.industry = "Please select an industry.";
  if (!values.service) e.service = "Please select a service.";

  if (!values.details.trim()) e.details = "Please tell us about your project.";
  else if (values.details.trim().length < 20)
    e.details = "Please add a little more detail (20+ characters).";

  return e;
}

/* ---- Reusable field shells ---- */
function Field({ label, name, error, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-semibold text-ink">
        {label} {required && <span className="text-brand-600">*</span>}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1 text-xs font-medium text-red-500">
          <Icon name="close" size={13} strokeWidth={2.4} />
          {error}
        </p>
      )}
    </div>
  );
}

const baseControl =
  "w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink shadow-sm outline-none transition-all duration-200 placeholder:text-slate-soft/60 focus:ring-4";
const okBorder =
  "border-brand-100 focus:border-brand-500 focus:ring-brand-500/15";
const errBorder = "border-red-300 focus:border-red-500 focus:ring-red-500/15";

export default function EnquiryForm() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (name, value) => {
    setValues((v) => ({ ...v, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => {
        const next = validate({ ...values, [name]: value });
        return { ...prev, [name]: next[name] };
      });
    }
  };

  const onBlur = (name) => {
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validate(values)[name] }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched(
      Object.keys(INITIAL).reduce((a, k) => ({ ...a, [k]: true }), {})
    );
    if (Object.keys(found).length) {
      // Focus first invalid field
      const first = document.getElementById(Object.keys(found)[0]);
      first?.focus();
      return;
    }
    setSubmitting(true);
    // Simulate an async submission (frontend-only).
    await new Promise((r) => setTimeout(r, 1300));
    setSubmitting(false);
    setSubmitted(true);
  };

  const reset = () => {
    setValues(INITIAL);
    setErrors({});
    setTouched({});
    setSubmitted(false);
  };

  const ctrl = (name) =>
    `${baseControl} ${errors[name] ? errBorder : okBorder}`;

  return (
    <Section id="enquiry" className="bg-white py-24 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Left: pitch */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Enquiry Form
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            Tell us about your <span className="text-gradient">project</span>
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-slate-soft">
            Share a few details and our team will respond within one business
            day with the right people and a clear next step. No obligations.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              { icon: "clock", title: "Fast response", text: "A senior consultant replies within 24 hours." },
              { icon: "shield", title: "Confidential", text: "Your information is kept private and secure." },
              { icon: "partner", title: "No hard sell", text: "Honest advice, whether or not we work together." },
            ].map((b) => (
              <li key={b.title} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={b.icon} size={20} />
                </span>
                <div>
                  <p className="font-semibold text-ink">{b.title}</p>
                  <p className="text-sm text-slate-soft">{b.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: form card */}
        <Reveal>
          <div className="relative rounded-[2rem] border border-brand-100 bg-white p-6 shadow-glow sm:p-9">
            {submitted ? (
              <div className="flex flex-col items-center py-14 text-center">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-cyan-500 text-white shadow-glow">
                  <Icon name="check" size={40} strokeWidth={2.4} />
                </span>
                <h3 className="mt-6 font-display text-2xl font-extrabold text-ink">
                  Thank you, {values.contact.split(" ")[0] || "there"}!
                </h3>
                <p className="mt-3 max-w-sm text-slate-soft">
                  Your enquiry has been received. A member of our team will reach
                  out to <span className="font-semibold text-ink">{values.email}</span>{" "}
                  shortly.
                </p>
                <button
                  onClick={reset}
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-brand-200 px-6 py-3 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                <Field label="Company Name" name="company" error={touched.company && errors.company} required>
                  <input
                    id="company"
                    type="text"
                    value={values.company}
                    onChange={(e) => update("company", e.target.value)}
                    onBlur={() => onBlur("company")}
                    placeholder="Acme Corporation"
                    className={ctrl("company")}
                  />
                </Field>

                <Field label="Contact Person" name="contact" error={touched.contact && errors.contact} required>
                  <input
                    id="contact"
                    type="text"
                    value={values.contact}
                    onChange={(e) => update("contact", e.target.value)}
                    onBlur={() => onBlur("contact")}
                    placeholder="Jane Doe"
                    className={ctrl("contact")}
                  />
                </Field>

                <Field label="Designation" name="designation" error={touched.designation && errors.designation} required>
                  <input
                    id="designation"
                    type="text"
                    value={values.designation}
                    onChange={(e) => update("designation", e.target.value)}
                    onBlur={() => onBlur("designation")}
                    placeholder="Chief Technology Officer"
                    className={ctrl("designation")}
                  />
                </Field>

                <Field label="Email" name="email" error={touched.email && errors.email} required>
                  <input
                    id="email"
                    type="email"
                    value={values.email}
                    onChange={(e) => update("email", e.target.value)}
                    onBlur={() => onBlur("email")}
                    placeholder="jane@acme.com"
                    className={ctrl("email")}
                  />
                </Field>

                <Field label="Phone Number" name="phone" error={touched.phone && errors.phone} required>
                  <input
                    id="phone"
                    type="tel"
                    value={values.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    onBlur={() => onBlur("phone")}
                    placeholder="+1 415 555 0192"
                    className={ctrl("phone")}
                  />
                </Field>

                <Field label="Country" name="country" error={touched.country && errors.country} required>
                  <div className="relative">
                    <select
                      id="country"
                      value={values.country}
                      onChange={(e) => update("country", e.target.value)}
                      onBlur={() => onBlur("country")}
                      className={`${ctrl("country")} appearance-none pr-10 ${!values.country ? "text-slate-soft/60" : ""}`}
                    >
                      <option value="" disabled>Select country</option>
                      {COUNTRIES.map((c) => (
                        <option key={c} value={c} className="text-ink">{c}</option>
                      ))}
                    </select>
                    <Icon name="chevronDown" size={18} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-soft" />
                  </div>
                </Field>

                <Field label="Industry" name="industry" error={touched.industry && errors.industry} required>
                  <div className="relative">
                    <select
                      id="industry"
                      value={values.industry}
                      onChange={(e) => update("industry", e.target.value)}
                      onBlur={() => onBlur("industry")}
                      className={`${ctrl("industry")} appearance-none pr-10 ${!values.industry ? "text-slate-soft/60" : ""}`}
                    >
                      <option value="" disabled>Select industry</option>
                      {FORM_INDUSTRIES.map((c) => (
                        <option key={c} value={c} className="text-ink">{c}</option>
                      ))}
                    </select>
                    <Icon name="chevronDown" size={18} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-soft" />
                  </div>
                </Field>

                <Field label="Interested Service" name="service" error={touched.service && errors.service} required>
                  <div className="relative">
                    <select
                      id="service"
                      value={values.service}
                      onChange={(e) => update("service", e.target.value)}
                      onBlur={() => onBlur("service")}
                      className={`${ctrl("service")} appearance-none pr-10 ${!values.service ? "text-slate-soft/60" : ""}`}
                    >
                      <option value="" disabled>Select a service</option>
                      {FORM_SERVICES.map((c) => (
                        <option key={c} value={c} className="text-ink">{c}</option>
                      ))}
                    </select>
                    <Icon name="chevronDown" size={18} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-soft" />
                  </div>
                </Field>

                <Field label="Project Details" name="details" error={touched.details && errors.details} required>
                  <textarea
                    id="details"
                    rows={4}
                    value={values.details}
                    onChange={(e) => update("details", e.target.value)}
                    onBlur={() => onBlur("details")}
                    placeholder="Tell us about your goals, timeline, and what success looks like…"
                    className={`${ctrl("details")} resize-none`}
                  />
                </Field>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-brand-600 px-7 py-4 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-500 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                  >
                    {submitting ? (
                      <>
                        <Icon name="spinner" size={18} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Submit Enquiry
                        <Icon name="send" size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                  <p className="mt-3 text-xs text-slate-soft">
                    By submitting, you agree to be contacted by Clarus IT
                    Solutions regarding your enquiry.
                  </p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
