import type { Metadata } from "next";
export const metadata: Metadata = { title: "FAQ" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Desk"}</p>
      <h1>{"Questions we answer every week."}</h1>
      <p className="lede">{"If you are in pain, call. Do not wait for this page."}</p>
      
      
      
      <div className="stack">
<details className="panel"><summary>{"Are you taking new patients?"}</summary><p>{"Yes, on Tuesday and Thursday mornings."}</p></details>
<details className="panel"><summary>{"Do you sedate?"}</summary><p>{"Local anaesthetic. Not general anaesthetic."}</p></details>
<details className="panel"><summary>{"Wheelchair?"}</summary><p>{"Yes. The door and one surgery are step-free."}</p></details>
<details className="panel"><summary>{"How do I move my records?"}</summary><p>{"Sign the form at the desk and we request them."}</p></details>
</div>
      
    </article>
  );
}
