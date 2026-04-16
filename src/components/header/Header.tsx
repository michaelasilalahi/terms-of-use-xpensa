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
    <header className='sticky top-0 bg-white border-b border-gray-300 py-5'>
      <div className='w-[90%] mx-auto flex justify-between items-center'>
        <Link href='/' className='font-sans text-xl tracking-widest'>
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
          ${isOpen 
            ? 'opacity-100 translate-y-0 visible pointer-events-auto' 
            : 'opacity-0 -translate-y-4 invisible pointer-events-none'
          }
        `}
      >
        {!isPrivacyPolicy ? (
          <>
            <Link href="/terms-of-use#terms-of-use" onClick={close} className='hover:text-gray-500 font-medium pl-4'>
              Ketentuan Pengguna
            </Link>

            <Link href="/terms-of-use#who-we-are" onClick={close} className='hover:text-gray-500 font-medium pl-4'>
              Siapa Kami
            </Link>

            <Link href="/terms-of-use#register-and-access" onClick={close} className='hover:text-gray-500 font-medium pl-4'>
              Daftar & Akses
            </Link>

            <Link href="/terms-of-use#limitation-of-liability" onClick={close} className='hover:text-gray-500 font-medium pl-4'>
              Batasan Tanggung Jawab
            </Link>

            <Link href="/terms-of-use#governing-law" onClick={close} className='hover:text-gray-500 font-medium pl-4'>
              Hukum yang Berlaku
            </Link>

            <Link href="/terms-of-use#contact-information" onClick={close} className='hover:text-gray-500 font-medium pl-4'>
              Hubungi Kami
            </Link>

            <Link href="/privacy-policy" onClick={close} className='font-semibold text-lg  hover:text-gray-500 transition-colors'>
              Lihat Kebijakan Privasi &rarr;
            </Link>
          </>
        ) : (
          <>
            <Link href="/privacy-policy#privacy-policy" onClick={close} className='hover:text-gray-500 font-medium pl-4'>
              Kebijakan Privasi
            </Link>

            <Link href="/privacy-policy#information-we-collect" onClick={close} className='hover:text-gray-500 font-medium pl-4'>
              Informasi yang Kami Kumpulkan
            </Link>

            <Link href="/privacy-policy#how-we-use-your-data" onClick={close} className='hover:text-gray-500 font-medium pl-4'>
              Bagaimana Kami Menggunakan Data
            </Link>

            <Link href="/privacy-policy#data-sharing-and-disclosure" onClick={close} className='hover:text-gray-500 font-medium pl-4'>
              Pembagian & Pengungkapan Data
            </Link>

            <Link href="/privacy-policy#data-storage-and-retention" onClick={close} className='hover:text-gray-500 font-medium pl-4'>
              Penyimpanan & Retensi Data
            </Link>

            <Link href="/privacy-policy#security-and-data-protection" onClick={close} className='hover:text-gray-500 font-medium pl-4'>
              Keamanan Data
            </Link>

            <Link href="/terms-of-use" onClick={close} className='font-semibold text-lg hover:text-gray-500 transition-colors'>
              &larr; Lihat Ketentuan Pengguna
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
