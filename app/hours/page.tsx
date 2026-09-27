import type { Metadata } from "next";
export const metadata: Metadata = { title: "Hours" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Book"}</p>
      <h1>{"The clinic week."}</h1>
      <p className="lede">{"The phone is answered during these hours. The emergency chair is weekday mornings."}</p>
      
      
      <div className="stack">
<div className="row"><b>{"Monday"}</b><span>{"08:15–17:00"}</span></div>
<div className="row"><b>{"Tuesday"}</b><span>{"08:15–17:00"}</span></div>
<div className="row"><b>{"Wednesday"}</b><span>{"08:15–12:30"}</span></div>
<div className="row"><b>{"Thursday"}</b><span>{"08:15–19:00"}</span></div>
<div className="row"><b>{"Friday"}</b><span>{"08:15–16:00"}</span></div>
</div>
      
      
    </article>
  );
}
