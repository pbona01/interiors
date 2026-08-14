"use client";

import { useState } from "react";

export function QuickConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Full-Scope Interior Design",
    location: "Montecito, CA",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 bg-[#e87a24] text-white rounded text-center space-y-3">
        <h3 className="text-2xl font-bold tracking-tight">THANK YOU FOR YOUR INQUIRY</h3>
        <p className="text-sm opacity-90">
          Our studio principal will review your project details and reach out within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="input-light-mode space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] font-bold tracking-wider uppercase mb-1.5 text-[var(--muted)]">Your Name *</label>
          <input
            type="text"
            required
            placeholder="e.g. Eleanor Vance"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-[10px] font-bold tracking-wider uppercase mb-1.5 text-[var(--muted)]">Email Address *</label>
          <input
            type="email"
            required
            placeholder="eleanor@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] font-bold tracking-wider uppercase mb-1.5 text-[var(--muted)]">Phone Number</label>
          <input
            type="tel"
            placeholder="(415) 890-3420"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-[10px] font-bold tracking-wider uppercase mb-1.5 text-[var(--muted)]">Service Needed</label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          >
            <option>Full-Scope Interior Design</option>
            <option>Interior Architecture & Millwork</option>
            <option>Furnishing, Curation & Styling</option>
            <option>Art & Lighting Consultation</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-bold tracking-wider uppercase mb-1.5 text-[var(--muted)]">Project Location & Scope Details</label>
        <textarea
          rows={3}
          placeholder="Tell us about your home, location (e.g. San Francisco, Montecito), and desired timeline..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="w-full btn-accent cursor-pointer text-center text-xs tracking-widest py-4 font-bold"
      >
        REQUEST A FREE SITE CONSULTATION ↗
      </button>
    </form>
  );
}
