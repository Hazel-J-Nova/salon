import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Services from './components/Services';
import LookBook from './components/LookBook';
import Add from './components/Add';

function App() {
  return (
    <div className='container'>
      <Nav />
      <Header />
      <Services />
      <Add />
      <LookBook />
    </div>
  );
}

export default App;
