/* eslint-disable react/prop-types */
// library imports
import { BsArrowReturnLeft } from "react-icons/bs";

import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

export default function Form({ onClick }) {
  const [textThought, setTextThought] = useState("");
  const { dispatch } = useContext(AppContext);
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newThought = {
      id: uuidv4(),
      timeSubmitted: Date.now(),
      user: "Veronika Varapalo.",
      avatar: "avatars/avatar-test-2.jpg",
      name: textThought,
      blur: true,
      delete: false,
    };

    dispatch({
      type: "ADD_THOUGHT",
      payload: newThought,
    });

    setTextThought("");
  };

  // const handleCancel = () => {
  //   if (focused === false) {
  //     setFocused(true);
  //   } else {
  //     setFocused(false);
  //   }
  // };
  return (
    <form className="form" onSubmit={handleSubmit} autoComplete="off">
      <label className="form__label" htmlFor="thoughts" data-focused={focused}>
        <div className="form__input_submit">
          <input
            className="form__input"
            type="text"
            name="thought"
            autoFocus
            required
            maxLength={60}
            value={textThought}
            onChange={(e) => setTextThought(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="What's on your mind?"
          />
          <button
            className="form__submit"
            aria-label="Enter new thought"
            type="submit"
          >
            <BsArrowReturnLeft className="icons large" />
          </button>
        </div>
        <button
          className="form__cancel"
          onClick={onClick}
          data-focused={focused}
        >
          Cancel (esc)
        </button>
      </label>
    </form>
  );
}
