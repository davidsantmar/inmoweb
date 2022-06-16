import { useSelector } from "react-redux";
import AddUsers from "./AddUsers";
import UserItem from "./UserItem";
import EmptyUsersList from "./EmptyUsersList";

function UsersList() {
  const users = useSelector((state) => state.users);
  console.log(users)
  return (
    <>
      <h1>Users List</h1>
      <AddUsers />
      <UserItem />
      {users && users.length > 0 ? (
        <div>
          <ol>
            {users?.map((user) => (
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
