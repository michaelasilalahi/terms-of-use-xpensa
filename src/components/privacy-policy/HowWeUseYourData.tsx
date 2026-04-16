import { howWeUseYourData } from '@/content/privacy-policy/howWeUseYourData';

export default function HowWeUseYourDataComponent() {
  return (
    <main>
      <div className='mb-7.5'>
        <p className='font-semibold text-3xl'>
          Bagaimana Kami Menggunakan Data Anda
        </p>
      </div>
      <div className='flex flex-col gap-y-7.5'>
        {howWeUseYourData.map((section, index) => (
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
