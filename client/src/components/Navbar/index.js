import styles from './styles.module.css';
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react';
import {useAuth} from '../../context/AuthContext';

function Navbar() {
    const {loggedIn} = useAuth();
  return (
    <nav className={styles.nav}>
        <div className={styles.left}>
            <div className={styles.logo}>
                <Link to="/">My Store</Link>
            </div>
            <ul className={styles.menu}>
                <li>
                    <Link to="/">Products</Link>
                </li>
            </ul>
        </div>
        <div className={styles.right}>
            {
                !loggedIn && (<>
                    <Link to="/signin">
                        <Button colorScheme='pink'>Login</Button>
                    </Link>
                    <Link to="/signup">
                        <Button colorScheme='pink'>Register</Button>
                    </Link>
                </>
            )}
            {
                loggedIn && <>
                    <Link to="/profile">
                        <Button>Profile</Button>
                    </Link>
                </>
            }
        </div>
    </nav>
  )
}

export default Navbar