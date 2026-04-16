// components
import Header from '@/src/components/layout/Header';
import TermsOfUsePage from '@/src/components/terms-of-use/TermsOfUse';
import WhoWeAre from '@/src/components/who-we-are/whoWheAre';

export default function Home() {
  return (
    <main>
      <Header />
      <main className='max-w-3xl mx-auto mt-[50px] min-h-screen'>
        <TermsOfUsePage />
        <WhoWeAre />
      </main>
    </main>
  );
}
