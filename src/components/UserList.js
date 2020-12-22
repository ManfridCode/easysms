import React,{useContext} from 'react';
import UserItem from './UserItem';
import {DataContext} from './DataLayer';
import Preloader from './Preloader';
import './UserList.css';

const UserList = ()=>{
    const {users} = useContext(DataContext);
    if(users === null) return <Preloader/>
    return (
        <ul className="user-list">
            {users.map(el=><UserItem key={el.id} user={el}/>)}
        </ul>
    )
};

export default UserList;