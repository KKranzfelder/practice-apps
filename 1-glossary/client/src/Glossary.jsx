import React from 'react';
import Entry from './Entry.jsx';

const Glossary = ({words}) => {
  return (
    <div className="glossary">
      {words.map((word) => (
        <Entry word={word}/>
      ))}/>
    </div>
  )
};

export Glossary as default;