
const UserStatus = () => {

    const loggedIn=true;
    const isAdmin=true;

  return (
    <div>
        {loggedIn && isAdmin?"Welcome Admin":""}
        {loggedIn && !isAdmin?"Welcome User":""}

    </div>
  )
}

export default UserStatus