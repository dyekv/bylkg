import Link from "next/link";
import { BlogData } from "@mytype";

interface props {
  blog: BlogData[];
}

export default function Home({ blog }: props) {
  return (
    <div>
      {blog.map((blog) => (
        <ul key={blog.id}>
          <li>
            <Link href={`articles/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.MICROCMS_API_KEY || "" },
  };
  const data = await fetch("https://bylkg.microcms.io/api/v1/articles", key)
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data.contents,
    },
  };
};
