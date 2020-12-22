import React,{useState,useEffect} from 'react';

export const DataContext = React.createContext();

const DataLayer = ({children})=>{

    const [users,setUsers] = useState(null);
    const [activeUser,setActiveUser] = useState(null);
    const [userPosts,setUserPosts] = useState(null);

    useEffect(()=>{
        setTimeout(async ()=>{
            try{
                const query = await fetch('https://jsonplaceholder.typicode.com/users')
                const users = await query.json();
                setUsers(users);
                if(users.length>0 && activeUser == null) setActiveUser(users[0]);
            }
            catch(e){
                alert("что то пошло не так " + e);
            }

        },1000);
    },[]);

    useEffect(()=>{
        setUserPosts(null);
        if(activeUser){
            setTimeout(async ()=>{
                try{
                    const query = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${activeUser.id}`)
                    const posts = await query.json();
                    setUserPosts(posts);
                }
                catch(e){
                    alert("что то пошло не так " + e);
                }
            },1000);
        }
    },[activeUser]);

    return (
        <DataContext.Provider value={{
            users,
            activeUser,
            setActiveUser,
            userPosts
        }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataLayer;
