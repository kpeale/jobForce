import React from 'react';
import { BsBookmark } from 'react-icons/bs';
import Image from 'next/image';
import { BiBriefcase } from 'react-icons/bi';
import { GrLocation } from 'react-icons/gr';
type Props = {
  job: {
    id: number;
    image: string;
    title: string;
    location: string;
    jobType: string;
    urgency: string;
  };
};

const JobCards = ({ job }: Props) => {
  return (
    <div className='border-[1.5px] border-gray-300 dark:border-gray-700 p-6 rounded-lg relative'>
      <div className='w-7 h-7 cursor-pointer hover:bg-gray-300 dark:bg-gray-800 flex items-center transition-all duration-300 justify-center rounded-full flex-col absolute top-4 right-4'>
        <BsBookmark className='w-3 h-3' />
      </div>
      <div className='flex items-center space-x-4'>
        <Image
          src={job.image}
          alt={job.title}
          width={50}
          height={50}
        />
        <div>
          <h1 className='text-basefont-medium'>{job.title}</h1>
          <div className='flex items-center space-x-6'>
            <div className='items-center flex space-x-1 mt-2 text-gray-500'>
              <BiBriefcase className='w-5 h-5' />
              <p className='text-gray-500 text-sm'>Segment</p>
            </div>
            <div className='items-center flex space-x-1 mt-2 text-gray-500'>
              <GrLocation className='w-5 h-5' />
              <p className='text-gray-500 text-sm'>{job.location}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center space-x-4 mt-3'>
        <div className='px-4 py-1 bg-blue-600/30 dark:blue-950/30 rounded-full text-sm text-blue-700 dark:text-blue-300 '>
          {job.jobType}
        </div>
        <div
          className={`px-4 py-1 rounded-full text-sm ${
            job.urgency === 'Urgent'
              ? 'bg-red-600/30 dark:bg-red-300/30 text-red-700 dark:text-red-300'
              : 'bg-green-600/30 text-green-700 dark:text-green-300'
          }`}
        >
          {job.urgency}
        </div>
      </div>
    </div>
  );
};

export default JobCards;
