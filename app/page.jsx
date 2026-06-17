'use client';
import { useState, useEffect } from 'react';

/* ── Brand palette ───────────────────────────────────────────────── */
const B = {
  navy: '#17263D',
  navyDp: '#091930',
  teal: '#4A7C85',
  tealLt: '#5E9DAA',
  orange: '#E97132',
  silver: '#8FA3B0',
  offWhite: '#F2F7F8',
};

/* ── Theme (light) ───────────────────────────────────────────────── */
const TH = {
  heroGrad: 'linear-gradient(150deg,#E8F3F5 0%,#F2F7F8 60%)',
  bodyBg: '#fff', altBg: B.offWhite,
  cardBorder: 'rgba(23,38,61,0.09)', cardBgSolid: '#fff',
  text: B.navy, textSub: '#4A6070',
  accent: B.teal, accentHov: B.tealLt, accentGlow: 'rgba(74,124,133,0.25)',
  navBg: 'rgba(242,247,248,0.96)', navBorder: 'rgba(23,38,61,0.08)',
  pillBg: 'rgba(74,124,133,0.1)',
  inputBg: 'rgba(23,38,61,0.04)', inputBorder: 'rgba(23,38,61,0.15)',
  shotBg: B.offWhite,
  privBg: B.navy, privSub: 'rgba(255,255,255,0.55)',
  footBg: B.navyDp, footText: 'rgba(255,255,255,0.35)',
  divBg: B.offWhite,
};

/* ── SVG icons ───────────────────────────────────────────────────── */
const Ico = {
  phone: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="5" y="2" width="14" height="20" rx="3" /><line x1="9" y1="18" x2="15" y2="18" /></svg>,
  chart: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,18 9,10 13,14 22,5" /></svg>,
  target: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" fill="currentColor" /></svg>,
  lock: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="5" y="11" width="14" height="11" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>,
  check: <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M2,7.5l4,4 7-8" /></svg>,
};

/* ── Logo mark ───────────────────────────────────────────────────── */
function LogoMark({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ flexShrink: 0 }}>
      <defs>
        <radialGradient id="wmBg" cx="30%" cy="25%" r="80%">
          <stop offset="0%" stopColor="#1E3550" />
          <stop offset="100%" stopColor="#080F19" />
        </radialGradient>
        <radialGradient id="wmDp" cx="38%" cy="32%" r="68%">
          <stop offset="0%" stopColor="#C9303A" />
          <stop offset="55%" stopColor="#8B1A1A" />
          <stop offset="100%" stopColor="#4E0A0A" />
        </radialGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#wmBg)" />
      <path d="M50 22 C62 33 73 46 73 58 A23 23 0 0 1 27 58 C27 46 38 33 50 22Z" fill="url(#wmDp)" />
      <ellipse cx="41" cy="37" rx="5" ry="7.5" fill="rgba(255,255,255,0.18)" transform="rotate(-24 41 37)" />
    </svg>
  );
}

/* ── Woven three-strand motif ────────────────────────────────────── */
function WovenMotif() {
  const w = 560, h = 200, cy = h / 2;
  const s1 = `M 0,${cy - 65} C 90,${cy - 65} 80,${cy + 48} 170,${cy - 22} S 295,${cy + 55} 360,${cy - 18} S 460,${cy + 28} ${w},${cy}`;
  const s2 = `M 0,${cy} C 100,${cy} 110,${cy - 52} 200,${cy + 20} S 325,${cy - 48} 400,${cy + 12} S 490,${cy - 18} ${w},${cy}`;
  const s3 = `M 0,${cy + 65} C 90,${cy + 65} 80,${cy - 44} 175,${cy + 34} S 300,${cy - 50} 370,${cy + 22} S 465,${cy - 24} ${w},${cy}`;
  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} style={{ display: 'block', maxWidth: 560 }}>
      <path d={s3} fill="none" stroke={B.teal} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      <path d={s2} fill="none" stroke="#9BB0C0" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      <path d={s1} fill="none" stroke={B.orange} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" opacity="0.95" />
    </svg>
  );
}

