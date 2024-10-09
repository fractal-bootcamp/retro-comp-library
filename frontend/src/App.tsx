import React from 'react';
import Button from './components/Button';
import TextInput from './components/TextInput';

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold underline">
          Retrofuture component library
        </h1>
        <br />
        <Button text="Button Text" />
        <br />
        <div>
          <TextInput />
        </div>
      </div>
    </div>
  );
}

export default App;
