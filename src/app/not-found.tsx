import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap pb-12 pt-20 md:pt-28">
      <h1 className="t-title max-w-[16ch]">This page does not exist.</h1>
      <p className="t-lead mt-6">
        The link may be old or mistyped. Start from the home page, or go
        straight to what you came for.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn btn-solid">
          Go to the home page
        </Link>
        <Link href="/products/redirect" className="btn btn-line">
          Read about Redirect
        </Link>
      </div>
    </section>
  );
}
