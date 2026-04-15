// components
import Header from "@/src/components/layout/Header";
import TermsOfUsePage from "@/src/components/terms-of-use/TermsOfUse";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6">
      <Header />
      <TermsOfUsePage />
    </div>
  );
}
