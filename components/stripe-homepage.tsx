"use client";
import { FormEvent, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ArrowsOutSimple,
  BookOpen,
  Buildings,
  CaretDown,
  CaretRight,
  ChartLineUp,
  Check,
  CheckCircle,
  Code,
  CreditCard,
  Cube,
  GlobeHemisphereWest,
  Lightning,
  List,
  Moon,
  Pause,
  Play,
  Plus,
  ShieldCheck,
  Sparkle,
  Stack,
  Sun,
  Terminal,
  Users,
  X,
} from "@phosphor-icons/react";
import {
  asset,
  enterpriseStories,
  footerGroups,
  metrics,
  news,
  officialLink,
  productTiles,
  sales,
  signup,
  startupStories,
  stripe,
  testimonials,
} from "@/lib/homepage-data";
import { DeveloperWave, ParticleSculpture, Ribbon } from "./motion-graphics";
import { ConnectGraphic, ProductIllustration } from "./product-illustrations";

function Arrow() {
  return <CaretRight size={13} weight="bold" />;
}
function Button({
  children,
  href = signup,
  secondary = false,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`button ${secondary ? "button-secondary" : "button-primary"} ${className}`}
    >
      {children}
      <Arrow />
    </a>
  );
}
function TextLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a className="text-link" href={href}>
      {children}
      <Arrow />
    </a>
  );
}
function Intro({
  title,
  description,
  className = "",
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <h2 className={`section-intro ${className}`}>
      <span>{title}</span> <span className="subdued">{description}</span>
    </h2>
  );
}
function UseReveal() {
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = document.querySelectorAll("[data-reveal]");
    if (reduced) {
      nodes.forEach((n) => n.classList.add("revealed"));
      return;
    }
    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
    );
    nodes.forEach((n) => observer.observe(n));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);
  return null;
}
const navMenus = {
  Products: [
    ["Payments", "Accept and optimize payments", "payments"],
    ["Billing", "Build recurring revenue", "billing"],
    ["Connect", "Embed payments in your platform", "connect"],
    ["Issuing", "Launch your own card program", "issuing"],
    ["Treasury", "Manage business finances", "treasury"],
    ["Radar", "Fight fraud with intelligence", "radar"],
    ["Tax", "Automate tax compliance", "tax"],
    ["Terminal", "Accept in-person payments", "terminal"],
  ],
  Solutions: [
    ["Enterprises", "Flexible financial infrastructure", "enterprise"],
    ["Startups", "Build your next big idea", "startups"],
    ["Platforms", "Make your platform more powerful", "connect"],
    ["Global businesses", "Reach customers everywhere", "global"],
    ["Ecommerce", "Turn browsers into buyers", "ecommerce"],
    [
      "AI companies",
      "Infrastructure for your growth",
      "use-cases/ai-companies",
    ],
  ],
  Developers: [
    ["Documentation", "Start building with Stripe", "https://docs.stripe.com"],
    ["API reference", "Explore our APIs", "https://docs.stripe.com/api"],
    [
      "Libraries and SDKs",
      "Tools for your favorite language",
      "https://docs.stripe.com/sdks",
    ],
    ["Developer blog", "Ideas, guides, and updates", "https://stripe.dev"],
  ],
  Resources: [
    ["Customer stories", "See how businesses grow", "customers"],
    ["Guides", "Insights for your business", "guides"],
    ["Blog", "The latest from Stripe", "blog"],
    ["Support", "Find answers and get help", "https://support.stripe.com"],
  ],
};
function Navigation() {
  const [banner, setBanner] = useState(true);
  const [open, setOpen] = useState<keyof typeof navMenus | null>(null);
  const [mobile, setMobile] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const click = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(null);
    };
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        if (mobile) {
          setMobile(false);
          toggleRef.current?.focus();
        }
      }
    };
    document.addEventListener("pointerdown", click);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", click);
      document.removeEventListener("keydown", escape);
    };
  }, [mobile]);
  useEffect(() => {
    if (mobile) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [mobile]);
  return (
    <header ref={ref} className="site-header">
      {banner && (
        <div className="top-banner">
          <a href="https://openrouter.ai/announcements/openrouter-joins-stripe">
            OpenRouter joins Stripe: One API to access, secure, and govern all
            your AI spend.{" "}
            <strong>
              Learn more <Arrow />
            </strong>
          </a>
          <button
            aria-label="Dismiss announcement"
            onClick={() => setBanner(false)}
          >
            <X size={13} />
          </button>
        </div>
      )}
      <div className="header-surface">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="/" aria-label="Stripe home">
            <img
              src={asset("stripe-logo.svg")}
              alt="Stripe"
              width="60"
              height="25"
            />
          </a>
          <div className="nav-links" onMouseLeave={() => setOpen(null)}>
            {(Object.keys(navMenus) as (keyof typeof navMenus)[]).map(
              (name) => (
                <div
                  className="nav-group"
                  key={name}
                  onMouseEnter={() => setOpen(name)}
                >
                  <button
                    aria-expanded={open === name}
                    aria-controls="desktop-menu"
                    onClick={() => setOpen(open === name ? null : name)}
                    className={open === name ? "active" : ""}
                  >
                    {name}
                    <CaretDown size={12} weight="bold" />
                  </button>
                </div>
              ),
            )}
            <a href={`${stripe}/pricing`}>Pricing</a>
            <a className="guide-link" href="#recommendations">
              <Sparkle size={18} />
              Guide me
            </a>
            {open && (
              <div className="desktop-menu" id="desktop-menu">
                <div className="menu-main">
                  <p>
                    {open === "Products"
                      ? "Financial infrastructure for your business"
                      : `Explore ${open.toLowerCase()}`}
                  </p>
                  <div className="menu-link-grid">
                    {navMenus[open].map(([title, desc, url], i) => (
                      <a
                        key={title}
                        href={
                          url.startsWith("https") ? url : `${stripe}/${url}`
                        }
                      >
                        <span className={`menu-icon tone-${i % 4}`}>
                          {i % 4 === 0 ? (
                            <CreditCard size={22} weight="duotone" />
                          ) : i % 4 === 1 ? (
                            <Stack size={22} weight="duotone" />
                          ) : i % 4 === 2 ? (
                            <Cube size={22} weight="duotone" />
                          ) : (
                            <Code size={22} weight="duotone" />
                          )}
                        </span>
                        <span>
                          <strong>
                            {title}
                            <Arrow />
                          </strong>
                          <small>{desc}</small>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="menu-aside">
                  <Sparkle size={24} />
                  <h3>Not sure where to start?</h3>
                  <a href="#recommendations" onClick={() => setOpen(null)}>
                    Get recommendations
                    <Arrow />
                  </a>
                  <p>Tell us about your business.</p>
                  <a href={`${stripe}/products`}>
                    See all products
                    <Arrow />
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className="nav-actions">
            <a
              className="button button-white"
              href="https://dashboard.stripe.com/login"
            >
              Sign in
            </a>
            <Button href={sales}>Contact sales</Button>
          </div>
          <button
            className={`mobile-toggle ${mobile ? "active" : ""}`}
            ref={toggleRef}
            aria-expanded={mobile}
            aria-label={mobile ? "Close navigation" : "Open navigation"}
            onClick={() => setMobile(!mobile)}
          >
            {mobile ? <X size={24} /> : <List size={24} />}
          </button>
        </nav>
      </div>
      {mobile && (
        <div className="mobile-menu" aria-label="Mobile navigation">
          {(Object.keys(navMenus) as (keyof typeof navMenus)[]).map(
            (name, i) => (
              <div
                className="mobile-group"
                key={name}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <button
                  onClick={() => setOpen(open === name ? null : name)}
                  aria-expanded={open === name}
                >
                  {name}
                  <CaretDown size={18} />
                </button>
                {open === name && (
                  <div>
                    {navMenus[name].map(([title, , url]) => (
                      <a
                        key={title}
                        href={
                          url.startsWith("https") ? url : `${stripe}/${url}`
                        }
                      >
                        {title}
                        <Arrow />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ),
          )}
          <a href={`${stripe}/pricing`}>
            Pricing
            <Arrow />
          </a>
          <a href="#recommendations" onClick={() => setMobile(false)}>
            Guide me
            <Sparkle size={18} />
          </a>
          <div className="button-group">
            <Button>Start now</Button>
            <Button secondary href="https://dashboard.stripe.com/login">
              Sign in
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
function Hero() {
  const [gdp, setGdp] = useState("1.74782581");
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let count = 174782581;
    const timer = setInterval(() => {
      count += 3;
      setGdp((count / 100000000).toFixed(8));
    }, 110);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="hero-section">
      <Ribbon />
      <div className="hero container">
        <div className="hero-inner">
          <div className="gdp-label">
            Global GDP running on Stripe: <span>{gdp}%</span>
          </div>
          <h1>
            <span>Financial infrastructure to grow your revenue.</span>{" "}
            <span className="hero-subheading">
              Accept payments, handle business banking,
              <sup>
                <a href="#banking-note">1</a>
              </sup>{" "}
              and implement custom revenue models—from your first transaction to
              your billionth.
            </span>
          </h1>
          <div className="button-group">
            <Button>Get started</Button>
            <a
              href={`${signup}?method=google`}
              className="button button-secondary google-signup"
            >
              <span className="google-g">G</span>Sign up with Google
            </a>
          </div>
        </div>
      </div>
      <div className="logo-strip">
        <div className="logo-track">
          {[
            ...[
              "amazon",
              "nvidia",
              "ford",
              "coinbase",
              "google",
              "shopify",
              "mindbody",
              "metlife",
              "ramp",
              "marriott",
              "figma",
              "woocommerce",
              "openai",
              "uber",
              "vercel",
              "anthropic",
            ],
            ...[
              "amazon",
              "nvidia",
              "ford",
              "coinbase",
              "google",
              "shopify",
              "mindbody",
              "metlife",
              "ramp",
              "marriott",
              "figma",
              "woocommerce",
              "openai",
              "uber",
              "vercel",
              "anthropic",
            ],
          ].map((name, i) => (
            <img
              key={`${name}-${i}`}
              src={asset(`${name}.svg`)}
              alt={i < 16 ? name : ""}
              aria-hidden={i >= 16 ? true : undefined}
              width="142"
              height="34"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
function ProductModal({
  index,
  onClose,
}: {
  index: number;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const item = productTiles[index];
  useEffect(() => {
    const d = ref.current;
    const focused = document.activeElement as HTMLElement;
    d?.showModal();
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      d?.close();
      document.body.style.overflow = old;
      focused?.focus();
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className="product-modal"
      aria-labelledby="modal-title"
      onClose={() => {
        if (!ref.current?.open) onClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-content">
        <button
          className="close-modal icon-button"
          onClick={onClose}
          aria-label="Close product details"
        >
          <X size={20} />
        </button>
        <div className="modal-intro">
          <div>
            <h2 id="modal-title">{item.title}</h2>
            <p>{item.description}</p>
            <div className="button-group">
              <Button href={`${stripe}${item.link}`}>{item.cta}</Button>
              <Button secondary href={`${stripe}/pricing`}>
                See pricing details
              </Button>
            </div>
          </div>
          <ul>
            {item.benefits.map((t) => (
              <li key={t}>
                <Sparkle size={14} />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className={`modal-illustration modal-${item.id}`}>
          <ProductIllustration id={item.id} />
        </div>
        <div className="modal-details">
          <div>
            <h3>Designed to work together.</h3>
            <p>
              Connect your payments, billing, and financial tools in one
              platform, with a shared view of your business.
            </p>
          </div>
          <div>
            <h3>Built for your next stage.</h3>
            <p>
              Start with what you need today and build a financial experience
              that can grow with you.
            </p>
          </div>
        </div>
        <div className="modal-testimonial">
          <img src={asset("amazon.svg")} alt="Amazon" width="142" height="34" />
          <p>
            Discover how businesses use Stripe to connect their financial
            operations and serve customers around the world.
          </p>
          <TextLink href={`${stripe}/customers`}>
            Explore customer stories
          </TextLink>
        </div>
        <div className="modal-bottom">
          <h3>Get started with {item.cta.replace("Explore ", "")}</h3>
          <div className="button-group">
            <Button>Start now</Button>
            <Button href={sales} secondary>
              Contact sales
            </Button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
function Products() {
  const [modal, setModal] = useState<number | null>(null);
  return (
    <section className="products-section">
      <div className="container section-content">
        <Intro
          title="Flexible solutions for every business model."
          description="Grow your business with a comprehensive set of payments and financial tools—designed to work individually or together."
        />
        <div className="bento-grid">
          {productTiles.map((item, i) => (
            <article className={`bento-tile bento-${item.id}`} key={item.id}>
              <button
                className="tile-button"
                onClick={() => setModal(i)}
                aria-label={`Explore ${item.title}`}
              >
                <h3>{item.title}</h3>
                <span className="expand-icon">
                  <ArrowsOutSimple size={16} />
                </span>
              </button>
              <div
                className="tile-art"
                onClick={() => setModal(i)}
                aria-hidden="true"
              >
                <ProductIllustration id={item.id} />
              </div>
            </article>
          ))}
        </div>
      </div>
      {modal !== null && (
        <ProductModal index={modal} onClose={() => setModal(null)} />
      )}
    </section>
  );
}
function Recommendations() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (loading) return;
    if (text.trim().length < 8) {
      setError("Add a website or a few details about your business.");
      return;
    }
    setError("");
    setLoading(true);
    timer.current = setTimeout(() => {
      setLoading(false);
      setResult(true);
    }, 850);
  };
  const score = [
    text.includes("."),
    text.length > 30,
    /subscription|monthly|sell|service|software|store|product|platform|payment/i.test(
      text,
    ),
    text.length > 70,
  ];
  return (
    <section className="recommendation-section container" id="recommendations">
      <div className="recommendation-inner">
        <h2>Get Stripe product recommendations</h2>
        <p>
          Enter your company’s URL, or tell us what you sell and how you sell
          it.
        </p>
        <form onSubmit={submit} noValidate>
          <div className={`recommendation-input ${error ? "has-error" : ""}`}>
            <label htmlFor="business-description" className="sr-only">
              Describe your business
            </label>
            <textarea
              id="business-description"
              value={text}
              maxLength={500}
              onChange={(e) => {
                setText(e.target.value);
                setResult(false);
                setError("");
              }}
              placeholder="Enter a website or describe your business…"
            />
            <div className="input-bottom">
              <span className="input-strength">
                <i
                  className={score.filter(Boolean).length > 1 ? "strong" : ""}
                />
                Input strength:
              </span>
              <div className="input-hints">
                {[
                  "Business website",
                  "What you sell",
                  "How you charge",
                  "Who you sell to",
                ].map((v, i) => (
                  <span className={score[i] ? "complete" : ""} key={v}>
                    {score[i] && <Check size={10} />} {v}
                  </span>
                ))}
              </div>
              <span className="character-count">{text.length}/500</span>
              <button
                className="recommendation-submit"
                type="submit"
                aria-label="Get product recommendations"
                disabled={loading}
              >
                {loading ? (
                  <span className="tiny-skeleton" />
                ) : (
                  <ArrowRight size={16} />
                )}
              </button>
            </div>
          </div>
          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}
        </form>
        <small>
          Interactive demo. Your business details stay in this browser.{" "}
          <a href={`${stripe}/privacy`}>Privacy Policy</a>.
        </small>
        {loading && (
          <div
            className="recommendation-loading"
            role="status"
            aria-label="Preparing recommendations"
          >
            <span />
            <span />
            <span />
          </div>
        )}
        {result && (
          <div className="recommendation-result" aria-live="polite">
            <div>
              <Sparkle size={19} />
              <h3>A starting point for your business</h3>
              <button
                aria-label="Close recommendations"
                onClick={() => setResult(false)}
              >
                <X size={16} />
              </button>
            </div>
            <p>
              Based on your description, explore these products. This demo uses
              local rules, not Stripe’s recommendation service.
            </p>
            {[
              productTiles[0],
              productTiles[
                /subscription|saas|monthly|software/i.test(text)
                  ? 1
                  : /platform|marketplace/i.test(text)
                    ? 5
                    : 1
              ],
            ].map((item) => (
              <a key={item.id} href={`${stripe}${item.link}`}>
                <CreditCard size={22} />
                <span>
                  <strong>{item.cta.replace("Explore ", "")}</strong>
                  <small>{item.benefits[0]}</small>
                </span>
                <ArrowRight size={16} />
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
function EventBanner() {
  return (
    <section className="event-section container" data-reveal>
      <a href={`${stripe}/sessions`} className="event-banner">
        <img
          src={asset("sessions-2026-on-demand-bg.webp")}
          alt="Stripe Sessions stage with a speaker against flowing ribbon artwork"
        />
        <div>
          <h2>
            Building the economic
            <br />
            infrastructure for AI
          </h2>
          <img
            src={asset("stripe-sessions-logo.svg")}
            alt="Stripe Sessions"
            width="200"
            height="30"
          />
          <span className="button button-white">
            Watch now
            <Arrow />
          </span>
        </div>
      </a>
    </section>
  );
}
function GlobalScale() {
  const [active, setActive] = useState(0);
  const [theme, setTheme] = useState("daytime");
  const [themeMenu, setThemeMenu] = useState(false);
  const [playing, setPlaying] = useState(true);
  const held = useRef(false);
  useEffect(() => {
    if (!playing || matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const timer = setInterval(() => {
      if (!held.current) setActive((i) => (i + 1) % 4);
    }, 7500);
    return () => clearInterval(timer);
  }, [playing]);
  return (
    <section className={`global-section theme-${theme}`}>
      <div className="container global-content">
        <h2>
          The backbone
          <br />
          of global commerce
        </h2>
        <div
          className="global-metrics"
          role="tablist"
          aria-label="Global commerce metrics"
        >
          {metrics.map((m, i) => (
            <button
              role="tab"
              id={`metric-${i}`}
              aria-selected={active === i}
              aria-controls="global-sculpture"
              key={m.value}
              tabIndex={active === i ? 0 : -1}
              onKeyDown={(e) => {
                if (
                  ["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)
                ) {
                  e.preventDefault();
                  const next =
                    e.key === "Home"
                      ? 0
                      : e.key === "End"
                        ? 3
                        : (active + (e.key === "ArrowRight" ? 1 : 3)) % 4;
                  setActive(next);
                  document.getElementById(`metric-${next}`)?.focus();
                }
              }}
              className={active === i ? "active" : ""}
              onMouseEnter={() => {
                held.current = true;
                setActive(i);
              }}
              onMouseLeave={() => {
                held.current = false;
              }}
              onFocus={() => {
                held.current = true;
                setActive(i);
              }}
              onBlur={() => {
                held.current = false;
              }}
              onClick={() => setActive(i)}
            >
              <strong>{m.value}</strong>
              <span>{m.label}</span>
            </button>
          ))}
        </div>
        <div
          className="sculpture-stage"
          id="global-sculpture"
          role="tabpanel"
          aria-labelledby={`metric-${active}`}
        >
          <div className="sculpture-glow" />
          <ParticleSculpture active={active} theme={theme} />
          <div className="sculpture-controls">
            <button
              className="theme-toggle"
              aria-label="Change visualization theme"
              aria-expanded={themeMenu}
              onClick={() => setThemeMenu(!themeMenu)}
            >
              {theme === "night" ? <Moon size={17} /> : <Sun size={17} />}
            </button>
            <button
              className="theme-toggle playback-toggle"
              aria-label={
                playing
                  ? "Pause automatic metric changes"
                  : "Play automatic metric changes"
              }
              onClick={() => setPlaying(!playing)}
            >
              {playing ? <Pause size={15} /> : <Play size={15} />}
            </button>
            {themeMenu && (
              <div className="theme-menu">
                {[
                  "pre-dawn",
                  "sunrise",
                  "daytime",
                  "dusk",
                  "sunset",
                  "night",
                ].map((name) => (
                  <button
                    key={name}
                    className={theme === name ? "selected" : ""}
                    onClick={() => {
                      setTheme(name);
                      setThemeMenu(false);
                    }}
                  >
                    <Sun size={12} />
                    {name === "pre-dawn"
                      ? "Pre-dawn"
                      : name[0].toUpperCase() + name.slice(1)}
                    {theme === name && <Check size={12} />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
function StoryHeading({
  title,
  description,
  cta,
  href,
}: {
  title: string;
  description: string;
  cta: string;
  href: string;
}) {
  return (
    <div className="story-heading">
      <div>
        <h3>{title}</h3>
        <Button href={href}>{cta}</Button>
      </div>
      <p>{description}</p>
    </div>
  );
}
function Services() {
  return (
    <div className="services-block">
      <h3>Realize value faster with dedicated experts</h3>
      <div className="three-columns">
        {[
          {
            icon: Buildings,
            title: "Professional services.",
            text: "Get tailored guidance from Stripe on implementation, complex integrations, or major migrations.",
            cta: "View services",
            href: "/professional-services",
          },
          {
            icon: Users,
            title: "Stripe-certified experts.",
            text: "Work with a Stripe consulting partner that can integrate and deploy Stripe solutions on your behalf.",
            cta: "View partners",
            href: "/partners",
          },
          {
            icon: ShieldCheck,
            title: "Support plans.",
            text: "Receive ongoing assistance and day-to-day support for technical questions with tiered plans based on your needs.",
            cta: "View plans",
            href: "/support-plans",
          },
        ].map((item) => (
          <div key={item.title}>
            <item.icon size={24} weight="duotone" />
            <p>
              <strong>{item.title}</strong> {item.text}
            </p>
            <TextLink href={`${stripe}${item.href}`}>{item.cta}</TextLink>
          </div>
        ))}
      </div>
    </div>
  );
}
function Enterprise() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <section className="enterprise-section">
      <StoryHeading
        title="Transform your enterprise with agile financial infrastructure"
        description="50% of Fortune 100 companies have used Stripe to grow their businesses—from expanding internationally to reimagining the customer experience."
        cta="Stripe for enterprises"
        href={`${stripe}/enterprise`}
      />
      <div className="enterprise-accordion">
        {enterpriseStories.map((item, i) => (
          <article key={item.name} className={active === i ? "active" : ""}>
            <div className="enterprise-row">
              <button
                aria-expanded={active === i}
                aria-controls={`enterprise-panel-${i}`}
                onClick={() => setActive(active === i ? null : i)}
              >
                <span
                  className={`story-mark story-mark-${i}`}
                  style={{ background: item.color }}
                >
                  {item.mark}
                </span>
                <span>{item.title}</span>
                <span className="accordion-plus">
                  {active === i ? <X size={16} /> : <Plus size={16} />}
                </span>
              </button>
              {active === i && (
                <a className="story-read-link" href={`${stripe}${item.url}`}>
                  Read the story
                  <Arrow />
                </a>
              )}
            </div>
            <div
              className="enterprise-panel"
              id={`enterprise-panel-${i}`}
              hidden={active !== i}
            >
              {active === i && (
                <>
                  <a href={`${stripe}${item.url}`} className="enterprise-image">
                    <img
                      src={asset(item.image)}
                      alt={item.alt}
                      width="1280"
                      height="620"
                    />
                  </a>
                  <div className="enterprise-meta">
                    <span>{item.stats[0]}</span>
                    <span>{item.stats[1]}</span>
                    <span>Products used: {item.products}</span>
                  </div>
                </>
              )}
            </div>
          </article>
        ))}
      </div>
      <Services />
    </section>
  );
}
function Startups() {
  const [position, setPosition] = useState(0);
  const [maxPosition, setMaxPosition] = useState(4);
  const carousel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = carousel.current;
    if (!el) return;
    const measure = () => {
      const width = el.firstElementChild?.getBoundingClientRect().width ?? 280;
      const gap = parseFloat(getComputedStyle(el).gap) || 16;
      setMaxPosition(
        Math.max(
          0,
          Math.ceil((el.scrollWidth - el.clientWidth) / (width + gap)),
        ),
      );
    };
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    const update = () => {
      const width = el.firstElementChild?.getBoundingClientRect().width ?? 280;
      const gap = parseFloat(getComputedStyle(el).gap) || 16;
      setPosition(Math.round(el.scrollLeft / (width + gap)));
    };
    el.addEventListener("scrollend", update);
    measure();
    return () => {
      observer.disconnect();
      el.removeEventListener("scrollend", update);
    };
  }, []);
  const change = (direction: number) => {
    const el = carousel.current;
    if (!el) return;
    const next = Math.max(0, Math.min(maxPosition, position + direction));
    setPosition(next);
    el.scrollTo({
      left:
        next *
        ((el.firstElementChild?.getBoundingClientRect().width ?? 280) +
          (parseFloat(getComputedStyle(el).gap) || 16)),
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };
  return (
    <section className="startups-section">
      <StoryHeading
        title="Build a foundation for your startup that enables faster growth"
        description="From stablecoin pioneers to 88% of the Forbes AI 50, Stripe helps startups build what’s next on easy-to-integrate financial infrastructure."
        cta="Stripe for startups"
        href={`${stripe}/startups`}
      />
      <div className="carousel-controls">
        <button
          className="icon-button"
          aria-label="Previous startup stories"
          disabled={position === 0}
          onClick={() => change(-1)}
        >
          <ArrowLeft size={18} />
        </button>
        <button
          className="icon-button"
          aria-label="Next startup stories"
          disabled={position >= maxPosition}
          onClick={() => change(1)}
        >
          <ArrowRight size={18} />
        </button>
      </div>
      <div
        className="startup-carousel"
        ref={carousel}
        tabIndex={0}
        aria-label="Startup customer stories"
      >
        {startupStories.map((item) => (
          <article className="startup-card" key={item.name}>
            <a href={`${stripe}${item.url}`} className="startup-image">
              <img
                loading="lazy"
                src={asset(item.image)}
                alt={`${item.name} brand artwork`}
                width="432"
                height="550"
              />
              <span>{item.name}</span>
            </a>
            <p>{item.text}</p>
            <TextLink href={`${stripe}${item.url}`}>
              {item.name === "ElevenLabs"
                ? "Watch the video"
                : `Read ${item.name}’s story`}
            </TextLink>
          </article>
        ))}
      </div>
      <div className="startup-promo-grid">
        <a href={`${stripe}/startups`}>
          <div>
            <p>
              <strong>Stripe Startups program.</strong> Access financial
              benefits, a focused community, and expert resources to help you
              grow your business.
            </p>
            <span>
              Apply now
              <Arrow />
            </span>
          </div>
          <span className="startup-promo-art" />
        </a>
        <a href={`${stripe}/atlas`}>
          <div>
            <p>
              <strong>Stripe Atlas.</strong> Incorporate and get everything you
              need to fundraise, bank, and accept payments in two business days.
            </p>
            <span>
              Start your company
              <Arrow />
            </span>
          </div>
          <span className="atlas-promo-art" />
        </a>
      </div>
    </section>
  );
}
function Platform() {
  return (
    <section className="platform-section">
      <StoryHeading
        title="Make your SaaS platform a complete financial operating system"
        description="From the Fortune 100 to the Forbes Cloud 100, vertical SaaS platforms use Stripe to expand their product offerings with embedded payments and financial services."
        cta="Stripe for platforms"
        href={`${stripe}/connect`}
      />
      <div className="platform-showcase" data-reveal>
        <ConnectGraphic large />
      </div>
      <div className="three-columns platform-benefits">
        {[
          {
            icon: Lightning,
            title: "Get to market faster.",
            text: "Launch and scale payments products with lower operational overhead using embedded components and no-code tools.",
          },
          {
            icon: ChartLineUp,
            title: "Grow new lines of revenue.",
            text: "Monetize platform transactions—including payments, card interchange, and financing fees.",
          },
          {
            icon: ShieldCheck,
            title: "Manage platform risk.",
            text: "Stay ahead of global regulations with tools for compliance, credit risk, fraud prevention, and account security.",
          },
        ].map((item) => (
          <div key={item.title}>
            <item.icon size={24} weight="duotone" />
            <p>
              <strong>{item.title}</strong> {item.text}
            </p>
            <TextLink href={`${stripe}/connect`}>Read the guide</TextLink>
          </div>
        ))}
      </div>
    </section>
  );
}
function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      8500,
    );
    return () => clearInterval(timer);
  }, [paused]);
  const item = testimonials[index];
  return (
    <section
      className="testimonials"
      aria-label="Customer testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="testimonial-content"
        id="testimonial-panel"
        role="tabpanel"
        aria-labelledby={`testimonial-tab-${index}`}
        key={index}
      >
        <img src={asset(item.image)} alt={item.name} width="48" height="48" />
        <blockquote>“{item.quote}”</blockquote>
        <p>
          <strong>{item.name}</strong>, <span>{item.role}</span>
        </p>
        <TextLink href={`${stripe}${item.url}`}>Read the story</TextLink>
      </div>
      <div
        className="testimonial-tabs"
        role="tablist"
        aria-label="Choose a customer story"
      >
        {testimonials.map((t, i) => (
          <button
            key={t.brand}
            id={`testimonial-tab-${i}`}
            role="tab"
            aria-controls="testimonial-panel"
            aria-selected={index === i}
            tabIndex={index === i ? 0 : -1}
            onKeyDown={(e) => {
              if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) {
                e.preventDefault();
                const next =
                  e.key === "Home"
                    ? 0
                    : e.key === "End"
                      ? 3
                      : (index + (e.key === "ArrowRight" ? 1 : 3)) % 4;
                setIndex(next);
                document.getElementById(`testimonial-tab-${next}`)?.focus();
              }
            }}
            className={index === i ? "active" : ""}
            onClick={() => setIndex(i)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            {t.brand === "mindbody" ? (
              <img
                src={asset("mindbody.svg")}
                alt="Mindbody"
                width="142"
                height="34"
              />
            ) : (
              <span className={`testimonial-brand brand-${i}`}>
                {i === 1 ? "▧ " : i === 2 ? "≋ " : i === 3 ? "◈ " : ""}
                {t.brand}
              </span>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
function IntegrationDiagram() {
  return (
    <div
      className="integration-diagram"
      aria-label="Diagram connecting existing systems to Stripe and payment processors"
    >
      <div className="integration-system-row">
        {[
          "ERP",
          "CRM",
          "Subscriptions",
          "Legacy billing",
          "Booking system",
        ].map((s, i) => (
          <span key={s} style={{ animationDelay: `${i * -0.3}s` }}>
            {s}
          </span>
        ))}
      </div>
      <div className="integration-branches">
        <span />
        <span />
        <span />
      </div>
      <div className="integration-interface-row">
        <span>SDK</span>
        <span>Event Destinations</span>
      </div>
      <div className="diagram-core">
        <div className="diagram-apps">
          {["S", "↗", "▧", "P", "◉", "A"].map((s, i) => (
            <i key={i}>{s}</i>
          ))}
        </div>
        <span>
          App Marketplace <ArrowUpRight size={10} />
        </span>
        <div className="stripe-core">
          stripe
          <div className="core-pulse" />
        </div>
        <span>Data Pipeline</span>
        <div className="database-icon">▥</div>
      </div>
      <div className="orchestration-label">Orchestration</div>
      <div className="processor-row">
        {Array.from({ length: 4 }, (_, i) => (
          <span key={i}>PSP</span>
        ))}
      </div>
    </div>
  );
}
function Developers() {
  return (
    <section className="developers-section">
      <div className="container section-content">
        <div className="developer-intro">
          <Intro
            title="Reliable, extensible infrastructure for every stack."
            description="Adapt Stripe to your business needs with flexible integration options."
          />
          <div className="button-group">
            <Button href="https://docs.stripe.com">View developer docs</Button>
            <Button secondary href="https://github.com/stripe">
              View Stripe’s GitHub
            </Button>
          </div>
        </div>
        <div className="developer-module">
          <Intro
            title="Connect to existing systems."
            description="Orchestrate payments across multiple processors, build custom workflows, and connect to third parties using APIs, partner apps, or prebuilt integrations."
          />
          <IntegrationDiagram />
        </div>
        <div className="developer-module developer-scale">
          <Intro
            title="Scale with confidence."
            description="Handle thousands of transactions per second with consistent speed and reliability, even during peak traffic periods."
          />
          <DeveloperWave />
          <div className="developer-stats">
            {[
              ["500M+", "API requests per day"],
              ["10K+", "API requests per second"],
              ["150K+", "transactions per minute"],
            ].map(([value, label]) => (
              <div key={value}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="developer-module integration-path">
          <Intro
            title="Choose an integration path."
            description="With AI-powered support, rich documentation, and built-in debugging tools, you can quickly get started with the best option for your business."
          />
          <div className="three-columns">
            {[
              {
                title: "Don’t code?",
                text: "Set up billing, take in-person payments, or share a payment link—right from the Stripe Dashboard, no code required.",
                cta: "Explore no-code",
                href: "https://docs.stripe.com/no-code",
              },
              {
                title: "Use a pre-integrated platform.",
                text: "Browse our directory of platforms that integrate Stripe with website-building tools.",
                cta: "See directory",
                href: "https://marketplace.stripe.com",
              },
              {
                title: "Build your own integration.",
                text: "Use our SDKs, APIs, MCP server, and AI developer tools to build and maintain your own integration with Stripe.",
                cta: "Get started",
                href: "https://docs.stripe.com",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <TextLink href={item.href}>{item.cta}</TextLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function News() {
  const [index, setIndex] = useState(0);
  const shift = (n: number) =>
    setIndex((i) => (i + n + news.length) % news.length);
  const current = news[index];
  const imageName = (s: string) =>
    s === "annual-letter-mobile.webp"
      ? "annual-letter-desktop.webp"
      : s.replace("-mobile", "");
  return (
    <section className="news-section container section-content">
      <Intro
        title="What’s happening"
        description="See the latest from Stripe."
        className="stacked-intro"
      />
      <div className="carousel-controls">
        <button
          className="icon-button"
          aria-label="Previous news story"
          onClick={() => shift(-1)}
        >
          <ArrowLeft size={18} />
        </button>
        <button
          className="icon-button"
          aria-label="Next news story"
          onClick={() => shift(1)}
        >
          <ArrowRight size={18} />
        </button>
      </div>
      <div className="news-squeeze" aria-label="Latest Stripe stories">
        {Array.from({ length: 8 }, (_, offset) => {
          const i = (index + offset) % news.length;
          return (
            <button
              key={i}
              className={`news-panel ${offset === 0 ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={news[i].title}
              aria-pressed={offset === 0}
            >
              <img
                src={asset(imageName(news[i].image))}
                alt={news[i].title}
                width="1280"
                height="750"
                loading="lazy"
              />
            </button>
          );
        })}
      </div>
      <div className="news-description" aria-live="polite">
        <p>
          <strong>{current.title}</strong> <span>{current.description}</span>
        </p>
        <Button
          secondary
          href={
            current.url.startsWith("https")
              ? current.url
              : `${stripe}${current.url}`
          }
        >
          {current.cta}
        </Button>
      </div>
    </section>
  );
}
function Book() {
  return (
    <section className="book-section container section-content">
      <Intro
        title="Book of the week"
        description="Entrepreneurship starts with ideas."
        className="stacked-intro"
      />
      <div className="book-feature">
        <a
          className="book-image"
          href="https://press.princeton.edu/books/paperback/9780691089591/on-beauty-and-being-just"
          aria-label="On Beauty and Being Just by Elaine Scarry"
        >
          <img
            src={asset("on-beauty-cover.webp")}
            alt="On Beauty and Being Just by Elaine Scarry book cover"
            width="300"
            height="454"
          />
        </a>
        <div className="book-content">
          <img
            className="library-stamp library-stamp-image"
            src={asset("library-stamp.webp")}
            alt="The Library of Stripe"
            width="88"
            height="136"
          />
          <h3>On Beauty and Being Just</h3>
          <p className="book-author">Elaine Scarry</p>
          <p className="book-description">
            Scarry argues that beauty is not a superficial distraction, but a
            perceptual event that makes us attend more closely to the world and
            reproduce what we admire. The book links aesthetic symmetry and
            proportion to the human intuition for fairness, exploring how
            sustained attention to beauty trains the same habits of thought that
            help us consider justice.
          </p>
          <div className="book-links">
            <p>
              For more ideas on economic progress and technological advancement,
              see our in-house publications:
            </p>
            <a href="https://press.stripe.com">
              <span>▧</span>Stripe Press
            </a>
            <a href="https://worksinprogress.co">
              <img
                src={asset("WorkInProgressIcon.webp")}
                alt=""
                width="20"
                height="20"
              />
              Works in Progress
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
function CookieSettings({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    const focused = document.activeElement as HTMLElement;
    d?.showModal();
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      d?.close();
      document.body.style.overflow = old;
      focused?.focus();
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className="cookie-dialog"
      aria-labelledby="cookie-title"
      onClose={() => {
        if (!ref.current?.open) onClose();
      }}
    >
      <button
        className="icon-button"
        onClick={onClose}
        aria-label="Close cookie settings"
      >
        <X size={18} />
      </button>
      <h2 id="cookie-title">Cookie settings</h2>
      <p>
        This demonstration does not use advertising or analytics cookies. Only
        essential browser functionality is used.
      </p>
      <button className="button button-primary" onClick={onClose}>
        Done
        <Check size={14} />
      </button>
    </dialog>
  );
}
function Newsletter() {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [error, setError] = useState("");
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (step === 0) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError("Enter a valid work email.");
        return;
      }
      setError("");
      setStep(1);
    } else if (step === 1) {
      if (
        !/^(https?:\/\/)?[a-z\d.-]+\.[a-z]{2,}(\/.*)?$/i.test(website.trim())
      ) {
        setError("Enter a valid company website, such as example.com.");
        return;
      }
      setError("");
      setStep(2);
    }
  };
  return (
    <div className="newsletter">
      <h3>Get industry insights and updates from Stripe</h3>
      {step === 2 ? (
        <div className="newsletter-success" role="status">
          <CheckCircle size={20} />
          <p>Demo subscription complete. No information was sent to Stripe.</p>
        </div>
      ) : (
        <form onSubmit={submit} noValidate>
          <label className="sr-only" htmlFor="newsletter-field">
            {step === 0 ? "Work email" : "Company website"}
          </label>
          <div>
            <input
              id="newsletter-field"
              autoComplete={step === 0 ? "email" : "url"}
              type={step === 0 ? "email" : "url"}
              placeholder={
                step === 0 ? "Enter work email" : "Enter company website"
              }
              value={step === 0 ? email : website}
              onChange={(e) => {
                step === 0
                  ? setEmail(e.target.value)
                  : setWebsite(e.target.value);
                setError("");
              }}
              aria-invalid={!!error}
              aria-describedby={error ? "newsletter-error" : undefined}
            />
            <button className="button button-primary" type="submit">
              {step === 0 ? "Continue" : "Subscribe"}
              <Arrow />
            </button>
          </div>
          {error && (
            <p className="form-error" id="newsletter-error" role="alert">
              {error}
            </p>
          )}
        </form>
      )}
      <p className="newsletter-legal">
        Demo form. No marketing messages are sent. Stripe’s official{" "}
        <a href={`${stripe}/privacy`}>Privacy Policy</a> describes how its
        services handle information.
      </p>
    </div>
  );
}
function Footer() {
  const [country, setCountry] = useState("United States (English)");
  const [countryOpen, setCountryOpen] = useState(false);
  const [cookies, setCookies] = useState(false);
  const group = (index: number) => (
    <div className="footer-group" key={index}>
      <h3>{footerGroups[index].title}</h3>
      {footerGroups[index].links.map((label) => (
        <a key={label} href={officialLink(label)}>
          {label}
        </a>
      ))}
      {index === 4 && (
        <button className="footer-link" onClick={() => setCookies(true)}>
          Cookie settings
        </button>
      )}
    </div>
  );
  return (
    <footer className="footer">
      <div className="container section-content">
        <div className="footer-cta">
          <div>
            <h2>Ready to get started?</h2>
            <p>
              Create an account instantly, or contact us to design a custom
              package for your business.
            </p>
            <div className="button-group">
              <Button>Start now</Button>
              <Button secondary href={sales}>
                Contact sales
              </Button>
            </div>
          </div>
          <div>
            <CreditCard size={24} weight="duotone" />
            <h3>See what you’ll pay</h3>
            <p>Integrated per-transaction pricing with no hidden fees.</p>
            <TextLink href={`${stripe}/pricing`}>Pricing details</TextLink>
          </div>
          <div>
            <Code size={24} weight="duotone" />
            <h3>Start building</h3>
            <p>Get up and running with Stripe in as little as 10 minutes.</p>
            <TextLink href="https://docs.stripe.com/payments">
              Integration options
            </TextLink>
          </div>
        </div>
        <p className="banking-note" id="banking-note">
          <sup>1</sup> Stripe Treasury includes various distinct Stripe
          products. See applicable <a href={`${stripe}/legal`}>product terms</a>
          . Stripe is not a bank. Checking accounts are provided exclusively by
          Fifth Third Bank, National Association, Member FDIC. Deposits are
          insured through Fifth Third Bank.
        </p>
        <div className="footer-grid">
          <div>{group(0)}</div>
          <div>
            {group(1)}
            {group(2)}
          </div>
          <div>
            {group(3)}
            {group(4)}
          </div>
          <div>
            {group(5)}
            {group(6)}
            <a
              className="text-link footer-signin"
              href="https://dashboard.stripe.com/login"
            >
              Sign in
              <Arrow />
            </a>
          </div>
        </div>
        <Newsletter />
        <div className="footer-bottom">
          <div className="country-selector">
            <button
              onClick={() => setCountryOpen(!countryOpen)}
              aria-expanded={countryOpen}
            >
              <GlobeHemisphereWest size={14} />
              {country}
            </button>
            {countryOpen && (
              <div className="country-menu">
                {[
                  "United States (English)",
                  "United Kingdom (English)",
                  "France (Français)",
                  "Germany (Deutsch)",
                  "Japan (日本語)",
                  "Canada (English)",
                ].map((name) => (
                  <button
                    key={name}
                    onClick={() => {
                      setCountry(name);
                      setCountryOpen(false);
                    }}
                  >
                    {name}
                    {country === name && <Check size={12} />}
                  </button>
                ))}
                <small>Demo display preference only.</small>
              </div>
            )}
            <span>© 2026 Stripe, LLC.</span>
            <small>Independent Next.js recreation · Demo only</small>
          </div>
          <a href="#main" className="footer-slash" aria-label="Back to top" />
        </div>
      </div>
      {cookies && <CookieSettings onClose={() => setCookies(false)} />}
    </footer>
  );
}
function Chat() {
  const [open, setOpen] = useState(false);
  return (
    <div className="chat-widget">
      {open && (
        <section className="chat-panel" aria-label="Product guide">
          <header>
            <Sparkle size={22} />
            <strong>Let’s find your starting point</strong>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close product guide"
            >
              <X size={18} />
            </button>
          </header>
          <p>
            Explore Stripe’s financial tools or talk to the team on Stripe’s
            official website.
          </p>
          <a href="#recommendations" onClick={() => setOpen(false)}>
            <Sparkle size={18} />
            Get product recommendations
            <Arrow />
          </a>
          <a href={sales}>
            <Users size={18} />
            Contact Stripe sales
            <Arrow />
          </a>
          <a href="https://support.stripe.com">
            <BookOpen size={18} />
            Visit the support center
            <Arrow />
          </a>
          <small>Demo product guide. No live chat is connected.</small>
        </section>
      )}
      <button
        className="chat-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {open ? (
          <>
            <X size={16} />
            Close
          </>
        ) : (
          "Chat now"
        )}
      </button>
    </div>
  );
}
export default function StripeHomepage() {
  return (
    <>
      <UseReveal />
      <div className="page-frame" aria-hidden="true" />
      <Navigation />
      <main id="main">
        <Hero />
        <Products />
        <Recommendations />
        <EventBanner />
        <GlobalScale />
        <section className="business-section container section-content">
          <Intro
            title="Powering businesses of all sizes."
            description="Run your business on a reliable platform that adapts to your needs."
          />
          <Enterprise />
          <Startups />
          <Platform />
          <Testimonials />
        </section>
        <Developers />
        <News />
        <Book />
      </main>
      <Footer />
      <Chat />
    </>
  );
}
