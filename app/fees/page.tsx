import type { Metadata } from "next";
export const metadata: Metadata = { title: "Fees" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Rates"}</p>
      <h1>{"Sample fees so the page has a shape."}</h1>
      <p className="lede">{"Real Dutch dental fees follow the national list. Replace these numbers with the current codes before launch."}</p>
      
      
      <div className="stack">
<div className="row"><b>{"Periodic exam"}</b><span>{"Sample €28"}</span></div>
<div className="row"><b>{"Hygiene, 30 min"}</b><span>{"Sample €65"}</span></div>
<div className="row"><b>{"Filling, one surface"}</b><span>{"Sample €75"}</span></div>
<div className="row"><b>{"Panoramic photo"}</b><span>{"Sample €80"}</span></div>
</div>
      
      
    </article>
  );
}
