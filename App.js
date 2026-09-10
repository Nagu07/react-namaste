// This will render react element object
const heading = React.createElement('h1', {id:'heading'}, 'Hello world from React');
const root = ReactDOM.createRoot(document.getElementById('root'));

// Converts react object to tag
root.render(heading);