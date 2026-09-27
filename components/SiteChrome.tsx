import Link from "next/link";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="nav">
        <Link className="logo" href="/">Helder Dental</Link>
        <nav><Link href="/new-patients">New patients</Link></nav>
      </header>
      <nav className="site-nav" aria-label="Pages">
        <Link href="/">Home</Link>
        <Link href="/treatments">Treatments</Link>
        <Link href="/new-patients">New patients</Link>
        <Link href="/check-up">Check-up</Link>
        <Link href="/hygiene">Hygiene</Link>
        <Link href="/children">Children</Link>
        <Link href="/fees">Fees</Link>
        <Link href="/insurance">Insurance</Link>
        <Link href="/emergency">Emergency</Link>
        <Link href="/team">Team</Link>
        <Link href="/about">About</Link>
        <Link href="/hours">Hours</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
}
