import Link from 'next/link';

export const termsOfUseData = [
  {
    content:
      "Xpensa membangun teknologi cerdas yang memudahkan individu untuk mencatat, mengelola, dan menganalisis arus kas keuangan mereka sehari-hari. Ketentuan Penggunaan ('Ketentuan') ini mengatur akses dan penggunaan Anda atas aplikasi seluler Xpensa, fitur kecerdasan buatan (AI Data Mining), situs web, serta seluruh layanan dan perangkat lunak terkait yang kami tawarkan (secara bersama-sama disebut sebagai 'Layanan'). Layanan ini disediakan dan dikelola sepenuhnya oleh Xpensa.",
  },
  {
    content:
      'Ketentuan ini merupakan perjanjian hukum yang mengikat antara Anda dan Xpensa. Jika Anda tidak menyetujui Ketentuan ini, kami mempersilakan Anda untuk tidak mengunduh, mengakses, maupun menggunakan Layanan kami. Sebaliknya, dengan mengunduh aplikasi dan menggunakan Xpensa, Anda secara tegas menyetujui seluruh aturan yang tertuang dalam dokumen ini.',
  },
  {
    content:
      'Kami menyadari bahwa informasi keuangan adalah ranah privasi yang sangat sensitif. Oleh karena itu, kami menegaskan bahwa kami tidak menjual data pribadi maupun data pelaporan keuangan Anda kepada pengiklan atau pihak ketiga mana pun. Kami juga tidak membagikan informasi identitas Anda (seperti nama lengkap atau alamat email) kepada pialang data (data broker). Kepercayaan dan keamanan privasi Anda adalah prioritas utama kami.',
  },
  {
    content:
      'Untuk mewujudkan transparansi tersebut, di bawah ini kami menjelaskan secara terperinci beserta batasan-batasan dalam penggunaan Layanan kami. Harap diingat bahwa Anda selalu memiliki kendali dan akses penuh di dalam pengaturan aplikasi untuk meninjau atau menghapus data Anda kapan pun Anda inginkan.',
  },
  {
    content: (
      <>
        Seluruh praktik perlindungan data tersebut diatur lebih lanjut dalam{' '}
        <Link
          href='/privacy-policy'
          className='underline cursor-pointer hover:text-gray-500 transition-colors'
        >
          Kebijakan Privasi
        </Link>{' '}
        kami yang menjelaskan cara kami mengumpulkan dan menggunakan informasi
        pribadi Anda. Meskipun bukan bagian dari Ketentuan hukum ini, dokumen
        tersebut adalah dokumen yang sangat penting dan wajib Anda baca.
      </>
    ),
  },
];