/* ── Phone frame ─────────────────────────────────────────────────── */
function Phone({ src, alt, objectPos = 'top' }) {
  return (
    <div style={{ width: 220, height: 476, background: '#111', borderRadius: 44, border: '7px solid #222', outline: '1px solid #444', boxShadow: '0 28px 56px rgba(0,0,0,0.4)', position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
      <div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', width: 76, height: 22, background: '#111', borderRadius: 11, zIndex: 2 }} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: objectPos }} />
    </div>
  );
}

/* ── Nav ─────────────────────────────────────────────────────────── */
function Nav() {
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: TH.navBg, backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: `1px solid ${TH.navBorder}` }}>
      <div className="wrap" style={{ height: 64, display: 'flex', alignItems: 'center', gap: 10 }}>
        <LogoMark size={36} />
        <span style={{ fontSize: 17, fontWeight: 700, color: TH.text, letterSpacing: '-0.3px' }}>Diabetes Feast</span>
        <div style={{ flex: 1 }} />
        <div style={{ background: TH.pillBg, color: TH.accent, fontSize: 12, fontWeight: 600, padding: '5px 14px', borderRadius: 99, letterSpacing: '0.03em', whiteSpace: 'nowrap' }}>Coming to App Store</div>
      </div>
    </nav>
  );
}

/* ── Hero ────────────────────────────────────────────────────────── */
function Hero({ email, setEmail, submitted, onSubmit }) {
  return (
    <section style={{ background: TH.heroGrad, paddingTop: 128, paddingBottom: 80, overflow: 'hidden' }}>
      <div className="wrap hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
        <div className="hero-text-top" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: TH.accent, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Personal Wellness Journal · iPhone</div>
          <h1 style={{ fontSize: 'clamp(34px,4vw,58px)', fontWeight: 800, color: TH.text, lineHeight: 1.1, letterSpacing: '-0.03em' }}>
            Connecting Meals, Exercise, and Diabetes
          </h1>
          <p style={{ fontSize: 'clamp(16px,1.5vw,19px)', color: TH.textSub, lineHeight: 1.65 }}>
            An educational tool transforming daily diabetic habits into actionable insights — for patients and for doctors. Built by someone living with Type 2 diabetes for 35 years.
          </p>
        </div>
        <div className="hero-graph">
          <WovenMotif />
        </div>
        <div className="hero-text-bottom" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {!submitted ? (
            <form onSubmit={onSubmit} style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 4 }}>
              <input
                type="email" placeholder="your@email.com" value={email}
                onChange={e => setEmail(e.target.value)} required
                style={{ height: 50, padding: '0 18px', borderRadius: 99, border: `1.5px solid ${TH.inputBorder}`, background: TH.inputBg, color: TH.text, fontSize: 15, width: 240, outline: 'none', fontFamily: 'var(--font-sans)' }}
              />
              <button
                type="submit"
                style={{ height: 50, padding: '0 26px', borderRadius: 99, background: TH.accent, color: '#fff', fontSize: 15, fontWeight: 600, border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', boxShadow: `0 6px 20px ${TH.accentGlow}`, whiteSpace: 'nowrap' }}
                onMouseEnter={e => e.currentTarget.style.background = TH.accentHov}
                onMouseLeave={e => e.currentTarget.style.background = TH.accent}
              >
                Notify Me at Launch
              </button>
            </form>
          ) : (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: TH.pillBg, padding: '13px 20px', borderRadius: 99, width: 'fit-content' }}>
              <span style={{ color: TH.accent }}>{Ico.check}</span>
              <span style={{ color: TH.accent, fontSize: 15, fontWeight: 600 }}>Thank you! You&apos;ll be notified when the app launches.</span>
            </div>
          )}
          <p style={{ fontSize: 12, color: TH.textSub }}>Compatible With iOS 18.6+</p>
        </div>
      </div>
    </section>
  );
}

/* ── Principles strip ────────────────────────────────────────────── */
function PrincipleStrip() {
  const dot = { width: 4, height: 4, borderRadius: '50%', background: 'rgba(23,38,61,0.25)', flexShrink: 0 };
  return (
    <div style={{ background: TH.divBg, padding: '18px 0' }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: TH.text, letterSpacing: '-0.01em' }}>Personal Diabetes Wellness Journal</span>
        <span style={dot} />
        <span style={{ fontSize: 16, fontWeight: 700, color: TH.text }}>Not Prediction</span>
        <span style={dot} />
        <span style={{ fontSize: 16, fontWeight: 700, color: TH.text }}>Not Diagnosis</span>
      </div>
    </div>
  );
}

