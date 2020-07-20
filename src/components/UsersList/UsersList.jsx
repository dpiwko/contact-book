import React, { useState, useEffect } from 'react'
import { List, Loading } from '../../components';
import './UsersList.css';

const UsersList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchUser, setSearchUser] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  
  /**
    Get users array from api and set in state
  */
  useEffect(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
  }, []);
  
  /**
    Set filtered users without case sensitive
  */
  useEffect(() => {
    const result = users.filter((user) =>
      user.name.toLowerCase().includes(searchUser.toLowerCase()));
      
    setFilteredUsers(result);  
  }, [searchUser, users]);
  
  /**
   * Set query value from search input
   * 
   * @param {Event} e 
   */
  const handleQueryChange = (e) => {
    setSearchUser(e.target.value);
  }
  
  if (isLoading) {
    return (
      <Loading text="Loading users..." />
    );
  } else {
  
  return (
    <div className="c-usersList">
      <h1>
        Users list
      </h1>
      <input
        value={searchUser}
        onChange={handleQueryChange}
        className="c-usersList_search"
        placeholder="Search by user name..."
        autoComplete="off"
      />
      <List list={filteredUsers} />
    </div>
  );
  }
}

export default UsersList;
