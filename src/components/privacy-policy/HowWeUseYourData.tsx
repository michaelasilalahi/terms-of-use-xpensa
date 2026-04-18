import { howWeUseYourData } from '@/content/privacy-policy/howWeUseYourData';

export default function HowWeUseYourDataComponent() {
  return (
    <main id='how-we-use-your-data' className='scroll-mt-24'>
      <div className='mb-3.75 md:mb-7.5'>
        <p className='font-semibold text-2xl md:text-3xl'>
          Bagaimana Kami Menggunakan Data Anda
        </p>
      </div>

      <div className='flex flex-col gap-y-3.75 md:gap-7.5'>
        {howWeUseYourData.map((section, index) => (
          <section key={index}>
            {section.title ? (
              <ul className='list-disc pl-7.5 md:pl-10'>
                <li className='leading-relaxed font-medium text-base md:text-lg lg:text-xl'>
                  <span className='font-bold'>{section.title}: </span>
                  {section.content}
                </li>
              </ul>
            ) : (
              <p className='leading-relaxed font-medium text-base md:text-lg lg:text-xl'>
                {section.content}
              </p>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
