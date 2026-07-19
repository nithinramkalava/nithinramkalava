"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const MAX_NAME = 100;
const MAX_EMAIL = 100;
const MAX_SUBJECT = 200;
const MAX_MESSAGE = 5000;

type Fields = "name" | "email" | "subject" | "message";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ ok?: boolean; message?: string }>({});

  const validate = (field: Fields, value: string) => {
    switch (field) {
      case "name":
        return value.length > MAX_NAME ? `Keep the name under ${MAX_NAME} characters.` : "";
      case "email":
        return !EMAIL_REGEX.test(value)
          ? "Enter a valid email address."
          : value.length > MAX_EMAIL
            ? `Keep the email under ${MAX_EMAIL} characters.`
            : "";
      case "subject":
        return value.length > MAX_SUBJECT ? `Keep the subject under ${MAX_SUBJECT} characters.` : "";
      case "message":
        return value.length > MAX_MESSAGE ? `Keep the message under ${MAX_MESSAGE} characters.` : "";
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setForm((p) => ({ ...p, [id]: value }));
    setErrors((p) => ({ ...p, [id]: validate(id as Fields, value) }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = {
      name: validate("name", form.name),
      email: validate("email", form.email),
      subject: validate("subject", form.subject),
      message: validate("message", form.message),
    };
    setErrors(nextErrors);
    const filled = form.name && form.email && form.subject && form.message;
    if (!filled || Object.values(nextErrors).some(Boolean)) {
      setStatus({ ok: false, message: "Fill in every field and fix the errors first." });
      return;
    }

    setSubmitting(true);
    setStatus({});
    const sanitized = Object.fromEntries(
      Object.entries(form).map(([k, v]) => [k, v.replace(/</g, "&lt;").replace(/>/g, "&gt;")]),
    );

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sanitized),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ ok: true, message: "Thanks, your message is on its way." });
        setForm({ name: "", email: "", subject: "", message: "" });
        setErrors({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ ok: false, message: data.error || "That didn't send. Try again in a moment." });
      }
    } catch {
      setStatus({ ok: false, message: "Something went wrong. Try again later." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      {status.message && (
        <div className={`form-status ${status.ok ? "ok" : "bad"}`}>{status.message}</div>
      )}
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" value={form.name} onChange={onChange} placeholder="Your name" />
          {errors.name && <p className="err">{errors.name}</p>}
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={onChange}
            placeholder="you@example.com"
          />
          {errors.email && <p className="err">{errors.email}</p>}
        </div>
      </div>
      <div className="field">
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          type="text"
          value={form.subject}
          onChange={onChange}
          placeholder="What's this about?"
        />
        {errors.subject && <p className="err">{errors.subject}</p>}
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={form.message}
          onChange={onChange}
          placeholder="What's on your mind?"
        />
        {errors.message && <p className="err">{errors.message}</p>}
      </div>
      <div>
        <button className="btn pri" type="submit" disabled={submitting}>
          {submitting ? "Sending…" : "Send message"} <span className="arr">→</span>
        </button>
      </div>
    </form>
  );
}
