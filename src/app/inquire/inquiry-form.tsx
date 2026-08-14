"use client";
import { useState } from "react";

const steps = [
  {
    title: "About you",
    fields: ["First name", "Last name", "Email", "Phone"],
  },
  {
    title: "Your property",
    fields: ["City", "ZIP", "Property type", "Ownership status"],
  },
  {
    title: "Your project",
    fields: ["Project type", "Estimated investment", "Desired start date", "Decision-maker status"],
  },
  {
    title: "Details",
    fields: ["Tell us about your project", "How did you hear about us?"],
  },
];

export function InquiryForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const current = steps[step];

  if (submitted) {
    return (
      <div className="bg-stone-50 p-8 rounded-xl border border-stone-200">
        <p className="text-xs font-bold uppercase tracking-widest text-[#e87a24] mb-2">Inquiry received</p>
        <h1 className="text-2xl font-black mb-4 uppercase tracking-tight">Thank you for sharing your project.</h1>
        <p className="text-stone-600 leading-relaxed">
          This is a demonstration form: no information has been transmitted. In production, the next step would be a considered review and a response from the studio.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex gap-2 mb-6" aria-label={`Step ${step + 1} of ${steps.length}`}>
        {steps.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              index <= step ? "bg-[#e87a24]" : "bg-stone-200"
            }`}
          />
        ))}
      </div>
      
      <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-2">
        Step {step + 1} of {steps.length}
      </p>
      <h2 className="text-2xl font-black mb-6 uppercase tracking-tight text-[var(--ink)]">
        {current.title}
      </h2>
      
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (step === steps.length - 1) {
            setSubmitted(true);
          } else {
            setStep(step + 1);
          }
        }}
        className="space-y-5"
      >
        {current.fields.map((field, index) => (
          <div className="flex flex-col gap-1.5" key={field}>
            <label htmlFor={`field-${step}-${index}`} className="text-sm font-bold text-stone-700">
              {field}
            </label>
            {field.includes("Tell") ? (
              <textarea
                id={`field-${step}-${index}`}
                required
                rows={4}
                className="w-full p-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e87a24]/50 focus:border-[#e87a24] transition-all resize-y bg-stone-50"
              />
            ) : field.includes("type") || field.includes("status") || field.includes("investment") ? (
              <select
                id={`field-${step}-${index}`}
                required
                defaultValue=""
                className="w-full p-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e87a24]/50 focus:border-[#e87a24] transition-all bg-stone-50 appearance-none"
              >
                <option value="" disabled>Select an option</option>
                <option>Not sure yet</option>
                <option>Whole home</option>
                <option>Renovation</option>
                <option>New construction</option>
                <option>Furnishing & styling</option>
              </select>
            ) : (
              <input
                id={`field-${step}-${index}`}
                required
                type={field === "Email" ? "email" : field === "Phone" ? "tel" : "text"}
                className="w-full p-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e87a24]/50 focus:border-[#e87a24] transition-all bg-stone-50"
              />
            )}
          </div>
        ))}
        
        <div className="flex items-center justify-between pt-6 border-t border-stone-200 mt-8">
          {step > 0 ? (
            <button
              className="px-6 py-3 text-sm font-bold text-stone-500 hover:text-stone-800 transition-colors uppercase tracking-wider"
              type="button"
              onClick={() => setStep(step - 1)}
            >
              Back
            </button>
          ) : (
            <span />
          )}
          <button
            className="px-8 py-3 bg-[#121110] text-white hover:bg-[#e87a24] rounded-lg text-sm font-black tracking-widest uppercase transition-colors shadow-md active:scale-95 flex items-center gap-2"
            type="submit"
          >
            {step === steps.length - 1 ? "Submit inquiry" : "Continue"} <span>→</span>
          </button>
        </div>
      </form>
    </div>
  );
}
