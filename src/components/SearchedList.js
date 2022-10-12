import React, { useState } from "react";
import FilteredElement from "./FilteredElement";
import styles from "./SearchedList.module.css";

const SearchedList = (props) => {
  const [cardItem, setCardItem] = useState([]);

  const addCardHandler = (list) => {
    setCardItem([...cardItem, list]);
  };

  return (
    <>
      <div className={styles.list}>
        <ul className={styles.unl}>
          {props.userList.length > 0 &&
            props.userList.map((list, i) => (
              <li key={list.id} onClick={() => addCardHandler(list)}>
                {list.name}
              </li>
            ))}
        </ul>
      </div>
      <FilteredElement className={""} cardItem={cardItem} />
    </>
  );
};

export default SearchedList;
