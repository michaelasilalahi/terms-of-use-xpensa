import { governingLawData } from '@/content/terms-of-use/governingLaw';

export default function GoverningLawComponent() {
  return (
    <main>
      <div className='mb-7.5'>
        <p className='font-semibold text-3xl'>Hukum yang Berlaku</p>
      </div>

      <div className='flex flex-col gap-y-7.5'>
        {governingLawData.map((section, index) => (
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
