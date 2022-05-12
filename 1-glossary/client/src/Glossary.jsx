import React from 'react';
import Entry from './Entry.jsx';

const Glossary = ({words, edit, fetch}) => {
  return (
    <div className="glossary">
      {words.map((word) => (
        <Entry
        key={word.word}
        word={word}
        fetch={fetch}/>
      ))}
    </div>
  );
};

export default Glossary;