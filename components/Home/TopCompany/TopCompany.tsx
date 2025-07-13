import React from 'react';
import SectionHeading from '@/components/Helper/SectionHeading';
const CompanyData = [
  {
    id: 1,
    image: '/images/c1.png',
    name: 'Udemy',
    location: 'London, UK',
    position: '20',
  },
  {
    id: 2,
    image: '/images/c2.png',
    name: 'Stripe',
    location: 'Kolkata, India',
    position: '30',
  },
  {
    id: 3,
    image: '/images/c3.png',
    name: 'Dropbox',
    location: 'Lahore, Pakistan',
    position: '33',
  },
  {
    id: 4,
    image: '/images/c4.png',
    name: 'Figma',
    location: 'Dhaka, Bangladesh',
    position: '40',
  },
];

const TopCompany = () => {
  return (
    <div className='pt-16 pb-16'>
      <SectionHeading
        heading='Top Company Registered'
        subHeading='Some of the companies we have helped recruit applicants over the years'
      />
      <div className='w-[80%] mx-auto mt-16'></div>
    </div>
  );
};

export default TopCompany;
