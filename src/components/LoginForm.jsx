import { useState } from "react";
import axios from "axios";

const LoginForm = ()=> {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "6a0966c8-c0d6-4f5c-b188-fefb218c8e01", 'User-Name': username, 'User-Secret': password };

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();
            setError('');

        } catch (error) {
            setError("Oops!! Invalid credentials!!")
        }

    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">MoodLifter</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="password" required />
                    <div align='center'>
                        <button className="button" type="submit">
                            <span>Start Chatting</span>
                        </button>
                    </div> 
                    <h3 className="error">{error}</h3>
                </form>
            </div>
        </div>

    );
}    

export default LoginForm;