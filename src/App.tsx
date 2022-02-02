import React from 'react';
import TitleBar from './components/TitleBar';
import JournalEntry from './components/JournalEntry';
import { data } from './db/data';

function App() {
  const entries = data.map((entry, index) => (
    <JournalEntry
      key={index}
      entry={entry}
      bottomBorder={index === data.length - 1 ? false : true}
      padTop={index === 0 ? false : true}
    />
  ));

  return (
    <div className=' mt-8 w-[550px] h-[704px] border-2 border-solid border-red-600 mx-auto'>
      <TitleBar />
      {entries}
    </div>
  );
}

export default App;
