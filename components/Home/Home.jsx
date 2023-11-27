import { useDataContext } from '../../src/dataContext';
import styles from './home.module.css';
export default function Home() {
  const { mode, handleAppMode } = useDataContext();
  console.log(mode);
  console.log(handleAppMode);

  return <div className={styles.homeComponentContainer}>This is Home Component!</div>;
}
