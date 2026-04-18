import { contactInformationData } from '@/content/terms-of-use/contactInformation';

export default function ContactInformationComponent() {
  return (
    <main id='contact-information' className='scroll-mt-24'>
      <div className='mb-3.75 md:mb-7.5'>
        <p className='font-semibold text-2xl md:text-3xl'>Hubungi Kami</p>
      </div>

      <div className='flex fflex flex-col gap-y-3.75 md:gap-7.5'>
        {contactInformationData.map((section, index) => (
          <section key={index}>
            <p className='leading-relaxed font-medium text-base md:text-lg lg:text-xl'>
              {section.content}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
