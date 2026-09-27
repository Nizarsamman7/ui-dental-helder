import type { Metadata } from "next";
export const metadata: Metadata = { title: "About" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Clinic"}</p>
      <h1>{"A ground-floor clinic in Rivierenbuurt."}</h1>
      <p className="lede">{"Maasstraat 82. Step-free from the street. Two surgeries and a room for hygiene."}</p>
      <p>{"We explain the plan before we numb anything. If you want to stop, we stop."}</p>
      
      
      
      
    </article>
  );
}
