import React, { useState } from "react";
import { ReactComponent as Logo } from "../../logo.svg";
import s from "./Searchbar.module.css";
function Search({ img }) {
  const [imgName, setImgName] = useState("");

  const searchPhoto = (e) => {
    setImgName(e.target.value.toLowerCase());
  };

  const handleSubmit = (el) => {
    el.preventDefault();
    if (imgName.trim() === "") {
      return;
    }
    img(imgName);
    setImgName("");
  };

  return (
    <>
      <header className={s.form__block}>
        <form className={s.form} onSubmit={handleSubmit}>
          <button className={s.button__submit} type="submit">
            <span>
              <Logo width="30px" height="30px" />
            </span>
            <span className={s.button__label}>Search</span>
          </button>
          <input
            onChange={searchPhoto}
            className={s.input}
            type="text"
            placeholder="Search images and photos"
            value={imgName}
          />
        </form>
      </header>
    </>
  );
}
export default Search;
