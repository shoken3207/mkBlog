import styles from '../../page.module.css';
import { Content, SpearlyApiClient } from '@spearly/sdk-js';

const apiClient = new SpearlyApiClient(process.env.API_KEY as string);

export default async function Page({ params }: { params: { id: string } }) {
  const content = await apiClient.getContent('sample-post', params.id);
  const values = content.values as any;

  return (
    <main className={styles.main}>
      <article>
        <h1>{values.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: `${values.body}`,
          }}
        />
      </article>
    </main>
  );
}

export const generateStaticParams = async () => {
  const contents = await apiClient.getList('sample-post');

  return contents.data.map((column) => {
    return {
      id: column.attributes.publicUid,
    };
  });
};
