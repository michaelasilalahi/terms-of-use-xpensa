import { securityAndDataProtection } from '@/content/privacy-policy/securityAndDataProtection';

export default function SecurityAndDataProtectionComponent() {
  return (
    <main id='security-and-data-protection' className='scroll-mt-24'>
      <div className='mb-7.5'>
        <p className='font-semibold text-3xl'>Keamanan dan Pembatasan Data</p>
      </div>

      <div className='flex flex-col gap-y-7.5'>
        {securityAndDataProtection.map((section, index) => (
          <section key={index}>
            <p className='leading-relaxed font-medium text-xl'>
              {section.content}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
