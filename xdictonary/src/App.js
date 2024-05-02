import React, { useState } from 'react';

const App = () => {
  // Initialize state with the provided dictionary
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  // State to hold user input
  const [searchTerm, setSearchTerm] = useState('');
  
  // State to hold search result or message
  const [searchResult, setSearchResult] = useState('');

  // Function to handle search
  const handleSearch = () => {
    // Convert search term to lowercase for case-insensitive search
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    // Find the word in the dictionary
    const foundWord = dictionary.find(entry => entry.word.toLowerCase() === lowerCaseSearchTerm);

    // Update search result
    setSearchResult(foundWord ? foundWord.meaning : 'Word not found in the dictionary.');
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Enter a word"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <h2>Definition: </h2>
      <div>{searchResult}</div>
    </div>
  );
};

export default App;
