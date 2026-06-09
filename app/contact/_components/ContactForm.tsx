"use client";

import { useState } from "react";

const projectTypes = [
  "Blockchain & Web3",
  "FinTech",
  "Platform Engineering",
  "AEC Technology",
  "Something else",
];

const budgets = ["< $25k", "$25k–$75k", "$75k–$150k", "$150k+", "Not sure yet"];

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function fieldClasses(hasError: boolean) {
  return [
    "w-full rounded-xl border bg-surface px-4 py-3 text-sm text-foreground",
    "placeholder:text-faint transition-colors duration-200 outline-none",
    hasError
      ? "border-red-400 focus:border-red-500"
      : "border-border focus:border-accent",
  ].join(" ");
}

function Label({
  htmlFor,
  children,
  optional,
}: {
  htmlFor: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-muted"
    >
      <span>{children}</span>
      {optional && <span className="text-faint normal-case">optional</span>}
    </label>
  );
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  function validate(): Errors {
    const next: Errors = {};
    if (!name.trim()) next.name = "Please tell us your name.";
    if (!email.trim()) next.email = "An email is required.";
    else if (!EMAIL_RE.test(email)) next.email = "That email looks off.";
    if (message.trim().length < 10)
      next.message = "A little more detail helps us reply well.";
    return next;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = document.querySelector<HTMLElement>("[data-error='true']");
      first?.focus();
      return;
    }
    setStatus("submitting");
    // No backend wired yet — simulate the round-trip so the UX is complete.
    await new Promise((r) => setTimeout(r, 1100));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="success-pop flex min-h-[520px] flex-col items-center justify-center rounded-3xl border border-border bg-surface p-10 text-center">
        <span className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-8 w-8 text-emerald-600"
            aria-hidden="true"
          >
            <path
              d="M5 12.5l4.2 4.2L19 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="check-draw"
            />
          </svg>
        </span>
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          Message received{name ? `, ${name.split(" ")[0]}` : ""}.
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
          Thanks for reaching out. A member of the team will get back to you
          within one business day — usually much sooner.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setName("");
            setEmail("");
            setCompany("");
            setProjectType("");
            setBudget("");
            setMessage("");
            setErrors({});
          }}
          className="mt-8 inline-flex h-11 items-center justify-center rounded-full border border-border px-5 text-sm font-medium text-foreground transition-colors hover:bg-subtle"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="relative rounded-3xl border border-border bg-surface p-6 md:p-8"
    >
      {/* Mono corner index — quiet editorial detail */}
      <span className="absolute right-6 top-6 font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
        Inquiry
      </span>

      <div className="flex flex-col gap-5">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ada Lovelace"
            className={fieldClasses(!!errors.name)}
            data-error={!!errors.name}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <span className="text-xs text-red-500">{errors.name}</span>
          )}
        </div>

        {/* Email + Company */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className={fieldClasses(!!errors.email)}
              data-error={!!errors.email}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <span className="text-xs text-red-500">{errors.email}</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="company" optional>
              Company
            </Label>
            <input
              id="company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Acme Inc."
              className={fieldClasses(false)}
            />
          </div>
        </div>

        {/* Project type — pill toggles tied to services */}
        <fieldset className="flex flex-col gap-2.5">
          <legend className="mb-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            What can we help with?
          </legend>
          <div className="flex flex-wrap gap-2">
            {projectTypes.map((type) => {
              const active = projectType === type;
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => setProjectType(active ? "" : type)}
                  aria-pressed={active}
                  className={[
                    "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-200",
                    active
                      ? "border-transparent bg-foreground text-surface"
                      : "border-border text-muted hover:border-foreground/20 hover:text-foreground",
                  ].join(" ")}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </fieldset>

        {/* Budget */}
        <fieldset className="flex flex-col gap-2.5">
          <legend className="mb-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            Estimated budget <span className="text-faint">· optional</span>
          </legend>
          <div className="flex flex-wrap gap-2">
            {budgets.map((b) => {
              const active = budget === b;
              return (
                <button
                  key={b}
                  type="button"
                  onClick={() => setBudget(active ? "" : b)}
                  aria-pressed={active}
                  className={[
                    "rounded-full border px-3.5 py-1.5 text-xs font-medium tabular-nums transition-all duration-200",
                    active
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border text-muted hover:border-foreground/20 hover:text-foreground",
                  ].join(" ")}
                >
                  {b}
                </button>
              );
            })}
          </div>
        </fieldset>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="message">Project details</Label>
          <textarea
            id="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about what you're building, the problem you're solving, and where we might fit in."
            className={`${fieldClasses(!!errors.message)} resize-none`}
            data-error={!!errors.message}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <span className="text-xs text-red-500">{errors.message}</span>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="group mt-1 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-surface transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-10px_rgba(10,10,10,0.45)] disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 disabled:shadow-none"
        >
          {status === "submitting" ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-surface/40 border-t-surface" />
              Sending…
            </>
          ) : (
            <>
              Send message
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </>
          )}
        </button>

        <p className="text-xs leading-5 text-faint">
          By submitting, you agree to be contacted about your inquiry. We never
          share your details.
        </p>
      </div>
    </form>
  );
}
