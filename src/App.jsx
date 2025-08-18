import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Comp/Header";
import Footer from "./Comp/Footer";
import SideBar from "./Comp/SideBar";
import CreatePost from "./Comp/CreatePost";
import PostList from "./Comp/PostList";
import PostlistProv from "./Store/Postlist";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <PostlistProv>
        <div className="app-container">
          <SideBar
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          ></SideBar>

          <div className="content">
            <Header></Header>
            {selectedTab === "Home" ? (
              <PostList></PostList>
            ) : (
              <CreatePost></CreatePost>
            )}

            <Footer></Footer>
          </div>
        </div>
      </PostlistProv>
    </>
  );
}

export default App;
