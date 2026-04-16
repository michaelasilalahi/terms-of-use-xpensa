// 1. Import Header dari folder src/components
import { termsOfUseData } from '@/content/terms-of-use/termsOfUse';

export default function TermsOfUseComponent() {
  return (
    <main id='terms-of-use' className='scroll-mt-24'>
      <div className='flex flex-col gap-y-12.5 mt-12.5'>
        <div className='text-center flex flex-col gap-y-10'>
          <h1 className='text-5xl text-center font-semibold'>
            Ketentuan Pengguna
          </h1>
          <p className='text-base text-gray-500 text-center'>
            Published: 1 Januari 2026
          </p>
        </div>

        <div className='flex flex-col gap-y-7.5'>
          {termsOfUseData.map((section, index) => (
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
