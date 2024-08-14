import styles from './NotFound.module.css';

const NotFoundPage = () => {
  console.log({ styles });

  return (
    <div className={styles.NotFound}>
      <h1>Oops... There is nothing here.</h1>
    </div>
  );
};

export default NotFoundPage;