/* ── Three pillars ───────────────────────────────────────────────── */
const PILLARS = [
  { ico: 'phone', title: 'Record', sub: 'Log meals, historic glucose responses — CGM or finger-stick — and physical exercise. Every reading, every meal, every walk.' },
  { ico: 'chart', title: 'Visualize', sub: "Build a continuous, personalised history of your body's specific glucose responses. See what food and exercise do to your glucose, over time." },
  { ico: 'target', title: 'Act', sub: 'Make informed daily decisions based on your own evidence. What worked yesterday will work today. From passive patient to proactive manager.' },
];

function Pillars() {
  return (
    <section style={{ background: TH.bodyBg, padding: '88px 0' }}>
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: TH.accent, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>From passive to proactive</div>
          <h2 style={{ fontSize: 'clamp(26px,3vw,40px)', fontWeight: 700, color: TH.text, letterSpacing: '-0.025em' }}>Everything you need to understand your patterns</h2>
        </div>
        <div className="pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {PILLARS.map(({ ico, title, sub }) => (
            <div key={title} style={{ background: TH.cardBgSolid, border: `1px solid ${TH.cardBorder}`, borderRadius: 16, padding: '32px 28px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${B.teal}22`, color: B.teal, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{Ico[ico]}</div>
                <span style={{ fontSize: 22, fontWeight: 700, color: TH.accent, letterSpacing: '-0.01em' }}>{title}</span>
              </div>
              <p style={{ fontSize: 15, color: TH.textSub, lineHeight: 1.7 }}>{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Screenshots ─────────────────────────────────────────────────── */
const SHOTS = [
  { src: '/uploads/DashboardAfterDismissGS.png', label: 'Dashboard',         objectPos: 'top'    },
  { src: '/uploads/GlucoseCurve.png',            label: 'Glucose Chart',     objectPos: 'top'    },
  { src: '/uploads/WhatIfBdayCake.png',          label: 'What If? Explorer', objectPos: 'center' },
];

function Screenshots() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % SHOTS.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section style={{ background: TH.shotBg, padding: '88px 0' }}>
      <div className="wrap" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(26px,3vw,40px)', fontWeight: 700, color: TH.text, letterSpacing: '-0.025em', marginBottom: 10 }}>Your Data, With Clarity</h2>
        <p style={{ fontSize: 17, color: TH.textSub, marginBottom: 60, lineHeight: 1.6 }}>Six weeks of demo data ship with the app. Explore before entering your own readings.</p>
        <div className="shots-desktop" style={{ display: 'flex', gap: 28, justifyContent: 'center', alignItems: 'flex-end', flexWrap: 'wrap' }}>
          {SHOTS.map(({ src, label, objectPos }, i) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, transform: i === 1 ? 'scale(1.06)' : 'scale(0.92)', transformOrigin: 'bottom center' }}>
              <Phone src={src} alt={label} objectPos={objectPos} />
              <span style={{ fontSize: 13, fontWeight: 500, color: TH.textSub, letterSpacing: '0.02em' }}>{label}</span>
            </div>
          ))}
        </div>
        <div className="shots-mobile">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
            <Phone src={SHOTS[active].src} alt={SHOTS[active].label} objectPos={SHOTS[active].objectPos} />
            <span style={{ fontSize: 13, fontWeight: 500, color: TH.textSub, letterSpacing: '0.02em' }}>{SHOTS[active].label}</span>
          </div>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 28 }}>
            {SHOTS.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} style={{ width: i === active ? 24 : 8, height: 8, borderRadius: 4, border: 'none', cursor: 'pointer', padding: 0, background: i === active ? TH.accent : 'rgba(128,128,128,0.35)', transition: 'width 0.2s,background 0.2s' }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Patient + Doctor ────────────────────────────────────────────── */
const PAT = [
  { t: 'Visibility', d: 'Real-time understanding of what meal and exercise choices are working — long before your next lab test.' },
  { t: 'Empowerment', d: 'The confidence to occasionally eat outside your routine, using personal data to plan and offset the impact.' },
  { t: 'Outcomes', d: 'Take informed control of your health and daily lifestyle — not through restriction, but through understanding.' },
];
const DOC = [
  { t: 'Visibility', d: 'Full data reports covering every day between appointments — nutrition, exercise, glucose and weight.' },
  { t: 'Insight', d: 'The context needed to give tailored, lifestyle-specific guidance rather than generic recommendations.' },
  { t: 'Outcomes', d: 'Improved patient treatment adherence, engagement, and more productive clinical appointments.' },
];

function ForBoth() {
  return (
    <section style={{ background: TH.altBg, padding: '88px 0' }}>
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <h2 style={{ fontSize: 'clamp(26px,3vw,40px)', fontWeight: 700, color: TH.text, letterSpacing: '-0.025em' }}>Serves Both Patient and Doctor</h2>
        </div>
        <div className="forboth-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {[{ label: 'Patient', items: PAT, color: B.teal }, { label: 'Doctor', items: DOC, color: B.silver }].map(({ label, items, color }) => (
            <div key={label} style={{ borderRadius: 16, overflow: 'hidden', border: `1px solid ${TH.cardBorder}` }}>
              <div style={{ background: color, padding: '14px 24px' }}>
                <span style={{ fontSize: 18, fontWeight: 700, color: '#fff' }}>{label}</span>
              </div>
              <div style={{ background: TH.cardBgSolid, padding: '6px 0' }}>
                {items.map(({ t, d }, i) => (
                  <div key={t} style={{ padding: '18px 24px', borderBottom: i < items.length - 1 ? `1px solid ${TH.cardBorder}` : 'none' }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: label === 'Patient' ? B.teal : TH.textSub, marginBottom: 4 }}>{t}</div>
                    <div style={{ fontSize: 14, color: TH.textSub, lineHeight: 1.6 }}>{d}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Founder ─────────────────────────────────────────────────────── */
function Founder() {
  return (
    <section style={{ background: TH.bodyBg, padding: '72px 0' }}>
      <div className="wrap">
        <div style={{ background: TH.cardBgSolid, border: `1px solid ${TH.cardBorder}`, borderRadius: 20, padding: '44px 52px', display: 'flex', gap: 52, flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div style={{ flex: '0 0 auto' }}>
            <div style={{ width: 80, height: 80, borderRadius: 20, background: `${B.teal}22`, border: `2px solid ${B.teal}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={B.teal} strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: TH.text }}>Robert Hancock, PhD</div>
            <div style={{ fontSize: 13, color: B.teal, marginTop: 2 }}>Diabetes Feast Developer</div>
          </div>
          <div style={{ flex: '1 1 280px' }}>
            <h3 style={{ fontSize: 'clamp(20px,2vw,26px)', fontWeight: 700, color: TH.text, letterSpacing: '-0.02em', marginBottom: 14, lineHeight: 1.3 }}>35 Years with T2D and No Real Answers. So I Built Diabetes Feast.</h3>
            <p style={{ fontSize: 15, color: TH.textSub, lineHeight: 1.7, marginBottom: 16 }}>After decades without the full picture needed to truly understand his diabetes, Robert built Diabetes Feast to uncover his own lifestyle and diabetes patterns. In a 6-week trial without medication he reduced his HbA1c from 6.4% to a non-diabetic 5.6% — while deliberately enjoying 11 feast meals.</p>
            <p style={{ fontSize: 13, color: TH.textSub, fontStyle: 'italic' }}>This is one individual&apos;s documented experience. Results will vary.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Privacy ─────────────────────────────────────────────────────── */
const PRIV = ['Free Download', 'No Account Required', 'You Control Your Data', 'No Analytics or Tracking'];

function Privacy() {
  return (
    <section style={{ background: TH.privBg, padding: '88px 0' }}>
      <div className="wrap" style={{ textAlign: 'center' }}>
        <div style={{ width: 56, height: 56, background: 'rgba(255,255,255,0.08)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: 'rgba(255,255,255,0.9)' }}>{Ico.lock}</div>
        <h2 style={{ fontSize: 'clamp(24px,3vw,38px)', fontWeight: 700, color: '#fff', letterSpacing: '-0.025em', marginBottom: 14 }}>All Health Data Stays on Your iPhone</h2>
        <p style={{ fontSize: 17, color: TH.privSub, maxWidth: 520, margin: '0 auto', lineHeight: 1.65 }}>Diabetes Feast reads from Apple Health but never writes to it, and sends nothing to any server, ever. No backend. No analytics. No accounts.</p>
        <div style={{ display: 'flex', gap: 28, justifyContent: 'center', flexWrap: 'wrap', marginTop: 44 }}>
          {PRIV.map(f => (
            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <span style={{ color: B.teal }}>{Ico.check}</span>
              <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>{f}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ─────────────────────────────────────────────────────────── */
const FAQS = [
  { q: 'Is Diabetes Feast a medical device?', a: "No. It's a personal wellness journal — not a medical device, diagnostic tool, or clinical service. It doesn't provide medical advice, diagnoses, or treatment recommendations. Always consult your healthcare provider for medical decisions." },
  { q: 'Which CGMs are supported?', a: 'Any CGM that syncs glucose readings to Apple Health is supported — including FreeStyle Libre and Dexcom. You can also log finger-stick readings manually at any time.' },
  { q: 'What is the GMI shown in the app?', a: "The Glucose Management Indicator (GMI) is an informational metric derived from the published Bergenstal formula, calculated from your last 14 days of glucose data. It's the same figure shown by major CGM apps. Always use your lab HbA1c for medical decisions." },
  { q: 'How is my health data protected?', a: 'Your data never leaves your iPhone. Diabetes Feast has no backend server, no user accounts, and no analytics. It reads from Apple Health but does not write to it. Uninstalling the app removes all local data.' },
  { q: 'When will the app be available?', a: "Diabetes Feast is currently awaiting approval from the Apple App Store. Enter your email in the form above and we'll notify you the moment it's live." },
];

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section style={{ background: TH.bodyBg, padding: '88px 0' }}>
      <div className="wrap-narrow">
        <h2 style={{ fontSize: 'clamp(24px,3vw,38px)', fontWeight: 700, color: TH.text, letterSpacing: '-0.025em', textAlign: 'center', marginBottom: 44 }}>Frequently Asked Questions</h2>
        {FAQS.map(({ q, a }, i) => (
          <div key={i} style={{ borderBottom: `1px solid ${TH.cardBorder}` }}>
            <button onClick={() => setOpen(open === i ? null : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16, fontFamily: 'var(--font-sans)' }}>
              <span style={{ fontSize: 17, fontWeight: 600, color: TH.text, lineHeight: 1.35 }}>{q}</span>
              <span style={{ fontSize: 22, color: TH.textSub, transform: open === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.2s ease', flexShrink: 0, lineHeight: 1 }}>+</span>
            </button>
            {open === i && <p style={{ fontSize: 15, color: TH.textSub, lineHeight: 1.7, paddingBottom: 20, margin: 0 }}>{a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Footer ──────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ background: TH.footBg, padding: '52px 0 36px' }}>
      <div className="wrap">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          <LogoMark size={32} />
          <span style={{ fontSize: 16, fontWeight: 700, color: 'rgba(255,255,255,0.75)' }}>Diabetes Feast</span>
        </div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 20 }}>
          {' · '}
          <a href="http://www.diabetesfeast.com" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>www.diabetesfeast.com</a>
        </div>
        <p style={{ fontSize: 12, color: TH.footText, lineHeight: 1.7, maxWidth: 640 }}>
          Diabetes Feast is a personal wellness journal for people living with Type 2 diabetes or pre-diabetes. It is not a medical device, diagnostic tool, or clinical service. All content reflects personal documented experience and is not a clinical study, product guarantee, or medical recommendation. Results will vary. Always consult your healthcare provider before making changes to your diabetes management.
        </p>
        <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: 12, color: TH.footText }}>
          &copy; {new Date().getFullYear()} Diabetes Feast. All rights reserved. Confidential — not for distribution without written permission.
        </div>
      </div>
    </footer>
  );
}

/* ── Page ────────────────────────────────────────────────────────── */
export default function Page() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = async e => {
    e.preventDefault();
    await fetch('/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: TH.text, minHeight: '100vh', background: TH.bodyBg }}>
      <Nav />
      <Hero email={email} setEmail={setEmail} submitted={submitted} onSubmit={onSubmit} />
      <PrincipleStrip />
      <Pillars />
      <Screenshots />
      <ForBoth />
      <Founder />
      <Privacy />
      <FAQ />
      <Footer />
    </div>
  );
}
