import Header from '@/src/components/header/Header';
import TermsOfUseComponent from '@/src/components/terms-of-use/TermsOfUse';
import WhoWeAreComponent from '@/src/components/terms-of-use/WhoWeAre';
import RegisterAndAccessComponent from '@/src/components/terms-of-use/RegisterAndAccess';
import LimitationOfLiabilityComponent from '@/src/components/terms-of-use/LimitationOfLiability';
import GoverningLawComponent from '@/src/components/terms-of-use/GoverningLaw';
import ContactInformationComponent from '@/src/components/terms-of-use/ContactInformation';
import FooterComponent from '@/src/components/footer/Footer';

export default function TermsOfUsePage() {
  return (
    <main>
      <Header />
      <main className='flex flex-col gap-y-20 w-[70%] mx-auto min-h-screen lg:w-[50%] md:gap-y-25 lg:gap-y-32.5'>
        <TermsOfUseComponent />
        <WhoWeAreComponent />
        <RegisterAndAccessComponent />
        <LimitationOfLiabilityComponent />
        <GoverningLawComponent />
        <ContactInformationComponent />
      </main>
      <FooterComponent />
    </main>
  );
}
