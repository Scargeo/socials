import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate(); // useNavigate is a hook that allows you to navigate to different routes in the app


    const Login = () => {
        const data = { username: username, password: password };
        axios.post("http://localhost:3001/auth/login", data).then((response) => {
            // check if the response has an error
            if (response.data.error) {
                alert(response.data.error);
            }
            else {
                sessionStorage.setItem("token", response.data);
                navigate("/"); // redirect to posts page
            }
        });
    };

    return (
        <div className="loginContainer">
            <label>LOGIN:</label>
            <br />
            <input
                type="text"
                placeholder="username"
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
            />
            <input
                type="password"
                placeholder="password"
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
            />
            <button onClick={Login}>Login</button>
        </div>
    );
}

export default Login;