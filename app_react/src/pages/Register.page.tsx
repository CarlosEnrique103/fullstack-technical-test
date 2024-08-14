import { RegisterForm } from '@/components/RegisterForm';
import styles from './Register.module.css';

const RegisterPage = () => (
  <div className={styles.register}>
    <RegisterForm />
  </div>
);

export default RegisterPage;
