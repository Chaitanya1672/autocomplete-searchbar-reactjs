import React, { useContext, useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import SearchedList from "./SearchedList";
import axios from "axios";
import { useGolbalContext } from "./context";
const SearchBar = (props) => {
  const data = useGolbalContext();

  const [text, setText] = useState("");
  const [listData, setListData] = useState([]);
  const [fitleredData, setFilteredData] = useState([]);

  const API = "https://reqres.in/api/unknown";

  useEffect(() => {
    fetchApiData(API);
  }, []);

  const fetchApiData = async (url) => {
    try {
      axios.get(url).then((res) => {
        const data = res.data.data;
        if (!data && data.length < 1) {
          throw new Error("Something went wrong");
        }
        setListData(data);
        setFilteredData(data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const fileringData = listData.filter((data) => data.name === text);

  const inputSearchHandler = (e) => {
    setText(e.target.value);
    const res = listData.filter((obj) =>
      Object.values(obj).some((val) =>
        String(val)
          .toLowerCase()
          .includes(e.target.value.toString().toLowerCase())
      )
    );
    // let filter = listData.includes(e.target.value);
    setFilteredData(res);
  };

  const searchSubmitHandler = () => {
    setFilteredData(fileringData);
    setText("");
  };

  return (
    <div className={styles.searchInp}>
      <div>{data}</div>
      <input
        className={styles.inp}
        type="search"
        name="search"
        placeholder="Type to search..."
        value={text}
        onChange={(e) => inputSearchHandler(e)}
        required
      />
      <button
        type="button"
        className={styles.btn}
        onClick={searchSubmitHandler}
      >
        Search
      </button>
      {text && <SearchedList userList={fitleredData} />}
    </div>
  );
};

export default SearchBar;
