import { Button, ChakraProvider, Container, HStack } from '@chakra-ui/react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import {BrowserRouter,Link, Route, Switch} from 'react-router-dom'
import SignIn from './components/SignIn';
import Todolist from './components/Todolist';
import LogOut from './components/LogOut';
import StartedPage from './pages/StartedPage';


function App() {
	return (
		<BrowserRouter>
			<ChakraProvider>
				<StartedPage/>
			</ChakraProvider>
		</BrowserRouter>
	);
}

export default App;
