// import logo from './media/book.webp';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from './redux/store';
import Layout from './components/layouts/menu';
import Menu from './components/sections/menu/index';
import FromAuthor from './components/sections/menu/from_author';
import HowToUse from './components/sections/menu/how_to_use';
import Saves from './components/sections/menu/saves';
import BookView from './components/sections/book/index';
import './sass/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">
      <header className="App-header">
	  <Provider store={store}>
		  <BrowserRouter>
			  <Routes>
				  <Route path="book" element={<BookView />} />
				  <Route path="/" element={<Layout />}>
					  <Route index element={<Menu />} />
					  <Route path="from-author" element={<FromAuthor />} />
					  <Route path="how-to-use" element={<HowToUse />} />
					  <Route path="saves" element={<Saves />} />
					{/*
					  <Route path="saves" element={<Saves />} />
					  <Route path="settings" element={<Settings />} />
					  <Route path="credits" element={<Credits />} />
					  <Route path="*" element={<NoPage />} />
					*/}
				  </Route>
			  </Routes>
		  </BrowserRouter>
	  </Provider>
      </header>
    </div>
  );
}

export default App;
