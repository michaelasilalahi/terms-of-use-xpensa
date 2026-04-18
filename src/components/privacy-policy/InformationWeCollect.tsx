import { informationWeCollectData } from '@/content/privacy-policy/informationWeCollect';

export default function InformationWeCollectComponent() {
  return (
    <main id='information-we-collect' className='scroll-mt-24'>
      <div className='mb-3.75 md:mb-7.5'>
        <p className='font-semibold text-2xl md:text-3xl'>Informasi yang Kami Kumpulkan</p>
      </div>

      <div className='flex flex-col gap-y-3.75 md:gap-7.5'>
        {informationWeCollectData.map((section, index) => (
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
