import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to={'/mission/dropdown'}>dropdown</Link>
          </li>
          <li>
            <Link to={'/mission/tab'}>tab</Link>
          </li>
        </ul>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}

export default MainPage;
