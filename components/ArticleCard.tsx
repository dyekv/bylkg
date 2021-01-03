import React from 'react'
import {Box} from '@chakra-ui/react'
import Link from 'next/link'
import { BlogData } from '@mytype'

interface props {
    blog: BlogData
}

const ArticleCard = ({blog}:props) => {
    return(
        <Link href={'articles/' + blog.id}>
            <Box boxShadow="outline" margin='20' padding='20'>
                {blog.title}
            </Box>
        </Link>
    )
}

export default ArticleCard