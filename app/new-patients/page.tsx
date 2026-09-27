import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
export const metadata: Metadata = { title: "New patients" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"First visit"}</p>
      <h1>{"What to bring and what we will do."}</h1>
      <p className="lede">{"Bring your insurance card and a list of medicines. The first visit is an exam, not a surprise treatment."}</p>
      
      <div className="trio">
<article className="panel"><h2>{"Paperwork"}</h2><p>{"Ten minutes at the desk."}</p></article>
<article className="panel"><h2>{"Exam"}</h2><p>{"We look, we photograph if we need to, we explain."}</p></article>
<article className="panel"><h2>{"Plan"}</h2><p>{"You leave with the next step written down."}</p></article>
</div>
      
      
      <InquiryForm submitLabel={"Request a first visit"} fields={[{"name":"name","label":"Name"},{"name":"phone","label":"Phone","type":"tel"},{"name":"patient","label":"Patient","type":"select","options":["New adult","New child","Returning"]},{"name":"note","label":"What do you need?","type":"textarea"}]} />
    </article>
  );
}
