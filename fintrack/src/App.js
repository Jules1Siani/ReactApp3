import React, { useState } from "react";
import RegisterUser from "./components/RegisterUser";
import LoginUser from "./components/LoginUser";
import Transactions from "./components/Transactions";
import './App.css';

function App() {
    const [userAuthenticated, setUserAuthenticated] = useState(() => !!localStorage.getItem("user_id"));

    // Manage the end of registration or connection
    const handleAuthComplete = () => {
        setUserAuthenticated(true);
    };

    const handleLogout = () => {
        localStorage.removeItem("user_id");
        setUserAuthenticated(false);
    };

    return (
        <div>
            <h1>FinTrack</h1>
            {!userAuthenticated ? (
                <>
                    <RegisterUser onRegisterComplete={handleAuthComplete} />
                    <LoginUser onLoginComplete={handleAuthComplete} />
                </>
            ) : (
                <>
                    <button onClick={handleLogout}>Logout</button>
                    <Transactions />
                </>
            )}
        </div>
    );
}

export default App;
