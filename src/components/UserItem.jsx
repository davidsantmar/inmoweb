import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteUser } from "../redux/actions/addUserActionCreator";

function UserItem(user) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteUser(user));
  }

  return (
    <li>
      {user.description}
      <button
        type="button"
        aria-label="Close"
        onClick={handleDelete}
      ></button>
    </li>
  );
}

UserItem.propTypes = {
  user: PropTypes.string.isRequired,
};

export default UserItem;
