import Link from "next/link";
export default function NotFound() {
  return (
    <main className="not-found">
      <img src="/assets/stripe-logo.svg" alt="Stripe" width="90" height="38" />
      <p className="eyebrow">404 · Page not found</p>
      <h1 className="heading-2">
        Let’s get you
        <br />
        back on track.
      </h1>
      <p>We couldn’t find this page. There’s plenty more to explore.</p>
      <Link href="/" className="button button-primary">
        Back to home <span>→</span>
      </Link>
    </main>
  );
}
