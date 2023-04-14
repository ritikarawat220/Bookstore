import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import { CgProfile } from 'react-icons/cg'; // eslint-disable-line
import BookList from './components/BookList';

function App() {
  return (
    <div className="root">

      <div className="App">
        <nav className="navigation">
          <div className="nav-left">
            <div className="logo">
              BookStore CMS
            </div>
            <ul className="menu">
              <li className="active">
                <Link to="/">Books</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
            </ul>
          </div>
          <div className="nav-right">
            <CgProfile size={30} />
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
