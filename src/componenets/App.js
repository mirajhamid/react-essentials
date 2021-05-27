import "../css/App.css";
import restaurantImg from "../images/main/restaurant.jpg";
import UserMood from "./UserMood.js";
import Async from "./Async.js";

//this is for navigation
import { Link } from "react-router-dom";

/**We use props to get the properties
 * passed during the component
 * declaration(use)
 */
function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Shop</h1>
    </header>
  );
}

const dishesArray = ["Meal one", "Meal two", "Meal three"];
//const dishesObjects = dishesArray.map((dish, i) => ({ id: i, text: dish }));

function Main(props) {
  return (
    <section id="main" className="main-section">
      <p>Our menu items - {props.today}</p>
      <img
        src={restaurantImg}
        alt="some description about the pic"
        height="200"
      />
      <div id="main_items" className="main-items">
        <ul>
          {props.dishes.map((dish, i) => (
            <li key={i}>{dish}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/**We use props to get the properties
 * passed during the component
 * declaration(use)
 */
function Footer(props) {
  return (
    <footer>
      <h5>© Copyright {props.year}. All Rights Reserved.</h5>
    </footer>
  );
}

function Authorized() {
  return (
    <footer>
      <h6>authorized user</h6>
    </footer>
  );
}

function App(props) {
  return (
    <div className="App">
      <Header name="Anyone" />
      <Main
        dishes={dishesArray}
        today={new Date().toISOString().split("T")[0]}
      />
      <UserMood />
      <Async />

      <div className="nav_section">
        <h3>Navigations</h3>
        <Link to="home" style={{ padding: "5px" }}>
          Home
        </Link>
        <Link to="colors" style={{ padding: "5px" }}>
          Colors
        </Link>
      </div>

      <Footer year={new Date().getFullYear()} />
      {props.authorized ? <Authorized /> : <div></div>}
    </div>
  );
}
//Some comment
export default App;
