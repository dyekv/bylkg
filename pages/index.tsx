import { BlogData } from '@mytype'
import Layout from '@components/Layout'
import ArticleCard from '@components/ArticleCard'
import { useEffect } from 'react'

interface props {
    blog: BlogData[]
}

const Home = ({ blog }: props) => {
    useEffect(()=>{
        console.log(blog)
    },[])
    return (
        <Layout>
            {blog.map((blog) => (
                <ArticleCard blog={blog} key={blog.id}/>
            ))}
        </Layout>
    )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
    const key = {
        headers: { 'X-API-KEY': process.env.MICROCMS_API_KEY || '' }
    }
    const data = await fetch('https://bylkg.microcms.io/api/v1/articles', key)
        .then((res) => res.json())
        .catch(() => null)
    return {
        props: {
            blog: data.contents
        }
    }
}

export default Home
