import Header from '@/src/components/header/Header';
import PrivacyPolicyComponent from '@/src/components/privacy-policy/PrivacyPolicy';
import InformationWeCollectComponent from '@/src/components/privacy-policy/InformationWeCollect';
import HowWeUseYourDataComponent from '@/src/components/privacy-policy/HowWeUseYourData';
import DataSharingAndDisclosureComponent from '@/src/components/privacy-policy/DataSharingAndDisclosure';
import DataStorageAndRetentionComponent from '@/src/components/privacy-policy/DataStorageAndRetention';
import SecurityAndDataProtectionComponent from '@/src/components/privacy-policy/SecurityAndDataProtection';
import Footer from '@/src/components/footer/Footer';

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Header />
      <main className='flex flex-col gap-y-20 w-[70%] mx-auto min-h-screen lg:w-[50%] md:gap-y-25 lg:gap-y-32.5'>
        <PrivacyPolicyComponent />
        <InformationWeCollectComponent />
        <HowWeUseYourDataComponent />
        <DataSharingAndDisclosureComponent />
        <DataStorageAndRetentionComponent />
        <SecurityAndDataProtectionComponent />
      </main>
      <Footer />
    </main>
  );
}
