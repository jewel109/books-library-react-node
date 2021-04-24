import { Button } from '@chakra-ui/button'
import { Container, Flex, VStack } from '@chakra-ui/layout'
import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <Flex flexDirection="column" >
            <Button mb="2" fontWeight="bold">
                <Link to="/sign-in">Sign In</Link>
            </Button>
            <Button fontWeight="bold"><Link to="/log-out">Log Out</Link></Button>
        </Flex>
    )
}

export default HomePage
