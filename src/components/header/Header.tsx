'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useMenu } from './hooks/hamburger.hooks';

export default function Header() {
  const { isOpen, toggle, close } = useMenu();

  const pathname = usePathname();

  const isPrivacyPolicy = pathname === '/privacy-policy';

  return (
    <>
      <div
        onClick={close}
        className={`fixed inset-0 bg-black/10 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      />
      <header className='sticky top-0 bg-white border-b border-gray-300 py-px z-50 md:py-3 lg:py-3'>
        <div className='w-[90%] mx-auto flex justify-between items-center relative z-20 bg-white'>
          <Link
            href='/'
            className='font-sans text-base tracking-widest md:text-lg lg:text-xl'
          >
            Xpensa
          </Link>

          <button
            onClick={toggle}
            className='cursor-pointer p-2 rounded-md transition-all duration-100 active:scale-95'
          >
            <Image
              src={isOpen ? '/close.svg' : '/hamburger.svg'}
              alt={isOpen ? 'Close' : 'Hamburger'}
              width={25}
              height={25}
              className={`invert transition-transform duration-100 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
            />
          </button>
        </div>

        <div
          className={`absolute top-full left-0  w-full bg-white border-b border-gray-300 shadow-md flex flex-col py-4 px-[5%] gap-y-4 max-h-[80vh] overflow-y-auto transition-all duration-300 ease-in-out -z-10
          ${
            isOpen
              ? 'opacity-100 translate-y-0 visible pointer-events-auto'
              : 'opacity-0 -translate-y-4 invisible pointer-events-none'
          }
        `}
        >
          {!isPrivacyPolicy ? (
            <>
              <Link
                href='/terms-of-use#terms-of-use'
                onClick={close}
                className='hover:text-gray-500 transition-colors font-medium pl-4 text-base md:text-lg lg:text-xl'
              >
                Ketentuan Pengguna
              </Link>

              <Link
                href='/terms-of-use#who-we-are'
                onClick={close}
                className='hover:text-gray-500 transition-colors font-medium pl-4 text-base md:text-lg lg:text-xl'
              >
                Siapa Kami
              </Link>

              <Link
                href='/terms-of-use#register-and-access'
                onClick={close}
                className='hover:text-gray-500 transition-colors font-medium pl-4 text-base md:text-lg lg:text-xl'
              >
                Daftar & Akses
              </Link>

              <Link
                href='/terms-of-use#limitation-of-liability'
                onClick={close}
                className='hover:text-gray-500 transition-colors font-medium pl-4 text-base md:text-lg lg:text-xl'
              >
                Batasan Tanggung Jawab
              </Link>

              <Link
                href='/terms-of-use#governing-law'
                onClick={close}
                className='hover:text-gray-500 transition-colors font-medium pl-4 text-base md:text-lg lg:text-xl'
              >
                Hukum yang Berlaku
              </Link>

              <Link
                href='/terms-of-use#contact-information'
                onClick={close}
                className='hover:text-gray-500 transition-colors font-medium pl-4 text-base md:text-lg lg:text-xl'
              >
                Hubungi Kami
              </Link>

              <Link
                href='/privacy-policy'
                onClick={close}
                className='font-semibold text-lg hover:text-gray-500 transition-colors pl-4 md:text-lg lg:text-xl'
              >
                Lihat Kebijakan Privasi &rarr;
              </Link>
            </>
          ) : (
            <>
              <Link
                href='/privacy-policy#privacy-policy'
                onClick={close}
                className='hover:text-gray-500 transition-colors font-medium pl-4 text-base md:text-lg lg:text-xl'
              >
                Kebijakan Privasi
              </Link>

              <Link
                href='/privacy-policy#information-we-collect'
                onClick={close}
                className='hover:text-gray-500 transition-colors font-medium pl-4 text-base md:text-lg lg:text-xl'
              >
                Informasi yang Kami Kumpulkan
              </Link>

              <Link
                href='/privacy-policy#how-we-use-your-data'
                onClick={close}
                className='hover:text-gray-500 transition-colors font-medium pl-4 text-base md:text-lg lg:text-xl'
              >
                Bagaimana Kami Menggunakan Data
              </Link>

              <Link
                href='/privacy-policy#data-sharing-and-disclosure'
                onClick={close}
                className='hover:text-gray-500 transition-colors font-medium pl-4 text-base md:text-lg lg:text-xl'
              >
                Pembagian & Pengungkapan Data
              </Link>

              <Link
                href='/privacy-policy#data-storage-and-retention'
                onClick={close}
                className='hover:text-gray-500 transition-colors font-medium pl-4 text-base md:text-lg lg:text-xl'
              >
                Penyimpanan & Retensi Data
              </Link>

              <Link
                href='/privacy-policy#security-and-data-protection'
                onClick={close}
                className='hover:text-gray-500 transition-colors font-medium pl-4 text-base md:text-lg lg:text-xl'
              >
                Keamanan Data
              </Link>

              <Link
                href='/terms-of-use'
                onClick={close}
                className='font-semibold text-lg hover:text-gray-500 transition-colors pl-4 md:text-lg lg:text-xl'
              >
                &larr; Lihat Ketentuan Pengguna
              </Link>
            </>
          )}
        </div>
      </header>
    </>
  );
}
