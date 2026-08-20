import { useState } from "react";
import { Link } from "wouter";
import { ArrowDownRight, ArrowUpRight, CalendarDays, Check, ChevronDown, Clock3, Instagram, MapPin, Menu, Minus, Phone, Plus, Sparkles, Stethoscope, X } from "lucide-react";

// Quiet Confidence system: left-anchored editorial layout, Cormorant Garamond + Manrope, ivory/ink/teal.
const hero = "https://d2xsxph8kpxj0f.cloudfront.net/310519663768090420/8JYX6iJ9s4kTKPoBctbewW/lumora-hero-Duhv3X4tAD2Di2y5y9EwQa.webp";
const clinic = "https://d2xsxph8kpxj0f.cloudfront.net/310519663768090420/8JYX6iJ9s4kTKPoBctbewW/lumora-clinic-gGZnkiw39aY7PiydeM2tuy.webp";
const care = "https://d2xsxph8kpxj0f.cloudfront.net/310519663768090420/8JYX6iJ9s4kTKPoBctbewW/lumora-care-Wx2yhjoYGNLHTJ88aUy3nX.webp";
const team = "https://d2xsxph8kpxj0f.cloudfront.net/310519663768090420/8JYX6iJ9s4kTKPoBctbewW/lumora-team-eAAABYLSqaQKHLWRDpCFBG.webp";
const mark = "https://d2xsxph8kpxj0f.cloudfront.net/310519663768090420/8JYX6iJ9s4kTKPoBctbewW/lumora-mark-NmfmMK4xWWg4pQjL3hdxe8.webp";

