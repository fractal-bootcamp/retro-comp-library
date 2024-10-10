import React, { useState } from 'react';
import Button from './components/Button';
import TextInput from './components/TextInput';
import TransformingButton from './components/TransformingButton';
import Dropdown from './components/Dropdown'; // Import the Dropdown component

const App: React.FC = () => {
  const [rightText, setRightText] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<string | null>(null); // State to store the selected dropdown option

  const handleDropdownSelect = (option: string) => {
    setSelectedOption(option); // Update the selected option state when an option is selected
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
            onChange={(e) => setRightText(e.target.value)}
          />
        </div>
        <TransformingButton leftInput={"leftText"} rightInput={"rightText"} />

        {/* Add the Dropdown example */}
        <div className="mt-8">
          <Dropdown
            label="Choose an option"
            options={['Option 1', 'Option 2', 'Option 3']}
            onSelect={handleDropdownSelect} // Handle the option selection
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
