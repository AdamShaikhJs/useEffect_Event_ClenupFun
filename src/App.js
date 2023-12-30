import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [data, setData] = useState(false);
  const eventFun = () => {
    console.log('----  use Effect clean up funtion ----');
  };
  console.log('parent');

  // useEffect(() => {
  //   let i = 0;
  //   const intID = setInterval(() => {
  //     console.log('hello from interval', i++);
  //   }, 2000);
  //   return () => clearInterval(intID);
  // }, []);

  useEffect(() => {
    let i = 0;
    const someFunc = () => {
      console.log('hmm, this is interesting', i++);
    };
    window.addEventListener('scroll', someFunc);
    return () => window.removeEventListener('scroll', someFunc);
  }, []);

  return (
    <div>
      <h1> Event Listner with useEffect clean up function</h1>
      <button onClick={() => setData(!data)}> toggle </button>
      {data && (
        <>
          <h1> Event Listne</h1>
          <p style={{ height: '100vh', border: '2px solid red' }}>
            new changes{' '}
          </p>
        </>
      )}
    </div>
  );
}
