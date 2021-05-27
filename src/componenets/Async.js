import { useState } from "react";
import "../css/App.css";

function Async(props) {
  //here we create a useState for data we going to fetch
  //and made it null since no data at first.
  const [gitHubData, setGitHubData] = useState(null);

  const apiFunction = (userName) => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => response.json())
      .then(function (data) {
        console.log(data);
        //have to return something then only the "then"
        //next can read it from there
        return data;
      })
      .catch(function (err) {
        console.log(err);
      })
      .then(function (data) {
        setGitHubData(data);
      });
  };

  return (
    <div className="preStyle">
      <label>GitHub user name :</label>
      <input
        type="text"
        id="username"
        placeholder="type github username here"
        onChange={(e) => apiFunction(e.target.value)}
      />
      <pre>{JSON.stringify(gitHubData, null, 10)}</pre>
    </div>
  );
}

export default Async;
