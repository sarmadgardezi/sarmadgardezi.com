import type { NextPage } from 'next';
import { useState } from 'react';
import { NextSeo, OrganizationJsonLd, OrganizationJsonLdProps } from 'next-seo';

import { AboutSection } from '../sections/ServicesPage/About';
import { ContactSection } from '../sections/ServicesPage/Contact';
import { HeroSection } from '../sections/ServicesPage/Hero';
import { ServicesSection } from '../sections/ServicesPage/Services';
import { ContactModal } from '@components/Modal';
import { generateSeoProps } from '@config/seo.config';
import { getEmailAddress } from '@utils/getEmailAddress';
import { getBaseUrl } from '@utils/getBaseUrl';
import { socialProfiles } from '@config/profiles.config';

const baseUrl = getBaseUrl();

const seoProps = generateSeoProps({
  url: `${baseUrl}/services`,
  title: 'Services | Sarmad Gardezi',
 
});

const jsonLdProps: OrganizationJsonLdProps = {
  type: 'Corporation',
  name: 'Sarmad Gardezi',
  url: `${baseUrl}/services`,
  logo: `${baseUrl}/images/logo-k.png`,
  contactPoints: [
    {
      contactType: 'Inquiries & Support',
      email: getEmailAddress(socialProfiles),
      availableLanguage: ['English', 'German'],
    },
  ],
  makesOffer: [
    {
      itemOffered: {
        name: 'About | Sarmad Gardezi',
        description:
          'I am a freelance web / product developer with over 5 years of experience and a background in Freelancing.',
      },
    },
  ],
};

const ServicesPage: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <NextSeo {...seoProps} />
      <OrganizationJsonLd {...jsonLdProps} />
      <HeroSection openContactModal={() => setIsModalOpen(true)} />
      <AboutSection />
      <ServicesSection />
      <ContactSection openContactModal={() => setIsModalOpen(true)} />
      <ContactModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
};

export default ServicesPage;
