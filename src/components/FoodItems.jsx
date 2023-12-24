const FoodItems = () => {
  // let foodItems = [];
  let foodItems = ["Dal", "Milk", "Roti", "Salad", "Green Vegetables"];
  return (
    <>
      {foodItems.length === 0 && <h3>I am hungry</h3>}
      <ul className="list-group">
        {foodItems.map((item) => {
          return (
            <li key={item} className="list-group-item">
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FoodItems;
