import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/signup";
import Feed from "./pages/Feed/Feed";
import Explore from "./pages/Explore/Explore";
import Notification from "./pages/Notification/Notification";
import Message from "./pages/Messages/Messages";
import ProtectedRoute from "./pages/ProtectedRoute";
import Lists from "./pages/Lists/Lists";
import Profile from "./pages/Profile/Profile";
import More from "./pages/more/More";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Bookmark from "./pages/Bookmark/Bookmark";
function App() {
  return (
    <div className="app">
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                {" "}
                <Home />
              </ProtectedRoute>
            }
          >
            <Route index element={<Feed />} />
          </Route>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                {" "}
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />}>
            <Route path="feed" element={<Feed />} />
            <Route path="explore" element={<Explore />} />
            <Route path="notification" element={<Notification />} />
            <Route path="messages" element={<Message />} />
            <Route path="lists" element={<Lists />} />
            <Route path="bookmarks" element={<Bookmark />} />
            <Route path="profile" element={<Profile />} />
            <Route path="more" element={<More />} />
          </Route>
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
