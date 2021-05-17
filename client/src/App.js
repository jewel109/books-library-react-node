import { Button, ChakraProvider, Container, HStack } from '@chakra-ui/react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import {BrowserRouter,Link, Route, Switch} from 'react-router-dom'
import SignIn from './components/SignIn';
import Todolist from './components/Todolist';
import LogOut from './components/LogOut';


function App() {
	return (
		<BrowserRouter>
			<ChakraProvider>
				<Container
						maxW='sm'
						bgColor='pink.100'
						padding='4'
						borderRadius='sm'
				mt='5'>
					<Header/>
					<Switch>
						<Route exact path='/'>
							<HomePage />
						</Route>
						<Route path='/sign-in'>
							<SignIn />
						</Route>
						<Route path="/todolist" component={Todolist} />
						<Route path="/log-out" component={LogOut} />
					</Switch>
				</Container>
			</ChakraProvider>
		</BrowserRouter>
	);
}

export default App;
