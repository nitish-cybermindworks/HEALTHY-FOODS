import FoodHeading from "./components/FoodHeading";
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // let foodItems = [];
  let foodItems = ["Dal", "Milk", "Roti", "Salad", "Green Vegetables"];

  return (
    <>
      <FoodHeading />
      <FoodItems items={foodItems} />
    </>
  );
}

export default App;
