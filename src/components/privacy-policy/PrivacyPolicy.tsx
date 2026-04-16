import { privacyPolicyData } from '@/content/privacy-policy/privacyPolicy';

export default function PrivacyPolicyComponent() {
  return (
    <main id='privacy-policy' className='scroll-mt-24'>
      <div className='flex flex-col gap-y-12.5 mt-12.5'>
        <div className='text-center flex flex-col gap-y-10'>
          <h1 className='text-5xl text-center font-semibold'>
            Kebijakan Privasi
          </h1>
          <p className='text-base text-gray-500 text-center'>
            Published: 1 Januari 2026
          </p>
        </div>

        <div className='flex flex-col gap-y-7.5'>
          {privacyPolicyData.map((section, index) => (
            <section key={index}>
              <p className='leading-relaxed font-medium text-xl'>
                {section.content}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
