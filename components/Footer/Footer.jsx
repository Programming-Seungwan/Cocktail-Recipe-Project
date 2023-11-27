import { Link } from 'react-router-dom';
import styles from './footer.module.css';
import { useDataContext } from '../../src/dataContext';

export default function Footer() {
  const { mode, handleAppMode } = useDataContext();

  function handleClickLink(ev) {
    const pathname = ev.target.pathname;
    if (pathname === '/category') handleAppMode('category');
    else if (pathname === '/random') handleAppMode('random');
    else if (pathname === '/ingredient') handleAppMode('ingredient');
    else if (pathname === '/home') handleAppMode('home');
    else if (pathname === '/searchName') handleAppMode('searchName');
  }

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerNavBarLinkContainer}>
        <button>
          <Link to='/home' onClick={handleClickLink}>
            To Home
          </Link>
        </button>
        <button>
          <Link to='/random' onClick={handleClickLink}>
            By Random
          </Link>
        </button>
        <button>
          <Link to='/searchName' onClick={handleClickLink}>
            By name
          </Link>
        </button>
        <button>
          <Link to='/category' onClick={handleClickLink}>
            By Category
          </Link>
        </button>
        <button>
          <Link to='/ingredient' onClick={handleClickLink}>
            By Ingredient
          </Link>
        </button>
      </div>
    </div>
  );
}
