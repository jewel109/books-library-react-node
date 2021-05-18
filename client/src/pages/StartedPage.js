import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Box, Container, Flex, Heading, HStack, Text } from '@chakra-ui/layout'
import React from 'react'
import {  FcGoogle } from 'react-icons/fc'
import {  FaFacebook } from 'react-icons/fa'
import { Checkbox } from '@chakra-ui/checkbox'

const Startedpage = () => {
    return (
			<Flex direction='column' bgColor='red.200' minH='1000'>
				<Container
					minW='2xl'
					bgColor='white'
					borderRadius='md'
					marginTop='3'
					padding='5'>
					<Box px='4em' mt='10' pb='10'>
						<Heading as='h5' size='xl'>
							Get's started
						</Heading>
						<Text color='#4A5568'>
							Already have an account? 
							<strong style={{ color: "red", cursor: "pointer" }}> Log in</strong>
						</Text>
						<Box d='flex' pt='5' mb='3'>
							<Box
								border='1px'
								bgColor='gray.50'
								borderColor='gray.300'
								cursor='pointer'
								borderRadius='md'
								width='full'
								mr='0'
								py='2'
								d='flex'
								alignItems='center'
								justifyContent='center '>
								<FcGoogle />
								<Text ml='2' fontWeight='medium' fontSize='md' color='#4A5568'>
									sign up with google
								</Text>
							</Box>
							<Box
								border='1px'
								d='flex'
								alignItems='center'
								bgColor='blue.600'
								color='white'
								cursor='pointer'
								justifyContent='center '
								borderColor='gray.300'
								borderRadius='md'
								width='full'
								ml='2'>
								<FaFacebook />
								<Text
									ml='2'
									fontWeight='normal'
									fontSize='md'
									lineHeight='tall'>
									sign up with facebook
								</Text>
							</Box>
						</Box>
						<Box p='1'>
							<h2
								style={{
									width: "100%",
									textAlign: "center",
									lineHeight: "0.1em",
									borderBottom: "1px solid #A0AEC0",
									margin: "10px 0 20px",
								}}>
								<span
									style={{
										background: "#fff",
										color: "#4A5568",
										padding: "0 10px",
									}}>
									Or
								</span>
							</h2>
						</Box>
						<FormControl id='email' mt='-3'>
							<FormLabel mb='-1px'>
								<Text fontWeight='normal' color='#2D3748'>
									Email Address
								</Text>
							</FormLabel>
							<Input type='Email' mb='3' isInvalid />
						</FormControl>
						<FormControl id='password'>
							<FormLabel mb='-1px'>
								<Box d='flex' justifyContent='space-between'>
									<Text fontWeight='normal' color='#4A5568'>
										Password
									</Text>
									<Text color='blue.700' cursor='pointer' fontWeight='bold'>
										Forgot Password?
									</Text>
								</Box>
							</FormLabel>
							<Input type='Password' isInvalid />
						</FormControl>
						<HStack mt='3' width="full">
							<Checkbox size='sm' />
							<Text width='full' color='#4A5568'>
								I agree to platforms{" "}
								<span
									style={{
										color: "red",
										fontWeight: "bold",
										cursor: "pointer",
									}}>
									Terms of Service
								</span>{" "}
								and{" "}
								<span
									style={{
										color: "red",
										fontWeight: "bold",
										cursor: "pointer",
									}}>
									Privacy Policy
								</span>
							</Text>
						</HStack>
						<Box
							as='button'
							width='full'
							color='white'
							bgColor='red.400'
							p='2'
							borderRadius='xl'
							mt='5'>
							<Text fontWeight='medium' fontSize='xl'>
								Register
							</Text>
						</Box>
					</Box>
				</Container>
			</Flex>
		);
}

export default Startedpage;
