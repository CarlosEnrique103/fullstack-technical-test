import { NavLink } from 'react-router-dom';
import styles from './Login.module.css';

const LoginPage = () => (
  <div className={styles.login}>
    <h1>Login</h1>

    <NavLink to="/register">Registrate</NavLink>
  </div>
);

export default LoginPage;
