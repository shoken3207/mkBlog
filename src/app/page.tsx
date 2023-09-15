import styles from './page.module.css';
import { Content, SpearlyApiClient } from '@spearly/sdk-js';
import Link from 'next/link';

const apiClient = new SpearlyApiClient(process.env.API_KEY as string);

export default async function Home() {
  const contents = await apiClient.getList('sample-post');

  return (
    <main className={styles.main}>
      <article>
        <ul>
          {contents.data.map((content: Content) => {
            const values = content.values as any;
            const path = `/blog/${content.attributes.publicUid}`;

            return (
              <li className={styles.articleList} key={content.id}>
                <Link href={path}>{values.title}</Link>
              </li>
            );
          })}
        </ul>
      </article>
    </main>
  );
}
