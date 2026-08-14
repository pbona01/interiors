import Link from "next/link";
import { site } from "@/config/site";
import { modeDisclaimer } from "@/lib/site-mode";

export function SiteFooter() {
  return <footer className="site-footer"><div><p className="eyebrow">Avery House Interiors</p><h2>Begin with a conversation about your home.</h2><Link className="text-link" href="/inquire">{site.inquiry.primaryCtaLabel} <span>↗</span></Link></div><div className="footer-bottom"><p>{modeDisclaimer(site)}</p><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><a href={`mailto:${site.contact.email}`}>{site.contact.email}</a></div></div></footer>;
}
