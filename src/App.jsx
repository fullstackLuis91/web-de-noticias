import './App.css';
import ListNews from './components/ListNews/ListNews';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list-news" element={<ListNews />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

