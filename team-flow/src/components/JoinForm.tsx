"use client";

import { useState } from "react";

type RoleType = "student" | "college" | "sponsor";

type FormState = {
  role: RoleType;
  fullName: string;
  email: string;
  phone: string;
  organizationName: string;
  message: string;
};

const roleLabels: Record<RoleType, string> = {
  student: "Student Signup",
  college: "College Registration",
  sponsor: "Sponsor Registration",
};

const initialState: FormState = {
  role: "student",
  fullName: "",
  email: "",
  phone: "",
  organizationName: "",
  message: "",
};

export function JoinForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const setRole = (role: RoleType) => {
    setForm((prev) => ({ ...prev, role }));
    setStatus("");
  };

  const onChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/registrations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || "Could not submit registration.");
      }

      setStatus("Registration received. Our team will contact you soon.");
      setForm((prev) => ({ ...initialState, role: prev.role }));
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unexpected error occurred.";
      setStatus(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-block fade-up">
      <div className="section-head">
        <h2>Join TEAM FLOW</h2>
        <p>Fill in your details to join Odisha&apos;s collaborative innovation network.</p>
      </div>

      <div className="glass-panel form-shell">
        <div className="role-switch">
          {(Object.keys(roleLabels) as RoleType[]).map((role) => (
            <button
              key={role}
              type="button"
              className={form.role === role ? "selected" : ""}
              onClick={() => setRole(role)}
            >
              {roleLabels[role]}
            </button>
          ))}
        </div>

        <form className="join-form" onSubmit={onSubmit}>
          <label>
            Full Name
            <input
              value={form.fullName}
              onChange={(e) => onChange("fullName", e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </label>

          <label>
            Email
            <input
              value={form.email}
              onChange={(e) => onChange("email", e.target.value)}
              placeholder="name@example.com"
              type="email"
              required
            />
          </label>

          <label>
            Phone
            <input
              value={form.phone}
              onChange={(e) => onChange("phone", e.target.value)}
              placeholder="+91"
              required
            />
          </label>

          <label>
            {form.role === "college" ? "College Name" : form.role === "sponsor" ? "Company Name" : "College / Institute"}
            <input
              value={form.organizationName}
              onChange={(e) => onChange("organizationName", e.target.value)}
              placeholder="Organization name"
              required
            />
          </label>

          <label>
            Message
            <textarea
              value={form.message}
              onChange={(e) => onChange("message", e.target.value)}
              placeholder="Tell us what you want to build"
              rows={4}
            />
          </label>

          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Registration"}
          </button>
        </form>

        {status ? <p className="form-status">{status}</p> : null}
      </div>
    </section>
  );
}
