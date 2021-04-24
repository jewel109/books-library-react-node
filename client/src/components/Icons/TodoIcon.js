import React from 'react'
import {FaTasks} from 'react-icons/fa'
import { Tooltip } from '@chakra-ui/tooltip'
import { Box } from '@chakra-ui/layout'
const TodoIcon = () => {
    return (
        <Tooltip hasArrow label="Todolist" placement="right">
            <Box w="15" h="15" cursor="pointer" >
                <FaTasks/>
            </Box>
        </Tooltip>
    )   
}

export default TodoIcon
