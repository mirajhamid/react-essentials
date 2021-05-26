import "../css/App.css";
import restaurantImg from "../images/main/restaurant.jpg";

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
      <p>Our menu items today {props.today}</p>
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
      <h6>© Copyright {props.year}. All Rights Reserved.</h6>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header name="Anyone" />
      <Main
        dishes={dishesArray}
        today={new Date().toISOString().split("T")[0]}
      />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
