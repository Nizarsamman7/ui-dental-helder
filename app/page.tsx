import Link from "next/link";

const steps = [
  ["01", "Call or write", "Tell us if you are new or already a patient."],
  ["02", "First visit", "Exam, photos, and a plain-language plan."],
  ["03", "Care", "Hygiene, repairs, or a referral if you need one."],
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div>
          <p>Clinic · Rivierenbuurt</p>
          <h1>Quiet dentistry, explained before it starts.</h1>
          <p>Adults and children. Most Dutch insurers accepted. Emergency chair on weekday mornings.</p>
          <p><Link href="/new-patients">New patient visit</Link></p>
        </div>
        <aside className="note">
          <strong>This week</strong>
          <p>New patients: Tue and Thu from 08:15.</p>
          <p>Maasstraat 82, Amsterdam</p>
        </aside>
      </section>
      <section className="steps">
        {steps.map(([num, title, text]) => (
          <article className="card" key={num}><span className="num">{num}</span><h2>{title}</h2><p>{text}</p></article>
        ))}
      </section>
    </>
  );
}
