import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Navbar from "../components/Navbar";
import "./style.css";

function Home() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <SwitchTransition>
        <CSSTransition
          timeout={200}
          classNames={"fade"}
          key={location.pathname}
        >
          <div className="max-w-[1020px] mx-auto">
            <Outlet />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}

export default Home;
