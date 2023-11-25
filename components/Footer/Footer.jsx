import { Link } from 'react-router-dom';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerNavBarLinkContainer}>
        <button>
          <Link to='/random'>랜덤</Link>
        </button>
        <button>
          <Link to='/category'>카테고리별</Link>
        </button>
        <button>
          <Link to='/ingredient'>재료별</Link>
        </button>
      </div>
    </div>
  );
}
