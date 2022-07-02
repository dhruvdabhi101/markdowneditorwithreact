import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

export default function App() {

  const [input,setInput] = useState("Welcome To Markdown");

  return (
    <div className="App">
      <textarea
        autoFocus
        className="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <ReactMarkdown className='markdown'>{input }</ReactMarkdown>
    </div>
  );
};




