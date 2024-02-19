// Library imports
import { CloudIcon } from "@heroicons/react/24/solid";
import { MdKeyboardCommandKey } from "react-icons/md";
import { TbMessage } from "react-icons/tb";

// function imports
import calculateTimeAgo from "../functions/calculateTimeSubmitted";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Thoughts = () => {
  const { thoughts } = useContext(AppContext);

  return (
    <section className="thoughts">
      {thoughts.length > 0 ? (
        <h2 className="thoughts__h2">My thoughts</h2>
      ) : (
        <h2 className="thoughts__h2">
          <div className="command_key">
            <MdKeyboardCommandKey />
            <span>k</span>
          </div>
          <span> Start writing...</span>
        </h2>
      )}
      <ul className="thoughts__ul" aria-label="List of thoughts">
        {thoughts
          .sort((a, b) => b.timeSubmitted - a.timeSubmitted)
          .map((thought) => (
            <li
              key={thought.id}
              className="thoughts__li"
              data-onblur={thought.blur}
            >
              <div className="thoughts__li_header">
                <div className="thoughts__li_date_user">
                  <h3>{thought.user}</h3>
                  <p>{calculateTimeAgo(thought.timeSubmitted)} ago</p>
                </div>
                <TbMessage className="icons medium" />
              </div>
              <p className="thoughts__p"> {thought.name}</p>
              <div className="thoughts__li_footer">
                <img src={thought.avatar} alt={`Avatar of ${thought.user}`} />
                <p>{thought.user ? thought.user : "si"}</p>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Thoughts;
