import type { Metadata } from "next";
export const metadata: Metadata = { title: "Insurance" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Cover"}</p>
      <h1>{"Most Dutch basic and extra policies."}</h1>
      <p className="lede">{"We bill the insurer when we can. You pay the part they do not cover at the desk."}</p>
      <p>{"Bring the policy number. If you are not insured, we still treat you and we say the fee first."}</p>
      
      
      
      
    </article>
  );
}
