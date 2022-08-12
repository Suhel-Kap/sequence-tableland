import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <div className={styles.mooglesM}><label className={styles.labelL}>Moog3</label></div>
      <div className={styles.actions}>
      
      </div>
    </div>
  );
}
export default Navbar