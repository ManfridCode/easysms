import React,{useContext} from 'react';
import './UserItem.css';
import {DataContext} from './DataLayer';

const UserItem = ({user})=>{

    const {activeUser,setActiveUser} = useContext(DataContext);

    const handleSelectUser = ()=>{
        if(activeUser!==user) setActiveUser(user);
    }
console.log(activeUser,user);
    return (
        <li 
            className={activeUser===user?"user-list--item user-list--item_active":"user-list--item"}
            onClick={handleSelectUser}
        >
            {user.name}
        </li>
    );
};

export default UserItem;