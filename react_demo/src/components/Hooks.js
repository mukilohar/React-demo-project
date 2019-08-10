import React, { useState, useEffect } from 'react';

function Hooks() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  var [mystate, setMystate] = useState([{ text: 'Learn Hooks' }]);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  const ref = React.createRef();
  return (
    <main role="main" className="container">
     
    <FancyButton ref={ref}>Fancy Button!</FancyButton>;
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

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:



export default Hooks;