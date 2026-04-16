import Header from '@/src/components/layout/Header';
import PrivacyPolicyComponent from '@/src/components/privacy-policy/PrivacyPolicy';
import InformationWeCollectComponent from '@/src/components/privacy-policy/InformationWeCollect';
import HowWeUseYourDataComponent from '@/src/components/privacy-policy/HowWeUseYourData';

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Header />
      <main className='flex flex-col gap-y-32.5 max-w-3xl mx-auto min-h-screen'>
        <PrivacyPolicyComponent />
        <InformationWeCollectComponent />
        <HowWeUseYourDataComponent />
      </main>
    </main>
  );
}
