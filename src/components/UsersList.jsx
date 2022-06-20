import AddUsers from "./AddUsers";
import UserItem from "./UserItem";
import EmptyUsersList from "./EmptyUsersList";
import firebase from "firebase/compat/app";


function UsersList() {
  const grantedEmails = firebase.firestore().collection('users_admin');

  function getDatos(){
    grantedEmails
    .get()
    .then((results) => {
      const data = results.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(data); 
    });
  }
  
  
  return (
    <>
      <h1>Users List</h1>
      <AddUsers />
      {getDatos()}
      
      {getDatos() && getDatos().length > 0 ? (
        <div>
          <ol>
            {getDatos()?.map((user) => (
              <UserItem key={user.id} user={user} />
            ))}
          </ol>
        </div>
      ) : (
        <EmptyUsersList />
      )}
    </>
  );
}

export default UsersList;
