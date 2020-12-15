import {BlogData} from '../../utils/types'
import {format} from 'date-fns'

type props = {
    blog:BlogData
}

export default function BlogId({ blog }:props) {
    return (
      <main>
        <h1>{blog.title}</h1>
        <p>{format(new Date(blog.publishedAt),'yyyy-MM-dd')}</p>
        <div
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
  export const getStaticProps = async (context:any) => {
      console.log('context >> ',context)
    const id = context.params.id;
    const key = {
      headers: {'X-API-KEY': process.env.MICROCMS_API_KEY || ''},
    };
    const data = await fetch(
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