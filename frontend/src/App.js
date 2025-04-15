import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; /* BrowserRouter is a component that wraps the application and provides routing capabilities. * Route is a component that renders a component based on the URL. * Routes is a component that contains multiple Route components. * Link is a component that creates a link to a different URL. */
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Registration from "./pages/Registration";
import Login from "./pages/Login";


// The App component is the main component of the application. It contains the routing logic and the navigation bar.
function App() {
  return (
  <div className="App">
      <Router>
        <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/createpost">Create Post</Link>
        <Link to="/registration">Registration</Link>
        <Link to="/login">Login</Link>
        </div>
        <Routes>
          <Route path="/" exact element ={<Home />} />
          <Route path="/createpost" exact element ={<CreatePost />} />
          <Route path="/post/:id" exact element ={<Post />} />
          <Route path="/registration" exact element ={<Registration />} />
          <Route path="/login" exact element ={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;