import React from 'react';
import Button from './components/Button';

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold underline">
          Retrofuture component library
        </h1>
        <br />
        <Button text="Button Text" />
      </div>
    </div>
  );
}

export default App;
