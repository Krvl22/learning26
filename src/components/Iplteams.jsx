// import React from "react";
// import "./Iplteams.css";

// export const Iplteams = () => {

//   const teams = [
//     { id: 1, name: "Chennai Super Kings", color: "yellow" },
//     { id: 2, name: "Mumbai Indians", color: "blue" },
//     { id: 3, name: "Royal Challengers Bangalore", color: "red" },
//     { id: 4, name: "Rajasthan Royals", color: "pink" },
//     { id: 5, name: "Gujarat Titans", color: "darkblue" },
//     { id: 6, name: "Lucknow Super Giants", color: "skyblue" },
//     { id: 7, name: "Kolkata Knight Riders", color: "purple" },
//     { id: 8, name: "Punjab Kings", color: "crimson" },
//     { id: 9, name: "Sunrisers Hyderabad", color: "orange" },
//     { id: 10, name: "Delhi Capitals", color: "dodgerblue" }
//   ];

//   return (
//     <div>
//       <h1 style={{ textAlign: "center" }}>IPL Teams</h1>

//       <table
//         border="1"
//         cellPadding="10"
//         cellSpacing="0"
//         style={{
//           width: "100%",
//           borderCollapse: "collapse",
//           textAlign: "center",
//         }}
//       >
//         <thead style={{ backgroundColor: "#343a40", color: "white" }}>
//           <tr>
//             <th>ID</th>
//             <th>Team Name</th>
//           </tr>
//         </thead>

//         <tbody>
//           {teams.map((team) => (
//             <tr
//               key={team.id}
//               style={{
//                 backgroundColor: team.color,
//                 color: team.color === "yellow" ? "black" : "white",
//                 fontWeight: "bold",
//               }}
//             >
//               <td>{team.id}</td>
//               <td>{team.name}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };


import React from "react";
import "../assets/css/Iplteams.css";
import { Link } from "react-router-dom";

export const Iplteams = () => {

  const teams = [
    { id: 1, name: "Chennai Super Kings", color: "yellow" },
    { id: 2, name: "Mumbai Indians", color: "blue" },
    { id: 3, name: "Royal Challengers Bangalore", color: "red" },
    { id: 4, name: "Rajasthan Royals", color: "pink" },
    { id: 5, name: "Gujarat Titans", color: "darkblue" },
    { id: 6, name: "Lucknow Super Giants", color: "skyblue" },
    { id: 7, name: "Kolkata Knight Riders", color: "purple" },
    { id: 8, name: "Punjab Kings", color: "crimson" },
    { id: 9, name: "Sunrisers Hyderabad", color: "orange" },
    { id: 10, name: "Delhi Capitals", color: "dodgerblue" }
  ];

  const lightColors = ["yellow", "orange", "pink", "skyblue"];

  return (
    <div>
      <h1 className="ipl-title">IPL Teams</h1>

      <table className="ipl-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Team Name</th>
          </tr>
        </thead>

        <tbody>
            {teams.map((team) => (
                <tr
                key={team.id}
                style={{
                    backgroundColor: team.color,
                    color: lightColors.includes(team.color) ? "black" : "white",
                    fontWeight: "bold",
                    cursor: "pointer",
                }}>
                <td>{team.id}</td>

                <td>
                    <Link
                    to={`/team/${team.name}`}
                    style={{
                        color: "inherit",
                        textDecoration: "none",
                    }}
                    >
                    {team.name}
                    </Link>
                </td>
                </tr>
            ))}
        </tbody>

      </table>
    </div>
  );
};
