import { governingLawData } from '@/content/terms-of-use/governingLaw';

export default function GoverningLawComponent() {
  return (
    <main id='governing-law' className='scroll-mt-24'>
      <div className='mb-3.75 md:mb-7.5'>
        <p className='font-semibold text-2xl md:text-3xl'>Hukum yang Berlaku</p>
      </div>

      <div className='flex flex-col gap-y-3.75 md:gap-7.5'>
        {governingLawData.map((section, index) => (
          <section key={index}>
            <p className='leading-relaxed font-medium text-base md:text-lg lg:text-xl'>
              {section.content}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
