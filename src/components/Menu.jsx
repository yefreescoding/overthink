/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
// react imports
import { useState, useContext, useEffect } from "react";

// library imports
import { TrashIcon } from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/solid";
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";
import { FaCircleInfo } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { IoNewspaperSharp } from "react-icons/io5";

// functions imports
import { handleDarkMode } from "../functions/themeTransitions";

// Context imports
import { AppContext } from "../context/AppContext";

function Menu({ openForm }) {
  const { dispatch } = useContext(AppContext);
  const [openMenu, setOpenMenu] = useState(false);

  const eraseThoughts = () => {
    dispatch({
      type: "DELETE_THOUGHTS",
    });
  };

  // Event listener callback function
  const handleKeyDown = (event) => {
    // Check if the meta key (Command key on Mac, Windows key on Windows) and the letter 'k' are pressed
    // if (event.key === "e") {
    //   eraseThoughts();
    // }
    // Gotta learn how to activate this thing without messing the code
    // if (event.key === "Escape") {
    //   setFormIsOPen(false);
    // }
  };

  // Add event listener when component mounts
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="menu">
      <button onClick={() => setOpenMenu(!openMenu)} aria-label="Open the menu">
        {!openMenu ? (
          <Bars3Icon className="icons" />
        ) : (
          <XMarkIcon className="icons" />
        )}
      </button>
      <div className={`menu__actions ${openMenu && "open"}`}>
        <ul className="menu__actions_ul">
          <li className="menu__btn">
            <a href="/">More info</a>
            <FaCircleInfo className="icons small" />
          </li>
          <li className="menu__btn">
            <a href="/">About me</a>
            <FaUserAlt className="icons small" />
          </li>
          <li className="menu__btn">
            <a href="/">Portfolio</a>
            <IoNewspaperSharp className="icons small" />
          </li>
        </ul>
        <button
          onClick={openForm}
          aria-label="Add new though"
          className="menu__btn"
        >
          <span>Add new thought</span>
          <CloudArrowUpIcon className="icons small" />
        </button>
        <button
          onClick={eraseThoughts}
          aria-label="Erase my thoughts"
          className="menu__btn"
        >
          <span>Delete my thoughts</span>
          <TrashIcon className="icons small" />
        </button>
        <button
          onClick={handleDarkMode}
          aria-label="Dark mode toggle"
          className="menu__btn"
        >
          <span>Dark mode</span>
          <MoonIcon className="icons small" />
        </button>
      </div>
    </div>
  );
}

export default Menu;
