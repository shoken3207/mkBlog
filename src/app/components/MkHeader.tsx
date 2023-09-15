import styles from '@/app/page.module.css';
import Link from 'next/link';

export const MkHeader = () => {
  console.log('MkHeader');

  return (
    <header className={styles.header}>
      <Link href='/'>
        <p>Next.js ミートアップ【鹿児島.mk】 サンプルブログ</p>
      </Link>
    </header>
  );
};
