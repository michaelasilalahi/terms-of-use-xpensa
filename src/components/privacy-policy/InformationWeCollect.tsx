import { informationWeCollectData } from '@/content/privacy-policy/informationWeCollect';

export default function InformationWeCollectComponent() {
  return (
    <main id='information-we-collect' className='scroll-mt-24'>
      <div className='mb-7.5'>
        <p className='font-semibold text-3xl'>Informasi yang Kami Kumpulkan</p>
      </div>
      <div className='flex flex-col gap-y-7.5'>
        {informationWeCollectData.map((section, index) => (
          <section key={index}>
            {section.title ? (
              <ul className='list-disc pl-10.5'>
                <li className='leading-relaxed font-medium text-xl'>
                  <span className='font-bold'>{section.title}: </span>
                  {section.content}
                </li>
              </ul>
            ) : (
              <p className='leading-relaxed font-medium text-xl'>
                {section.content}
              </p>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
