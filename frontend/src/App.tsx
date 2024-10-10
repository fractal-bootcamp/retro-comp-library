import React, { useState } from 'react';
import Button from './components/Button';
import TextInput from './components/TextInput';
import TransformingButton from './components/TransformingButton';

const App: React.FC = () => {
  const [rightText, setRightText] = useState<string>('');

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold underline">
          Retrofuture component library
        </h1>
        <br />
        <Button text="Button Text" />
        <br />
        <div className="mb-4">
          <TextInput
            value={rightText}
            placeholder="Enter text"
            onChange={(e) => setRightText(e.target.value)}
          />
        </div>
        <TransformingButton leftInput={"leftText"} rightInput={"rightText"} />
      </div>
    </div>
  );
};

export default App;
