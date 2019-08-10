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
		a higher-order component is a function that takes a component and returns a new component. (Dynamic Creation)
4. Fragments :
			Fragments let you group a list of children without adding extra nodes to the DOM.
			<Fragments>

			</Fragments>
			OR <></>
5. Forwarding Refs : 
			Ref forwarding is a technique for automatically passing a ref through a component to one of its children.
			React.forwardRef((props, ref) => {(

			)}

6. Context : 
		Context provides a way to pass data through the component tree without having to pass props down manually at every level.

		const ThemeContext = React.createContext('light');

	<ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>

      static contextType = ThemeContext;

7.  React.lazy(()=>  import('./OtherComponent')) :
		Dynamically import when required.

		Suspense is used during lazy loading to show fallback while we’re waiting for it to load.
		const OtherComponent = React.lazy(() => import('./OtherComponent'));

		function MyComponent() {
		  return (
		    <div>
		      <Suspense fallback={<div>Loading...</div>}>
		        <OtherComponent />
		      </Suspense>
		    </div>
		  );
		}