import { whoWeAreData } from '@/content/terms-of-use/whoWeAre';

export default function WhoWeAreComponent() {
  return (
    <main>
      <div className='mb-7.5'>
        <p className='font-semibold text-3xl'>Siapa Kami</p>
      </div>

      <div className='flex flex-col gap-y-7.5'>
        {whoWeAreData.map((section, index) => (
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
