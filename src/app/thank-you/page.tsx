export default function ThankYou() {
  const isMock =
    typeof window !== "undefined" &&
    window.location.search.includes("mock=true");
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">
        🎉 Thank you for your support!
      </h1>
      {isMock && (
        <p className="text-muted-foreground">
          (Currently a mock page, will redirect to the real checkout after
          configuring the Stripe key)
        </p>
      )}
      <a href="/" className="mt-6 underline">
        Back to Home
      </a>
    </main>
  );
}
