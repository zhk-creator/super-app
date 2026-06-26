// import UserProfile from "../components/UserProfile";
// import WeatherWidget from "../components/WeatherWidget";
// import NotesWidget from "../components/NotesWidget";
// import TimerWidget from "../components/TimerWidget";
// import NewsWidget from "../components/NewsWidget";
// import "./Dashboard.css";

// function Dashboard() {
//   return (
//     <div className="dashboard">

//       <div className="dashboard-left">

//         <div className="top-row">
//           <UserProfile />
//           <WeatherWidget />
//         </div>

//         <div className="middle-row">
//           <NotesWidget />
//           <TimerWidget />
//         </div>

//       </div>

//       <div className="dashboard-right">
//         <NewsWidget />
//       </div>

//     </div>
//   );
// }

// export default Dashboard;
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import UserProfile from "../components/UserProfile";
import WeatherWidget from "../components/WeatherWidget";
import NotesWidget from "../components/NotesWidget";
import TimerWidget from "../components/TimerWidget";
import NewsWidget from "../components/NewsWidget";

import "./Dashboard.css";

function Dashboard() {

  const navigate = useNavigate();

  return (
    <div className="dashboard">

      <div className="dashboard-left">

        <div className="top-row">
          <UserProfile />
          <WeatherWidget />
        </div>

        <div className="middle-row">
          <NotesWidget />
          <TimerWidget />
        </div>

        <button
          className="browse-btn"
          onClick={() => navigate("/movies")}
        >
          Browse Movies
        </button>

      </div>

      <div className="dashboard-right">
        <NewsWidget />
      </div>

    </div>
  );
}

export default Dashboard;