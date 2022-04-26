import Dropdown from './components/dropdown';
import Tab from './components/tab';
import './scss/style.scss';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/main-page';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/mission/*">
          <Route path="dropdown" element={<Dropdown />} />
          <Route path="tab" element={<Tab />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
