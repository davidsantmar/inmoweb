import AddUsers from "./AddUsers";
import UserItem from "./UserItem";
import EmptyUsersList from "./EmptyUsersList";
import firebase from "firebase/compat/app";
import { useState } from "react";


function UsersList() {
  const grantedEmails = firebase.firestore().collection('users_admin');
  const [dataCollection, setDataCollection] = useState([]);

  function getDatos(){
    grantedEmails
    .get()
    .then((results) => {
      const data = results.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDataCollection(data);
      console.log(data[0].user); 
      return data;
    });
  }
  
  
  return (
    <>
      <h1>Users List</h1>
      <AddUsers />  
      </>
  );
}

export default UsersList;

/*{getDatos() && getDatos().length > 0 ? (
  <div>
    <ol>
      {getDatos()?.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ol>
  </div>
) : (
  <EmptyUsersList />
)}*/
