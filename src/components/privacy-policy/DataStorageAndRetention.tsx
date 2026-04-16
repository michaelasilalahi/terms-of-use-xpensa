import { dataStorageAndRetention } from '@/content/privacy-policy/dataStorageAndRetention';

export default function DataStorageAndRetentionComponent() {
  return (
    <main>
      <div className='mb-7.5'>
        <p className='font-semibold text-3xl'>Penyimpanan dan Retensi Data</p>
      </div>

      <div className='flex flex-col gap-y-7.5'>
        {dataStorageAndRetention.map((section, index) => (
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
