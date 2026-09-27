import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata: Metadata = { title: "Treatments" };

const items = [
  ["Check-up", "Exam, polish, and a written plan."],
  ["Hygiene", "Longer visits for gum care."],
  ["Fillings", "Tooth-coloured repairs."],
  ["Crowns", "When a tooth needs more than a filling."],
  ["Whitening", "After the mouth is healthy."],
  ["Children", "Short visits, same dentists."],
];

export default function TreatmentsPage() {
  return (
    <>
      <header className="nav">
        <Link className="logo" href="/">Helder Dental</Link>
        <nav><Link href="/">Home</Link></nav>
      </header>
      <section className="treat">
        {items.map(([title, text]) => <article className="card" key={title}><h2>{title}</h2><p>{text}</p></article>)}
      </section>
      <section className="pad">
        <h1>Request a visit</h1>
        <InquiryForm
          submitLabel="Request appointment"
          fields={[
            { name: "name", label: "Name" },
            { name: "phone", label: "Phone", type: "tel" },
            { name: "patient", label: "Patient", type: "select", options: ["New patient", "Existing patient", "Child"] },
            { name: "note", label: "What do you need?", type: "textarea" },
          ]}
        />
      </section>
    </>
  );
}
