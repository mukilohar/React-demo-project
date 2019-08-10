https://gist.github.com/xabikos/fcd6e709f8ae0c11e33b 

1. React State Hook : (state, setstate)
	const [age, setAge] = useState(42);
  	const [fruit, setFruit] = useState('banana');
  	const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

 2. React Effect Hook : (changes in componentDidUpdate)
 		When you call useEffect, you’re telling React to run your “effect” function after flushing changes to the DOM.

		useEffect(() => {
		// Update the document title using the browser API
		document.title = `You clicked ${count} times`;
		});

3. Higher-Order Components :
		a higher-order component is a function that takes a component and returns a new component.