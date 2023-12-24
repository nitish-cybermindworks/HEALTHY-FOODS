import Item from "./item";
const FoodItems = ({ items }) => {
  return (
    <>
      {items.length === 0 && <h3>I am hungry</h3>}
      <ul className="list-group">
        {items.map((item) => {
          return <Item key={item} foodItem={item} />;
        })}
      </ul>
    </>
  );
};

export default FoodItems;
