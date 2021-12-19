import React , { useRef , useEffect , useState } from 'react';
import { useHistory } from 'react-router';
import { ChatEngine } from 'react-chat-engine';
import { auth } from './firebase';

import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

const Chats = () =>{

    const history = useHistory();
    const { user } = useAuth();
    const [loading,setloading] =  useState(true);

    useEffect(()=>{
        if(!user) {
            history.push('/');
            return;
        }

        axios.get('https://api.chatengine.io/users/me',{
            headers:{
                "project-id": "dcaf403a-8c0d-443e-8c62-930b81b7f326",
                "user-name": user.email,
                "user-secret": user.uid,
            }
        })
        .then(()=>{
            setloading(false);
        })
        .catch(()=>{
            let formdata = new FormData();
            formdata.append('email',user.email);
            formdata.append('username',user.displayName);
            formdata.append('secret',user.uid);
        })

    },[user,history])

    const logOutUser = async () => {
        await auth.signOut();
    }

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();

        return new File([data],"userPhoto.jpg" , { type:'image/jpeg'})
    }

    return(
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    Chat Bot
                </div>
                <div onClick={logOutUser} className="logout-tab">
                    Log Out
                </div>
            </div>
            <ChatEngine
                height="calc(100vh - 66px)"
                projectId="dcaf403a-8c0d-443e-8c62-930b81b7f326"
                userName="."
                userSecret="." />
        </div>
    )
}

export default Chats;