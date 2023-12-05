import { Link } from 'react-router-dom';
import styles from './footer.module.css';
import { useDataContext } from '../../src/dataContext';
import { faHouse, faMagnifyingGlass, faList12, faDiceSix, faWineBottle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  const { mode, handleAppMode } = useDataContext();

  function handleClickLink(ev) {
    // nested 되기 때문에 pathname 속성을 존재하는 Link 컴포넌트를 포인팅하기 위해
    const pathname = ev.currentTarget.pathname;
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
            <FontAwesomeIcon icon={faHouse} size='2x' />
          </Link>
        </button>

        <button>
          <Link to='/random' onClick={handleClickLink}>
            <FontAwesomeIcon icon={faDiceSix} size='2x' />
          </Link>
        </button>
        <button>
          <Link to='/searchName' onClick={handleClickLink}>
            <FontAwesomeIcon icon={faMagnifyingGlass} size='2x' />
          </Link>
        </button>
        <button>
          <Link to='/category' onClick={handleClickLink}>
            <FontAwesomeIcon icon={faList12} size='2x' />
          </Link>
        </button>
        <button>
          <Link to='/ingredient' onClick={handleClickLink}>
            <FontAwesomeIcon icon={faWineBottle} size='2x' />
          </Link>
        </button>
      </div>
    </div>
  );
}
