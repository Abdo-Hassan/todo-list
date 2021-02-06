import TodosContainer from './components/TodosContainer';
// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// main style
import './App.css';
import TodoContextProvider from './context/TodoContext';

function App() {
  return (
    <TodoContextProvider>
      <div className='App'>
        <TodosContainer />
      </div>
    </TodoContextProvider>
  );
}

export default App;
