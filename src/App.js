// import logo from './media/book.webp';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Header, Book, Footer} from './components/sections/index'
import './sass/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
	  <Provider store={store}>
	  <Header />
	  <Book />
	  <Footer /> 
	  </Provider>
      </header>
    </div>
  );
}

export default App;
