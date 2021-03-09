// This is the chat log in form, trying to work with Tim's auth0

import {useState} from 'react';
import axios from 'axios';
 
const LogInForm = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const authObject = {'Project-ID':"d2aae693-c3d3-4f9b-a786-94417a988839", 'User-Name':username, 'User-Secret':password}

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});

            localStorage.setItem('username',username);
            localStorage.setItem('password',password);

            window.location.reload();

        }
        catch (error){
            setError('Incorrect username or password')
        }
    }

    return (
        <div className = "wrapper">
            <div className = "form">
                <h1 className = "title">For Chat</h1>
                <form onSubmit = {handleSubmit}>
                    <input type = "text" value = "username" onChange = {(e) => setUserName(e.target.value)} className = "input" placeholder = "Username" required />
                    <input type = "password" value = "password" onChange = {(e) => setPassword(e.target.value)} className = "input" placeholder = "Password" required />
                    
                    <div align = "center">
                        <button type = "submit" className = "button">
                            <span>Start Your Conversation</span>
                        </button>
                    </div>

                    <h2 className="error">{error}</h2>
                </form>


            </div>
        </div>
    );
}

export default LogInForm;