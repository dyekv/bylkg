import React from 'react'
import { Box, Button, Flex, Spacer, Center } from '@chakra-ui/react'

const Header = (): JSX.Element => {
    return (
        <Box boxShadow="md">
            <Center>
                <Flex width={720} height="16" justifyContent="center" alignItems="center">
                    <Box>krevy's Base</Box>
                    <Spacer />
                    <Box>
                        <Button variant="link" mr="8">
                            Blog
                        </Button>
                        <Button variant="link" mr="8">
                            Profile
                        </Button>
                        <Button variant="link" mr="8">
                            Portfolio
                        </Button>
                        <Button variant="link">Contact</Button>
                    </Box>
                </Flex>
            </Center>
        </Box>
    )
}

export default Header
