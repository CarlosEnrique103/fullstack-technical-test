import styles from './Login.module.css';
import { LoginForm } from '@/components/LoginForm';

const LoginPage = () => (
  <div className={styles.login}>
    <LoginForm />
  </div>
);

export default LoginPage;
