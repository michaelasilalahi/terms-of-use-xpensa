import { limitationOfLiabilityData } from '@/content/terms-of-use/limitationOfLiability';

export default function LimitationOfLiabilityComponent() {
  return (
    <main id='limitation-of-liability' className='scroll-mt-24'>
      <div className='mb-3.75 md:mb-7.5'>
        <p className='font-semibold text-2xl md:text-3xl'>Batasan Tanggung Jawab</p>
      </div>

      <div className='flex flex-col gap-y-3.75 md:gap-7.5'>
        {limitationOfLiabilityData.map((section, index) => (
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
