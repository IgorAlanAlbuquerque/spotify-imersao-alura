import './App.css';
import Header from './component/Header/Header';
import Sidebar from './component/Sidebar/Sidebar';
import Main from './component/Main/Main';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div>
      <Sidebar/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
