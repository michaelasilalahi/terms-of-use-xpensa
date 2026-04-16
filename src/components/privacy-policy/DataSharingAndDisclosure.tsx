import { dataSharingAndDisclosure } from '@/content/privacy-policy/dataSharingAndDisclosure';

export default function DataSharingAndDisclosureComponent() {
  return (
    <main>
      <div className='mb-7.5'>
        <p className='font-semibold text-3xl'>
          Pembagian dan Pengungkapan Data
        </p>
      </div>

      <div className='flex flex-col gap-y-7.5'>
        {dataSharingAndDisclosure.map((section, index) => (
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
