import { Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import { Link } from 'react-router-dom'
import TodoIcon from './Icons/TodoIcon'

const Header = () => {
    return (
        <Flex mb="7" justifyContent="space-between">
            <Text
                cursor="pointer"
                fontWeight="bold"
                fontSize="xl"
            >
                <Link to="/">TodoList</Link>
            </Text>
            <Link to="/todolist" >
                <TodoIcon/>
            </Link>
        </Flex>
    )
}

export default Header
