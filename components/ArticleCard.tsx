import React from 'react'
import {Box,Grid,GridItem} from '@chakra-ui/react'
import Link from 'next/link'
import { BlogData } from '@mytype'
import {format} from 'date-fns'

interface props {
    blog: BlogData
}

const ArticleCard = ({blog}:props) => {
    const viewDate = format(blog.date ? new Date(blog.date) : new Date(blog.publishedAt),'yyyy年MM月dd日')
    const defaultImage = 'https://images.microcms-assets.io/protected/ap-northeast-1:a935cfa4-1e49-4380-a288-1b74184e2530/service/bylkg/media/photo-1507031774658-589130daf90c.jpeg'
    return(
        <Link href={'articles/' + blog.id}>
            <Box boxShadow="md" margin='10' padding='2' bgColor="white">
                <Grid templateColumns="repeat(3, 1fr)">
                    <GridItem>
                        <img src={blog.image ?blog.image.url: defaultImage} style={{width:200}}/>
                    </GridItem>
                    <GridItem colSpan={2} margin='10'>
                        <Box style={{fontSize:20,fontWeight:700}}>{blog.title}</Box>
                        <Box>{viewDate}</Box>
                    </GridItem>
                </Grid>
            </Box>
        </Link>
    )
}

export default ArticleCard