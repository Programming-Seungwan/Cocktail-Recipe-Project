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
            홈
          </Link>
        </button>
        <button>
          <Link to='/random' onClick={handleClickLink}>
            랜덤
          </Link>
        </button>
        <button>
          <Link to='/searchName' onClick={handleClickLink}>
            이름으로 칵테일 검색
          </Link>
        </button>
        <button>
          <Link to='/category' onClick={handleClickLink}>
            카테고리별
          </Link>
        </button>
        <button>
          <Link to='/ingredient' onClick={handleClickLink}>
            재료별
          </Link>
        </button>
      </div>
    </div>
  );
}
