import { useState, useEffect, useReducer } from "react";
import "../css/App.css";

/**
 * --This is array destructuring
 *
 * normally useState has value (could be an object,number,string etc)
 *
 * const userMood = userState("happy");
 *
 * will have two values
 *
 * userMood[0] = happy
 * userMood[1] = function that can change the value
 *
 * with array destructuring we can easyly manupulate it
 *
 */

function UserMood() {
  //------ useState

  //Variable name can be any value but as a practice make sure use the set<variableName>
  //as the set function
  //set function will replace the varible with passed value
  const [moodOne, setMoodOne] = useState(1);
  const [moodTwo, setMoodTwo] = useState(2);

  //------ useEffect

  //triggers only when the state change happend to moodOne
  useEffect(() => {
    console.log("user clicked on one of moodOne change button");
  }, [moodOne]);

  //triggers only when the state change happend to moodTwo
  useEffect(() => {
    console.log("user clicked on one of moodTwo change button");
  }, [moodTwo]);

  //triggers for any stateChange
  useEffect(() => {
    console.log("user did something");
  });

  //------ useReducer

  //useReducer firstValue will be the function and have to return changed value,
  //second value will be the initial value
  //const array firstValue will be the variable name
  //second value will be the function name that use to statechange
  const [checked, toggle] = useReducer((checked) => {
    console.log("checkBox value changed " + checked);
    //some process and changed value should be returned
    return !checked;
  }, false);

  // const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <div>
      <p className="userMood__paragraph">
        user moods are {moodOne} and {moodTwo}
      </p>
      <div className="mood_1_buttons">
        <button onClick={() => setMoodOne("happy")}>happy</button>
        <button onClick={() => setMoodOne("angry")}>angry</button>
        <button onClick={() => setMoodOne("crazy")}>crazy</button>
      </div>
      <div className="mood_2_buttons">
        <button onClick={() => setMoodTwo("happy")}>happy</button>
        <button onClick={() => setMoodTwo("angry")}>angry</button>
        <button onClick={() => setMoodTwo("crazy")}>crazy</button>
      </div>
      <div>
        <input type="checkBox" value={checked} onClick={toggle} />
        <p>checkBox value {checked ? "checked" : "unchecked"}</p>
      </div>
    </div>
  );
}

export default UserMood;
