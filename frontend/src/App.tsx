import React, { useState } from 'react';
import Button from './components/Button';
import TextInput from './components/TextInput';
import TransformingButton from './components/TransformingButton';
import Dropdown from './components/Dropdown';

const App: React.FC = () => {
  const [rightText, setRightText] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleDropdownSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleTextInputChange = (value: string) => {
    setRightText(value);
  };

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
            onChange={handleTextInputChange}
          />
        </div>
        <TransformingButton leftInput={"leftText"} rightInput={rightText} />
        <div className="mt-8">
          <Dropdown
            label="Choose an option"
            options={['Option 1', 'Option 2', 'Option 3']}
            onSelect={handleDropdownSelect}
          />
          {selectedOption && (
            <p className="mt-4 text-lg text-neonSunset">
              Selected option: {selectedOption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;