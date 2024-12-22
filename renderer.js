const { useEffect } = React;
const { createRoot } = ReactDOM;

const Editor = () => {
  useEffect(() => {
    console.log('Loading Monaco Editor...');
    require.config({ paths: { 'vs': 'vs' } }); // Adjust path for local Monaco Editor
    require(['vs/editor/editor.main'], function () {
      console.log('Monaco Editor loaded');
      monaco.editor.create(document.getElementById('editor'), {
        value: '// Start coding...',
        language: 'go'
      });
      console.log('Monaco Editor instance created');
    });
  }, []);

  return React.createElement('div', { id: 'editor', style: { height: '100vh', width: '100%' } });
};

const App = () => {
  return React.createElement('div', null, React.createElement(Editor));
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(React.createElement(App));

console.log('Renderer process started');
