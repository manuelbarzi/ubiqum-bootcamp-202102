import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import homeIcon from './homeIcon.png';

export default function CreateAccount() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [picture, setPicture] = useState('');

    return (
        <div>
            <form onSubmit={e => {e.preventDefault();console.log(email, password, picture)}}>
                <label className='mr-5'>
                    e-mail:
                    <input required type="text" name="email" onChange={e => setEmail(e.target.value)}/>
                </label>
                <label className='password'>
                    password:
                    <input required type="password" name="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <label>
                    picture:
                    <input type="text" name="picture" onChange={e => setPicture(e.target.value)}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
            <div>
                <Link to='/'><img className='homeI' src={homeIcon} alt="HomeIcon" /></Link>
            </div>
        </div>
    )
}

