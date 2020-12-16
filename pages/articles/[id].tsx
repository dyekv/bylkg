import {BlogData} from '../../utils/types'
import {format} from 'date-fns'
import {GetStaticProps} from 'next'
import styles from '../../styles/Articles.module.scss'

type props = {
    blog:BlogData
}

export default function BlogId({ blog }:props) {
    return (
      <main className={styles.main}>
        <h1 className={styles.title}>{blog.title}</h1>
        <p className={styles.publishedAt}>{format(new Date(blog.publishedAt),'yyyy-MM-dd')}</p>
        <div
        className={styles.post}
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
      </main>
    );
  }
  
  // 静的生成のためのパスを指定します
  export const getStaticPaths = async () => {
    const key = {
      headers: {'X-API-KEY': process.env.MICROCMS_API_KEY || ''},
    };
    const data = await fetch('https://bylkg.microcms.io/api/v1/articles', key)
      .then(res => res.json())
      .catch(() => null);
      console.log('data >> ',data)
    const paths = data.contents.map((content:BlogData) => `/articles/${content.id}`);
    return {paths, fallback: false};
  };
  
  // データをテンプレートに受け渡す部分の処理を記述します
  export const getStaticProps:GetStaticProps = async (context) => {
    if(context.params === undefined){return {props:{blog:undefined}}}
    const id = context.params.id;
    const key = {
      headers: {'X-API-KEY': process.env.MICROCMS_API_KEY || ''},
    };
    const data:BlogData = await fetch(
      'https://bylkg.microcms.io/api/v1/articles/' + id,
      key,
    )
      .then(res => res.json())
      .catch(() => null);
    return {
      props: {
        blog: data,
      },
    };
  };