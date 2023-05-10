import logo from './logo.svg';
import './App.css';
import { CustomCard } from './Card';
import { BootstrapCard } from './BootstrapCard';

function App() {
  return (
    <>
    <div className="App">
      <h1 className="bg-slate-800 p-5  text-blue-300 text-3xl mb-10 font-bold underline">Hello World</h1>
      <h1 className="bg-slate-800 p-5  text-blue-300 text-3xl font-bold underline">Hello World</h1>
      

    </div>
    <CustomCard/>
    <BootstrapCard/>
    </>
    
  );
}

export default App;
