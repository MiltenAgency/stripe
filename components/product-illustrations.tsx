"use client";
import {
  ArrowRight,
  Check,
  CreditCard,
  LockKey,
  Sparkle,
  Waves,
  ArrowUpRight,
  CaretDown,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import { asset } from "@/lib/homepage-data";
import { WorldGraphic } from "./motion-graphics";

export function MiniCheckout({ platform = false }: { platform?: boolean }) {
  return (
    <div className={`mini-checkout ${platform ? "yoga-checkout" : ""}`}>
      <div className="merchant-brand">
        {platform ? "◉ Daybreak Yoga" : "ROASTEN"}
      </div>
      <div className="mini-checkout-content">
        <div>
          <span className="tiny-label">
            {platform ? "Order Summary" : "Email"}
          </span>
          <p>
            {platform
              ? "Unlimited yoga subscription"
              : "alex.morgan@example.com"}
          </p>
          <div className="express-pay">
            <span className="link-pay">link ➜</span>
            <span>● Pay</span>
          </div>
          <span className="tiny-label">Payment method</span>
          <div className="payment-options">
            {["Card", "Bank account", "Cash App Pay", "Klarna"].map((m, i) => (
              <div key={m}>
                <span className={i === 0 ? "radio checked" : "radio"} />
                <CreditCard size={12} />
                {m}
                <span>{i === 0 ? "VISA" : ""}</span>
              </div>
            ))}
          </div>
          <span className="mini-pay">
            {platform ? "Pay $120.00" : "Pay $20.75"}
          </span>
        </div>
        <div className="order-summary">
          <strong>Order summary</strong>
          <div className="coffee-icon">♨</div>
          <span>Freshly roasted coffee</span>
          <div>
            <span>Subtotal</span>
            <span>$18.75</span>
          </div>
          <div>
            <span>Shipping</span>
            <span>$2.00</span>
          </div>
          <div className="order-total">
            <span>Total</span>
            <span>$20.75</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export function PaymentsGraphic() {
  return (
    <div className="payment-graphic">
      <img
        className="payment-bg"
        src={asset("payment-bento-background.webp")}
        alt=""
      />
      <div className="terminal-device">
        <img src={asset("terminal.webp")} alt="" />
        <div className="terminal-screen">
          <span>✳</span>
          <small>Pay Roastery</small>
          <strong>$5.46</strong>
          <span className="terminal-subtitle">
            Tap, insert, or swipe to pay
          </span>
          <div>
            Matcha Latte <b>$4.50</b>
          </div>
          <div>
            Loyalty discount <b>−$0.50</b>
          </div>
          <div>
            Tax <b>$1.46</b>
          </div>
          <div className="terminal-total">
            Total <b>$5.46</b>
          </div>
          <span className="terminal-action">Cancel</span>
        </div>
      </div>
      <MiniCheckout />
    </div>
  );
}
export function BillingGraphic() {
  return (
    <div className="billing-graphic">
      <img className="billing-bg" src={asset("wave_crop.webp")} alt="" />
      <div className="billing-plan">
        <div className="billing-plan-title">
          <span>◉</span>
          <div>
            Pro Plan<small>Billed monthly</small>
          </div>
          <span>⌄</span>
        </div>
        <p>Tokens</p>
        <small>$0.01 per 1,000 units</small>
        <p className="meter-label">▧ Usage meter</p>
        <div className="usage-progress" />
      </div>
      <div className="usage-chart">
        <small>Tokens used in the last 30 days</small>
        <strong>1,398,491,060</strong>
        <div className="chart-bars">
          {Array.from({ length: 28 }, (_, i) => (
            <i
              key={i}
              style={{
                height: `${18 + ((i * 37 + 11) % 77)}%`,
                animationDelay: `${i * -0.09}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export function CommerceGraphic() {
  return (
    <div className="commerce-graphic">
      <div className="commerce-orbit" />
      <div className="chat-bubble customer-bubble">
        I’m refreshing my wardrobe. Can you recommend some cozy, comfortable
        basics in size M?
      </div>
      <div className="chat-bubble assistant-bubble">
        Absolutely. Here are a few comfy essentials that pair well and could be
        a good starting point:
      </div>
      <div className="commerce-products">
        <div>
          {[
            ["shirt-blue.webp", "Deluxe Shirt", "$26.00"],
            ["hoodie-navy.webp", "Essential Hoodie", "$48.00"],
          ].map(([image, name, price]) => (
            <div key={image}>
              <img src={asset(image)} alt={name} />
              <strong>{name}</strong>
              <small>
                {name === "Deluxe Shirt" ? "Blue" : "Navy"} · Medium
              </small>
              <b>{price}</b>
              <small>Cartsy</small>
            </div>
          ))}
        </div>
        <span className="buy-now">Buy now</span>
      </div>
    </div>
  );
}
export function IssuingGraphic() {
  return (
    <div className="issuing-graphic">
      <div className="issuing-glow" />
      <div className="issuing-demo-card">
        <img src={asset("issuing_card_bg.webp")} alt="" />
        <div className="issuing-ribbon" />
        <img
          src={asset("issuing_card_fg.webp")}
          alt="Visa payment card with colorful ribbon artwork"
        />
      </div>
    </div>
  );
}
export function CryptoGraphic() {
  return (
    <div className="crypto-graphic">
      <WorldGraphic />
      <span className="crypto-location location-one">
        San Francisco <b>+ $24,150</b>
      </span>
      <span className="crypto-location location-two">
        Singapore <b>+ $8,750</b>
      </span>
      <span className="crypto-location location-three">
        London <b>+ $12,480</b>
      </span>
    </div>
  );
}
export function ConnectGraphic({ large = false }: { large?: boolean }) {
  return (
    <div className={`connect-graphic ${large ? "large" : ""}`}>
      <img
        src={asset(
          large
            ? "platform-graphic-background_2x.webp"
            : "connect-bento-card-background-image.webp",
        )}
        alt=""
        className="connect-background"
      />
      <div className="platform-window">
        <div className="platform-browser">
          <span>● ● ●</span>
          <span>
            <LockKey size={9} /> dashboard.zenflow.com
          </span>
        </div>
        <aside>
          <strong>
            <span>✿</span> Zenflow
          </strong>
          <span>⌂ Home</span>
          <span>▤ Reporting</span>
          <span>⚙ Settings</span>
        </aside>
        <div className="platform-table">
          <h4>{large ? "Hello, Daybreak Yoga" : "Connected Accounts"}</h4>
          {large && (
            <div className="platform-overview">
              <div>
                Gross volume<strong>$124,829.50</strong>
              </div>
              <div>
                Active customers<strong>1,428</strong>
              </div>
              <svg viewBox="0 0 500 70">
                <path
                  d="M0 65 30 60 60 64 90 42 120 48 150 36 180 38 210 25 240 32 270 18 300 24 330 13 360 17 390 7 420 12 450 4 500 1"
                  fill="none"
                  stroke="#8261ef"
                  strokeWidth="2"
                />
              </svg>
            </div>
          )}
          <div className="platform-table-head">
            <span>Accounts</span>
            <span>Account country</span>
            <span>Payment balance (USD)</span>
            <span>Volume (USD)</span>
          </div>
          {[
            "Vital Flow",
            "Daybreak Yoga",
            "Barbells & Balance",
            "Sound Spirit",
            "Quiet Flow Yoga",
            "Zenith Zen",
            "Mt. Yoga",
          ].map((name, i) => (
            <div className="platform-table-row" key={name}>
              <span>
                <i
                  style={{
                    background: ["#e2d58f", "#9c85f9", "#dd9dd6", "#e7bc87"][
                      i % 4
                    ],
                  }}
                />
                {name}
              </span>
              <span>
                {
                  [
                    "Canada",
                    "United States",
                    "United States",
                    "United Kingdom",
                  ][i % 4]
                }
              </span>
              <span>
                ${["8,348.00", "1,502.00", "2,941.00", "3,865.00"][i % 4]}
              </span>
              <span>
                ${["71,562.98", "7,880.00", "19,343.35", "25,970.03"][i % 4]}
              </span>
            </div>
          ))}
        </div>
      </div>
      {!large && (
        <div className="connect-checkout">
          <MiniCheckout platform />
        </div>
      )}
    </div>
  );
}
export function ProductIllustration({ id }: { id: string }) {
  if (id === "payments") return <PaymentsGraphic />;
  if (id === "billing") return <BillingGraphic />;
  if (id === "commerce") return <CommerceGraphic />;
  if (id === "issuing") return <IssuingGraphic />;
  if (id === "crypto") return <CryptoGraphic />;
  return <ConnectGraphic />;
}
