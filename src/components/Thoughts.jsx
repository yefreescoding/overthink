// Library imports
import { CloudIcon } from "@heroicons/react/24/solid";

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
        <h2 className="thoughts__h2">Start writing...</h2>
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
                  <h3>{thought.id}</h3>
                  <p>{calculateTimeAgo(thought.timeSubmitted)} ago</p>
                </div>
                <CloudIcon className="icons icon-1 icon-2" />
              </div>
              <p className="thoughts__p"> &quot; {thought.name} &quot;</p>
              <div className="thoughts__li_footer">
                <img src={thought.id} alt={`Avatar of ${thought.user}`} />
                <p>{thought.id}</p>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Thoughts;
