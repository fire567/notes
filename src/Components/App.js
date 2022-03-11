import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content-form'>
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
