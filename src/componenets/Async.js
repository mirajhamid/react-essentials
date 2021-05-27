import { useState } from "react";
import "../css/App.css";

function Async(props) {
  //here we create a useState for data we going to fetch
  //and made it null since no data at first.
  const [gitHubData, setGitHubData] = useState(null);
  const [loadingGitHubData, setLoadingGitHubData] = useState(false);
  const [errorGitHubData, setErrorGitHubData] = useState(null);

  //or you can use useEffects to just loadData with [] to load async data
  // useEffect(() => {
  //   fetch(`https://api.example.com/users/${login}`)
  //     .then((response) => response.json())
  //     .then(gitHubData);
  // }, []);

  const apiFunction = (userName) => {
    setLoadingGitHubData(true);

    if (userName.length > 3) {
      fetch(`https://api.github.com/users/${userName}`)
        .then((response) => response.json())
        .then(function (data) {
          console.log(data);
          //have to return something then only the "then"
          //next can read it from there
          setLoadingGitHubData(false);
          return data;
        })
        .catch(function (err) {
          setErrorGitHubData(err);
          console.log(errorGitHubData);
        })
        .then(function (data) {
          setGitHubData(data);
        });
    } else if (!userName) {
      setLoadingGitHubData(false);
      setGitHubData(null);
    } else {
    }
  };

  if (loadingGitHubData) {
    return (
      <div className="preStyle">
        <label>Country name :</label>
        <input
          type="text"
          id="username"
          placeholder="type github username here"
          onChange={(e) => apiFunction(e.target.value)}
        />
        <pre>Loading...! userName should be length 3 or higher</pre>
      </div>
    );
  } else {
    return (
      <div className="preStyle">
        <label>Country name :</label>
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
}

export default Async;
