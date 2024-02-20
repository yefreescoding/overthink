// Library imports
import { MdKeyboardCommandKey } from "react-icons/md";
import { TbMessage } from "react-icons/tb";

// function imports
import calculateTimeAgo from "../functions/calculateTimeSubmitted";

// react imports
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Thoughts = () => {
  const { thoughts } = useContext(AppContext);

  return (
    <section className="thoughts">
      <h2 className="thoughts__h2">
        {thoughts.length > 0 ? (
          <span> My thoughts </span>
        ) : (
          <span> Start writing</span>
        )}
        <div className="command_key">
          <MdKeyboardCommandKey className="icons medium" />
          <span>k</span>
        </div>
      </h2>
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
                  <h3>Posted on:</h3>
                  <p>{calculateTimeAgo(thought.timeSubmitted)}</p>
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
