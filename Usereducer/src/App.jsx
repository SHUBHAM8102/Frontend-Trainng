// import React, { useReducer } from 'react';
// import {reducer} from './Reducer';

// const App = () => {

//   let[state,dispatch] = useReducer(reducer,{count:0});

//   return (
//     <div>
//       <h2>App component</h2>
//       <h1>{state.count}</h1>
//       <button onClick={() => dispatch({type:'INCREMENT'})}>+</button>
//       <button onClick={() => dispatch({type:'DECREMENT'})}>-</button>
//     </div>
//   );
// }

// export default App;



import React, { useState } from "react";
import "./index.css";

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    email: "leanne@gmail.com",
    phone: "9876543210",
    city: "Delhi",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Ervin Howell",
    email: "ervin@gmail.com",
    phone: "9876543211",
    city: "Mumbai",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    phone: "9876543212",
    city: "Pune",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    email: "patricia@gmail.com",
    phone: "9876543213",
    city: "Jaipur",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    email: "chelsey@gmail.com",
    phone: "9876543214",
    city: "Bangalore",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 6,
    name: "Dennis Schulist",
    email: "dennis@gmail.com",
    phone: "9876543215",
    city: "Chandigarh",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

function App() {
  const [page, setPage] = useState("dashboard");
  const [selectedUser, setSelectedUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setPage("userDetails");
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen flex bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
        
        {/* Sidebar */}
        <div className="w-60 bg-gray-800 text-white p-5">
          <h1 className="text-3xl font-bold mb-8">My App</h1>

          <button
            onClick={() => setPage("dashboard")}
            className="w-full text-left p-3 rounded mb-2 hover:bg-gray-700"
          >
            Dashboard
          </button>

          <button
            onClick={() => setPage("users")}
            className="w-full text-left p-3 rounded mb-2 hover:bg-gray-700"
          >
            Users
          </button>

          <button
            onClick={() => setPage("setting")}
            className="w-full text-left p-3 rounded mb-2 hover:bg-gray-700"
          >
            Setting
          </button>
        </div>

        {/* Main */}
        <div className="flex-1 p-6">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              {page === "dashboard" && "Dashboard"}
              {page === "users" && "Users"}
              {page === "setting" && "Setting"}
              {page === "userDetails" && "User Details"}
            </h2>

            <div className="flex items-center gap-3">
              <span>Hello, Shubham</span>
              <img
                src="https://randomuser.me/api/portraits/men/10.jpg"
                alt="profile"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>

          {/* Dashboard Page */}
          {page === "dashboard" && (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Welcome</h3>
              <p>This is a simple dashboard project.</p>
            </div>
          )}

          {/* Users Page */}
          {page === "users" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {users.map((user) => (
                <div
                  key={user.id}
                  onClick={() => handleUserClick(user)}
                  className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-6 rounded-lg shadow text-center cursor-pointer hover:scale-105 duration-200"
                >
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-20 h-20 rounded-full mx-auto mb-3"
                  />
                  <h3 className="font-bold text-lg">{user.name}</h3>
                  <p className="text-gray-500 dark:text-gray-300 text-sm">
                    {user.email}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Single User Details Page */}
          {page === "userDetails" && selectedUser && (
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow max-w-md">
              <img
                src={selectedUser.image}
                alt={selectedUser.name}
                className="w-28 h-28 rounded-full mb-4"
              />

              <h3 className="text-2xl font-bold mb-3">
                {selectedUser.name}
              </h3>

              <p>
                <b>Email:</b> {selectedUser.email}
              </p>
              <p>
                <b>Phone:</b> {selectedUser.phone}
              </p>
              <p>
                <b>City:</b> {selectedUser.city}
              </p>

              <button
                onClick={() => setPage("users")}
                className="mt-5 bg-blue-600 text-white px-5 py-2 rounded"
              >
                Back to Users
              </button>
            </div>
          )}

          {/* Setting Page */}
          {page === "setting" && (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow max-w-md">
              <h3 className="text-xl font-bold mb-4">Theme Setting</h3>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded"
              >
                Change to {darkMode ? "Light" : "Dark"} Mode
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;