import type { Metadata } from "next";
export const metadata: Metadata = { title: "Hygiene" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Gums"}</p>
      <h1>{"A longer appointment with the hygienist."}</h1>
      <p className="lede">{"If your gums bleed, this is the visit, not a harder brush. We show you what to change at home."}</p>
      <p>{"Some people need two visits close together, then a longer gap. We do not sell a package of six on the first day."}</p>
      
      
      
      
    </article>
  );
}
