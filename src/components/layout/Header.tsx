import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='sticky top-0 bg-white border-b border-gray-300 py-5'>
      <div className='w-[90%] mx-auto flex justify-between items-center'>
        <Link href='/' className='font-sans text-xl tracking-widest'>
          Xpensa
        </Link>

        <button className='cursor-pointer hover:bg-gray-100'>
          <Image
            src='/hamburger.svg'
            alt='Hamburger'
            width={25}
            height={25}
            className='invert'
          />
        </button>
      </div>
    </header>
  );
}
