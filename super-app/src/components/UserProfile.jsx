// import useStore from "../store/useStore";
// import "./UserProfile.css";

// function UserProfile() {

//   const { user } = useStore();

//   return (

//     <div className="widget profile-widget">

//       <h2>{user.name}</h2>

//       <p>@{user.username}</p>

//       <p>{user.email}</p>

//       <p>{user.mobile}</p>

//     </div>

//   );

// }

// export default UserProfile;
import useStore from "../store/useStore";
import "./UserProfile.css";

function UserProfile() {

  const { user } = useStore();

  return (

    <div className="widget profile-widget">

      <img
        src="https://i.pravatar.cc/100"
        alt="profile"
        className="profile-image"
      />

      <div>

        <h2>{user.name}</h2>

        <p>{user.email}</p>

        <p>{user.mobile}</p>

      </div>

    </div>

  );
}

export default UserProfile;