const services: any[] = [
  ["01", "Preventive care", "Checkups, hygiene visits, and gum care that make long-term health feel simple.", Stethoscope],
  ["02", "Cosmetic dentistry", "Thoughtful whitening, bonding, and veneers that keep your smile looking like you.", Sparkles],
  ["03", "Restorative care", "Modern crowns, bridges, implants, and dentures designed for comfort and confidence.", Plus],
  ["04", "Clear aligners", "A discreet, considered path to a straighter smile with a plan built around your life.", ArrowUpRight],
];
const faqs = [
  ["How often should I visit the dentist?", "For most people, a checkup every six months is a helpful rhythm. We’ll recommend a schedule based on your oral health, goals, and comfort."],
  ["How long does a cleaning take?", "A first visit usually takes about 60 minutes, giving us time to listen, examine, and care for your smile without rushing."],
  ["Do you treat children?", "Yes. We create calm, age-appropriate visits that help children build healthy habits and positive associations with dental care."],
  ["How do I book an appointment?", "You can request a visit online in under two minutes or call the studio. We’ll reach out to confirm a time that works for you."],
];

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="container nav-wrap">
      <a href="#top" className="brand" aria-label="Lumora Dental Studio home"><span className="brand-mark">+</span><span>Lumora</span><small>Dental Studio</small></a>
      <nav className={`desktop-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
        <a href="#about" onClick={() => setOpen(false)}>About</a><a href="#services" onClick={() => setOpen(false)}>Services</a><a href="#team" onClick={() => setOpen(false)}>Our team</a><a href="#faq" onClick={() => setOpen(false)}>FAQs</a><a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        <Link className="nav-cta" href="/appointment">Book an appointment <ArrowUpRight size={15} /></Link>
      </nav>
      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </div>
  </header>;
}

export default function Home() {
  const [faq, setFaq] = useState(0);
  return <div id="top" className="page-shell"><Header />
    <main>
      <section className="hero container">
        <div className="hero-copy reveal"><p className="eyebrow"><span className="eyebrow-mark">+</span> Thoughtful dentistry, in every detail</p><h1>Confident smiles <em>start here.</em></h1><p className="hero-lede">Modern, personalized dental care designed to keep your smile healthy, confident, and beautifully yours.</p><div className="hero-actions"><Link className="button button-primary" href="/appointment">Book an appointment <ArrowUpRight size={17} /></Link><a className="text-link" href="#services">Explore our services <ArrowDownRight size={17} /></a></div><div className="trust-row"><div><strong>01</strong><span>Patient-first care</span></div><div><strong>02</strong><span>Modern technology</span></div><div><strong>03</strong><span>Clear guidance</span></div></div></div>
        <div className="hero-visual reveal"><img src={hero} alt="Dentist in a bright modern treatment room" /><div className="hero-note"><span>Good care feels different.</span><small>We make room for your questions.</small></div><div className="vertical-label">LUMORA / 2026</div></div>
      </section>

      <section className="intro band" id="about"><div className="container split-intro"><div className="section-rail"><span>01</span><p>About the studio</p></div><div className="intro-body"><p className="eyebrow">A calmer way to care for your smile</p><h2>Expertise with a <em>human touch.</em></h2><div className="intro-grid"><p>At Lumora, dentistry is not just about what happens in the chair. It is about being listened to, understanding your options, and leaving with a plan that feels right for you.</p><p>Our studio brings together considered design, modern technology, and a team who believe the best care starts with a conversation.</p></div><a className="text-link dark" href="#contact">Meet the studio <ArrowUpRight size={17} /></a></div></div></section>

      <section className="image-story container"><div className="story-image"><img src={clinic} alt="Warm, modern Lumora Dental Studio reception" /></div><div className="story-card"><span className="card-number">02 / Why Lumora</span><h3>It should feel good to come in.</h3><p>From a considered first hello to an unhurried explanation of your care, every part of Lumora is designed around your comfort.</p><ul><li><Check size={16}/> Thoughtful treatment plans</li><li><Check size={16}/> Transparent conversations</li><li><Check size={16}/> A team that remembers you</li></ul></div></section>

      <section className="services band" id="services"><div className="container"><div className="section-heading"><div className="section-rail"><span>03</span><p>What we do</p></div><div><p className="eyebrow">Care, without the clinical distance</p><h2>Everything your smile <em>needs next.</em></h2></div></div><div className="service-list">{services.map(([num, title, copy, Icon]: [string, string, string, any]) => <a href="#contact" className="service-item" key={title}><span className="service-num">{num}</span><span className="service-icon"><Icon size={21} strokeWidth={1.5}/></span><span className="service-copy"><h3>{title}</h3><p>{copy}</p></span><ArrowUpRight className="service-arrow" size={20}/></a>)}</div></div></section>

      <section className="care-feature container"><div className="care-copy"><p className="eyebrow"><span className="eyebrow-mark">+</span> The Lumora difference</p><h2>We explain the <em>why,</em> not just the what.</h2><p>Good dentistry is a partnership. We take time to understand what matters to you, share the options clearly, and make recommendations grounded in your health—not a sales script.</p><div className="stat-line"><strong>01</strong><span>A considered care plan, made together.</span></div><div className="stat-line"><strong>02</strong><span>Technology that helps you see what we see.</span></div><div className="stat-line"><strong>03</strong><span>Appointments that respect your time.</span></div></div><div className="care-image"><img src={care} alt="Dentist showing a patient a treatment plan" /><span>Care is a conversation.</span></div></section>

      <section className="team band" id="team"><div className="container team-grid"><div className="team-image"><img src={team} alt="Lumora dental care team" /><div className="team-tag">A small team<br/>with a big<br/><em>care philosophy.</em></div></div><div className="team-copy"><div className="section-rail"><span>04</span><p>Your care team</p></div><p className="eyebrow">Experienced, warm, attentive</p><h2>Meet the people<br/>behind your <em>smile.</em></h2><p>Our clinicians bring deep expertise and an easy way of being. We’re here to make your experience feel clear, comfortable, and entirely your own.</p><a className="button button-dark" href="#contact">Get to know us <ArrowUpRight size={17}/></a></div></div></section>

      <section className="faq container" id="faq"><div className="section-heading"><div className="section-rail"><span>05</span><p>Good to know</p></div><div><p className="eyebrow">Answers, before you arrive</p><h2>Your questions, <em>answered.</em></h2></div></div><div className="faq-list">{faqs.map(([q, a], i) => <div className={`faq-item ${faq === i ? "active" : ""}`} key={q}><button onClick={() => setFaq(faq === i ? -1 : i)} aria-expanded={faq === i}><span>{q}</span>{faq === i ? <Minus size={19}/> : <Plus size={19}/>}</button>{faq === i && <p>{a}</p>}</div>)}</div></section>

      <section className="cta-band" id="contact"><div className="container cta-inner"><div><p className="eyebrow"><span className="eyebrow-mark">+</span> Your next visit</p><h2>Thoughtful care<br/><em>starts here.</em></h2></div><div className="cta-side"><p>Tell us what you need; we’ll take it from there. Request a visit online or call the studio to speak with our team.</p><Link className="button button-light" href="/appointment">Book an appointment <ArrowUpRight size={17}/></Link><a className="phone-link" href="tel:[Phone Number]"><Phone size={15}/> [Phone Number]</a></div></div></section>
    </main>
    <footer className="site-footer"><div className="container footer-grid"><div className="footer-brand"><a className="brand inverse" href="#top"><span className="brand-mark">+</span><span>Lumora</span><small>Dental Studio</small></a><p>Thoughtful dentistry for a healthier, more confident smile.</p></div><div><p className="footer-label">Explore</p><a href="#about">About</a><a href="#services">Services</a><a href="#team">Our team</a><a href="#faq">FAQs</a></div><div><p className="footer-label">Visit</p><p>[Clinic Address]</p><p>[Opening Hours]</p><a href="mailto:[Email Address]">[Email Address]</a></div><div><p className="footer-label">Follow along</p><a href="#contact"><Instagram size={18}/> Instagram</a><a href="#contact"><MapPin size={18}/> Find us</a></div></div><div className="container footer-bottom"><span>© 2026 Lumora Dental Studio</span><span>Carefully made for your next visit.</span></div></footer>
    <div className="mobile-cta"><Link href="/appointment"><CalendarDays size={16}/> Book appointment</Link><a href="tel:[Phone Number]"><Phone size={16}/> Call now</a></div>
  </div>;
}
