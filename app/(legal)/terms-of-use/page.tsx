import Header from '@/src/components/layout/Header';
import TermsOfUseComponent from "@/src/components/terms-of-use/TermsOfUse";
import WhoWeAre from "@/src/components/terms-of-use/whoWheAre";

export default function TermsOfUsePage() {
  return (
    <main>
      <Header />
      <main className='max-w-3xl mx-auto mt-[50px] min-h-screen'>
        <TermsOfUseComponent />
        <WhoWeAre />
      </main>
    </main>
  );
}
