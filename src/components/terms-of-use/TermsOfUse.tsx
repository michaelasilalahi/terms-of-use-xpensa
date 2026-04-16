// 1. Import Header dari folder src/components
import { termsOfUseData } from '@/content/term-of-use';

export default function TermsOfUsePage() {
  return (
    <main>
      <div className='text-center flex flex-col gap-y-10'>
        <h1 className='text-5xl text-center font-semibold'>
          Ketentuan Pengguna
        </h1>
        <p className='text-base text-gray-500 text-center'>
          Published: 1 Januari 2026
        </p>
      </div>

      <div className='mt-[70px] space-y-6'>
        {termsOfUseData.map((section, index) => (
          <section key={index}>
            <p className='leading-[1.5] font-medium text-xl'>
              {section.content}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
