import { contactInformationData } from '@/content/terms-of-use/contactInformation';

export default function ContactInformationComponent() {
  return (
    <main>
      <div className='mb-7.5'>
        <p className='font-semibold text-3xl'>Hubungi Kami</p>
      </div>

      <div className='flex flex-col gap-y-7.5'>
        {contactInformationData.map((section, index) => (
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
