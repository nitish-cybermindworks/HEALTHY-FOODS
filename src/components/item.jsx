import css from "./item.module.css";

let Item = ({ foodItem }) => {
  return (
    <li className={`"list-group-item" ${css["kg-item"]}`}>
      <span className={css["kg-span"]}>{foodItem}</span>
    </li>
  );
};

export default Item;
