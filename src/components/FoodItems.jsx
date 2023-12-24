const FoodItems = () => {
  let foodItems = ["Dal", "Milk", "Roti", "Salad", "Green Vegetables"];
  return (
    <ul className="list-group">
      {foodItems.map((item) => {
        return (
          <li key={item} className="list-group-item">
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default FoodItems;
