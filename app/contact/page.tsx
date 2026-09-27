import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
export const metadata: Metadata = { title: "Contact" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Desk"}</p>
      <h1>{"Maasstraat 82. +31 20 123 4530."}</h1>
      <p className="lede">{"For a first visit, the new-patient form is faster than a general note."}</p>
      
      
      
      
      <InquiryForm submitLabel={"Send"} fields={[{"name":"name","label":"Name"},{"name":"phone","label":"Phone","type":"tel"},{"name":"email","label":"Email","type":"email"},{"name":"note","label":"Message","type":"textarea"}]} />
    </article>
  );
}
