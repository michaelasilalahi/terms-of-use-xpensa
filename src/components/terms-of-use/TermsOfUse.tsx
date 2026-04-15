// 1. Import Header dari folder src/components
import { termsOfUseData } from "@/content/term-of-use";

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen">
      <main className="max-w-3xl mx-auto px-6 pb-20">
        <h1 className="text-3xl font-bold mb-2">Ketentuan Pengguna</h1>
        <p className="text-sm text-gray-500 mb-8">Terakhir diperbarui: 16 April 2026</p>

        <div className="space-y-8">
          {termsOfUseData.map((section) => (
            <section key={section.id}>
              <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                {section.content}
              </p>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}