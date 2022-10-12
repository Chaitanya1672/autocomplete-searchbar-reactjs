import React from "react";
import styles from "./filteredElements.module.css";
import { useGolbalContext } from "./context";
const FilteredElement = (props) => {
  // const [userList] = props;
  const data = useGolbalContext();
  return (
    <>
      <>{data}</>
      <div className={styles.cardItem}>
        {props.cardItem.map((list) => (
          <div key={list.id} className={styles.cardDiv}>
            Name: {list.name}
            <br />
            Year: {list.year}
            <br />
            color: {list.color}
          </div>
        ))}
      </div>
    </>
  );
};

export default FilteredElement;
