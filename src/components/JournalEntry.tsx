import React from 'react';
import marker from '../images/marker.png';

export type JournalEntryProps = {
  entry: {
    title: string;
    location: string;
    googleMapsUrl: string;
    startDate: string;
    endDate: string;
    description: string;
    image: string;
  };
  bottomBorder?: boolean;
  padTop?: boolean;
};

export default function JournalEntry({
  entry,
  bottomBorder = false,
  padTop = false,
}: JournalEntryProps) {
  return (
    <div
      className={`flex ml-10 pb-[18px] w-[470px] ${
        bottomBorder ? `border-b border-solid border-gray-200}` : null
      } ${padTop ? `pt-[18px]` : null}`}
    >
      <div className='mr-5'>
        <img
          className=' w-[125px] h-[168px]'
          src={entry.image}
          alt='travel location'
        />
      </div>

      <div className='mt-5'>
        <div className='flex items-center text-[10.25px] leading-3 mb-1'>
          <img className=' h-3 mr-1' src={marker} alt='' />
          <p className='tracking-widest mr-3'>{entry.location.toUpperCase()}</p>
          <a
            href={entry.googleMapsUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#918E9B] underline'
          >
            View on Google Maps
          </a>
        </div>

        <h2 className='font-bold text-2xl mb-4'>{entry.title}</h2>
        <p className='font-bold text-[10.25px] mb-2.5'>
          {entry.startDate} - {entry.endDate}
        </p>
        <div className='w-[326px] pr-1'>
          <p className=' font-medium text-[10.25px] leading-4 text-[#2B283A]'>
            {entry.description}
          </p>
        </div>
      </div>
    </div>
  );
}
