import React, { useState, useEffect } from 'react';

function Hooks() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  var [mystate, setMystate] = useState([{ text: 'Learn Hooks' }]);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    
  });

  return (
    <main role="main" className="container">
    <div>
      <p>You clicked {count} times</p>
      <p> {mystate[0].text} {mystate[0].more}</p>
      <button onClick={() => setMystate([{text:"new text", more:" more text"}])}>
        Click me
      </button>
    </div>
    </main>
  );
}


export default Hooks;