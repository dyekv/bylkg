import React from 'react'
import {Box} from '@chakra-ui/react'
import Link from 'next/link'
import { BlogData } from '@mytype'
import {format} from 'date-fns'

interface props {
    blog: BlogData
}

const ArticleCard = ({blog}:props) => {
    const viewDate = format(blog.date ? new Date(blog.date) : new Date(blog.publishedAt),'yyyy年MM月dd日')
    return(
        <Link href={'articles/' + blog.id}>
            <Box boxShadow="md" margin='10' padding='10' bgColor="white">
                {blog.title}
                {viewDate}
            </Box>
        </Link>
    )
}

export default ArticleCard