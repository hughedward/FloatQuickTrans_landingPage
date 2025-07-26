import { NextResponse } from "next/server";
import Stripe from "stripe";

/**
 * GET /api/checkout
 *
 * When STRIPE_SECRET_KEY is configured, create a Stripe Checkout Session
 * and redirect the client to Stripe's hosted page.
 * If the key is missing (e.g. during local development before your
 * Stripe account is ready), fall back to a mock redirect so the
 * front‑end flow still works.
 *
 * Environment variables expected:
 *   STRIPE_SECRET_KEY        – Your live or test secret key
 *   NEXT_PUBLIC_BASE_URL     – Origin, e.g. https://example.com
 */
export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:9002";
  const secretKey = process.env.STRIPE_SECRET_KEY;

  // ---------- Mock mode ----------
  if (!secretKey) {
    return NextResponse.redirect(new URL("/thank-you?mock=true", baseUrl));
  }

  // ---------- Live / Test Stripe ----------
  const stripe = new Stripe(secretKey, { apiVersion: "2025-06-30.basil" });

  // Create a Checkout Session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd", // Adjust currency if needed
          unit_amount: 500, // Amount in cents (e.g. 500 = $5.00)
          product_data: { name: "Buy me a coffee ☕" },
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${baseUrl}/success`,
    cancel_url: `${baseUrl}/cancel`,
  });

  // Redirect the user to Stripe Checkout
  return NextResponse.redirect(session.url ?? baseUrl);
}
