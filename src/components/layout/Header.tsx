import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 py-4 px-6 mb-8">
      <div className="max-w-3xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-sans text-xl tracking-tight">
          Xpensa
        </Link>
      </div>
    </header>
  );
}