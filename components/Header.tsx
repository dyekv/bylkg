import React from 'react'
import { Box, Button, Flex, Spacer, Center } from '@chakra-ui/react'
import Link from 'next/link'

const Header = (): JSX.Element => {
    return (
        <Box boxShadow="md">
            <Center>
                <Flex width={720} height="16" justifyContent="center" alignItems="center">
                    <Box>krevy's Base</Box>
                    <Spacer />
                    <Box>
                        <Link href='/'>
                        <Button variant="link" mr="8">
                            Blog
                        </Button>
                        </Link>
                        <Link href='/profile'>
                        <Button variant="link" mr="8">
                            Profile
                        </Button>
                        </Link>
                        <Link href='/portfolio'>
                        <Button variant="link" mr="8">
                            Portfolio
                        </Button>
                        </Link>
                        {/* <Link href='/contact'>
                        <Button variant="link">Contact</Button>
                        </Link> */}
                    </Box>
                </Flex>
            </Center>
        </Box>
    )
}

export default Header
