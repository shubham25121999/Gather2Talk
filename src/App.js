import { ChatEngine } from 'react-chat-engine'
import './App.css'

import ChatFeed from './components/ChatFeed.jsx'
import LoginForm from './components/LoginForm.jsx'

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return(
        <ChatEngine
            height = "100vh"
            projectID = "6a0966c8-c0d6-4f5c-b188-fefb218c8e01"
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
};

export default App;
