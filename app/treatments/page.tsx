import type { Metadata } from "next";
export const metadata: Metadata = { title: "Treatments" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Care"}</p>
      <h1>{"What we do in the building."}</h1>
      <p className="lede">{"If you need a specialist we do not have, we refer and we say so before the appointment."}</p>
      
      <div className="trio">
<article className="panel"><h2>{"Check-up"}</h2><p>{"Exam, polish, and a written plan."}</p></article>
<article className="panel"><h2>{"Hygiene"}</h2><p>{"Longer visits for gum care."}</p></article>
<article className="panel"><h2>{"Fillings"}</h2><p>{"Tooth-coloured repairs."}</p></article>
<article className="panel"><h2>{"Crowns"}</h2><p>{"When a tooth needs more than a filling."}</p></article>
<article className="panel"><h2>{"Whitening"}</h2><p>{"After the mouth is healthy, not before."}</p></article>
<article className="panel"><h2>{"Children"}</h2><p>{"Short visits with the same dentists."}</p></article>
</div>
      
      
      
    </article>
  );
}
