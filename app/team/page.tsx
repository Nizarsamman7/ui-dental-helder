import type { Metadata } from "next";
export const metadata: Metadata = { title: "Team" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"People"}</p>
      <h1>{"Dentists and the desk."}</h1>
      <p className="lede">{"You see the same dentist unless they are away. The hygienist has her own book."}</p>
      
      <div className="trio">
<article className="panel"><h2>{"Dr. I. Helder"}</h2><p>{"Adults, repairs, and crowns."}</p></article>
<article className="panel"><h2>{"Dr. S. Berg"}</h2><p>{"Children and check-ups."}</p></article>
<article className="panel"><h2>{"M. Vos"}</h2><p>{"Hygiene."}</p></article>
<article className="panel"><h2>{"Desk"}</h2><p>{"Insurance questions and the book."}</p></article>
</div>
      
      
      
    </article>
  );
}
