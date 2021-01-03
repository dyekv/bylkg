import React from 'react'
import Head from 'next/head'
import styles from '../styles/Articles.module.scss'
import Header from './Header'
import Footer from './Footer'

type Props = {
    title?: string
}

const Layout: React.FC<Props> = (props) => {
    const { children, title } = props
    const blogtitle = "krevy's blog"
    return (
        <div className="page">
            <Head>
                <title>{title ? title + ' | ' + blogtitle : blogtitle}</title>
                <link rel="icon" href="favicon.ico" />
            </Head>
            <header>
                <Header />
            </header>
            <main className={styles.main}>{children}</main>
            <footer><Footer/></footer>
        </div>
    )
}

export default Layout
