import React from 'react';
import './App.css';
import PostList from './components/PostList';
import UserList from './components/UserList';
import DataLayer from './components/DataLayer';

const App = ()=>{
  return (
    <DataLayer>
      <div className="App">
          <nav className="user-block">
            <span className="user-block--title">Пользователи</span>
            <UserList/>
          </nav>
          <div className="post-block">
            <span className="post-block--title">Посты</span>
            <PostList/>
          </div>
      </div>
    </DataLayer>
  );
}

export default App;
