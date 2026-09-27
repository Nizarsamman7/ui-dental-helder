import type { Metadata } from "next";
export const metadata: Metadata = { title: "Check-up" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Recall"}</p>
      <h1>{"The regular visit."}</h1>
      <p className="lede">{"Most adults come twice a year. We will say if you need less or more. X-rays are not automatic."}</p>
      <p>{"A check-up includes a look at gums, bite, and anything that hurts when you chew. Fillings are booked as a separate visit unless they are tiny and you agree."}</p>
      
      
      
      
    </article>
  );
}
