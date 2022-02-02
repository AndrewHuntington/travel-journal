import React from 'react';
import TitleBar from './components/TitleBar';

function App() {
  return (
    <div className='w-[550px] h-[704px] border-2 border-solid border-red-600 mx-auto'>
      <TitleBar />
      <h1 className='text-3xl font-bold underline'> Hello world! </h1>
    </div>
  );
}

export default App;
