import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BottomNavigation() {
  const navigate = useNavigate();
  const [pageLocation, setPageLocation] = useState(window.location.pathname);

  function goHome() {
    navigate("/");
  }
  function exploreBlogs() {
    navigate("/explore");
  }
  function toProfile() {
    navigate("/dashboard");
  }
  return (
    <>
      <footer className="dock dock-lg">
        <button
          id="home"
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/home"
              ? "dock-active"
              : ""
          }
          onClick={goHome}
        >
          <svg
            className="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
              <polyline
                points="1 11 12 2 23 11"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="2"
              ></polyline>
              <path
                d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                strokeMiterlimit="10"
                strokeWidth="2"
              ></path>
              <line
                x1="12"
                y1="22"
                x2="12"
                y2="18"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                strokeMiterlimit="10"
                strokeWidth="2"
              ></line>
            </g>
          </svg>
        </button>

        <button
          id="explore"
          className={
            window.location.pathname === "/explore" ? "dock-active" : ""
          }
          onClick={exploreBlogs}
        >
          <svg
            className="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
              <polyline
                points="3 14 9 14 9 17 15 17 15 14 21 14"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="2"
              ></polyline>
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="2"
                ry="2"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                strokeMiterlimit="10"
                strokeWidth="2"
              ></rect>
            </g>
          </svg>
        </button>

        <button
          id="profile"
          className={
            window.location.pathname === "/dashboard" ? "dock-active" : ""
          }
          onClick={toProfile}
        >
          <div className="avatar avatar-placeholder">
            <div className="bg-neutral text-neutral-content w-8 rounded-full">
              {sessionStorage.getItem("username") ? (
                <span className="text-xs">
                  {sessionStorage.getItem("username").charAt(0).toUpperCase()}
                </span>
              ) : (
                <div className="w-24 rounded-full">
                  <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                </div>
              )}
            </div>
          </div>
        </button>
      </footer>
    </>
  );
}
