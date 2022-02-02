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
  bottomBorder: boolean;
  padTop: boolean;
};

export default function JournalEntry({
  entry,
  bottomBorder,
  padTop,
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

      <div>
        <img className=' h-3' src={marker} alt='' />
        <p>{entry.location}</p>
        <a href={entry.googleMapsUrl} target='_blank' rel='noopener noreferrer'>
          View on Google Maps
        </a>
        <h2>{entry.title}</h2>
        <p>
          {entry.startDate} - {entry.endDate}
        </p>
        <div className='w-[326px]'>
          <p className=' font-medium text-[10px]'>{entry.description}</p>
        </div>
      </div>
    </div>
  );
}
