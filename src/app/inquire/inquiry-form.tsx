"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { formBackend } from "@/config/form-backend";

const steps = [
  { title: "About you", fields: ["First name", "Last name", "Email", "Phone"] },
  { title: "Your property", fields: ["City", "ZIP", "Property type", "Ownership status"] },
  { title: "Your project", fields: ["Project type", "Estimated investment", "Desired start date", "Decision-maker status"] },
  { title: "Details", fields: ["Tell us about your project", "How did you hear about us?"] },
] as const;

const fieldKey = (field: string) => field.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const selectOptions = ["Not sure yet", "Whole home", "Renovation", "New construction", "Furnishing & styling"];

export function InquiryForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [formData, setFormData] = useState<Record<string, string>>({});
  const current = steps[step];

  useEffect(() => {
    document.getElementById(`inquiry-step-${step}`)?.focus();
  }, [step]);

  const updateField = (field: string, value: string) => setFormData((previous) => ({ ...previous, [fieldKey(field)]: value }));

  const submitInquiry = async () => {
    if (!formBackend.endpoint) {
      setStatus("error");
      setErrorMessage("The inquiry backend is not configured yet. Add NEXT_PUBLIC_FORM_ENDPOINT before launch.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");
    if (website) {
      setSubmitted(true);
      return;
    }

    const payload = new URLSearchParams({
      leadSource: "Website",
      name: [formData["first-name"], formData["last-name"]].filter(Boolean).join(" "),
      email: formData.email ?? "",
      phone: formData.phone ?? "",
      location: [formData.city, formData.zip].filter(Boolean).join(", "),
      service: formData["project-type"] ?? "",
      budget: formData["estimated-investment"] ?? "",
      timeline: formData["desired-start-date"] ?? "",
      projectDetails: [
        formData["decision-maker-status"],
        formData["tell-us-about-your-project"],
        formData["how-did-you-hear-about-us"],
      ].filter(Boolean).join("\n\n"),
      consultationDate: formData["desired-start-date"] ?? "",
      website: "",
    });

    try {
      // Apps Script ContentService does not provide reliable readable CORS
      // responses. A resolved no-cors request means the browser dispatched it;
      // the backend remains the source of truth for storage/email outcomes.
      await fetch(formBackend.endpoint, { method: "POST", mode: "no-cors", body: payload });
      setSubmitted(true);
    } catch {
      setStatus("error");
      setErrorMessage("We could not send your inquiry. Please try again or contact the studio directly.");
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    if (step === steps.length - 1) void submitInquiry();
    else setStep((currentStep) => currentStep + 1);
  };

  if (submitted) {
    return <div className="bg-stone-50 p-8 rounded-xl border border-stone-200 animate-fade-up" role="status">
      <p className="text-xs font-bold uppercase tracking-widest text-[#e87a24] mb-2">Inquiry received</p>
      <h1 className="text-2xl font-black mb-4 uppercase tracking-tight">Thank you for sharing your project.</h1>
      <p className="text-stone-600 leading-relaxed">Your inquiry has been submitted for review. The studio will follow up using the contact details you provided. If you do not hear back, please contact the studio directly.</p>
    </div>;
  }

  return <div className="w-full">
    <div className="flex gap-2 mb-6" aria-label={`Step ${step + 1} of ${steps.length}`}>
      {steps.map((item, index) => <div key={item.title} className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${index <= step ? "bg-[#e87a24]" : "bg-stone-200"}`} style={{ transformOrigin: "left", transform: index <= step ? "scaleX(1)" : "scaleX(.72)" }} />)}
    </div>
    <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-2">Step {step + 1} of {steps.length}</p>
    <h2 id={`inquiry-step-${step}`} tabIndex={-1} className="text-2xl font-black mb-6 uppercase tracking-tight text-[var(--ink)] outline-none animate-fade-up">{current.title}</h2>

    <form onSubmit={handleSubmit} className="space-y-5" key={step}>
      {current.fields.map((field, index) => {
        const key = fieldKey(field);
        const id = `field-${key}`;
        const value = formData[key] ?? "";
        const isLongText = field.includes("Tell");
        const isSelect = field.includes("type") || field.includes("status") || field.includes("investment");
        return <div className="flex flex-col gap-1.5 animate-fade-up" style={{ animationDelay: `${index * 60}ms` }} key={field}>
          <label htmlFor={id} className="text-sm font-bold text-stone-700">{field}</label>
          {isLongText ? <textarea id={id} required rows={4} value={value} onChange={(event) => updateField(field, event.target.value)} className="w-full p-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e87a24]/50 focus:border-[#e87a24] transition-all resize-y bg-stone-50" /> : isSelect ? <select id={id} required value={value} onChange={(event) => updateField(field, event.target.value)} className="w-full p-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e87a24]/50 focus:border-[#e87a24] transition-all bg-stone-50 appearance-none"><option value="" disabled>Select an option</option>{selectOptions.map((option) => <option key={option}>{option}</option>)}</select> : <input id={id} required value={value} onChange={(event) => updateField(field, event.target.value)} type={field === "Email" ? "email" : field === "Phone" ? "tel" : "text"} className="w-full p-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e87a24]/50 focus:border-[#e87a24] transition-all bg-stone-50" />}
        </div>;
      })}
      {step === steps.length - 1 && <div className="absolute -left-[9999px]" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} /></div>}
      {status === "error" && <p className="text-sm text-red-700" role="alert">{errorMessage}</p>}
      <div className="flex items-center justify-between pt-6 border-t border-stone-200 mt-8">
        {step > 0 ? <button className="px-6 py-3 text-sm font-bold text-stone-500 hover:text-stone-800 transition-colors uppercase tracking-wider" type="button" onClick={() => setStep((currentStep) => currentStep - 1)}>Back</button> : <span />}
        <button disabled={status === "sending"} className="px-8 py-3 bg-[#121110] text-white hover:bg-[#e87a24] disabled:opacity-60 disabled:cursor-wait rounded-lg text-sm font-black tracking-widest uppercase transition-colors shadow-md active:scale-95 flex items-center gap-2" type="submit">{status === "sending" ? "Sending…" : step === steps.length - 1 ? "Submit inquiry" : "Continue"} <span>→</span></button>
      </div>
    </form>
  </div>;
}
