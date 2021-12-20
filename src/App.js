import React, { useState } from "react";
import "modern-normalize/modern-normalize.css";
import ImageGallery from "./component/ImageGallery/ImageGallery";
import Search from "./component/Searchbar/Searchbar";
function App({ clearOnNewRequest }) {
  const [imgName, setImgName] = useState("");
  const handleFormSubmit = (imgName) => {
    setImgName(imgName);
  };

  return (
    <>
      <Search img={handleFormSubmit} />
      <ImageGallery imgName={imgName} />
    </>
  );
}

export default App;
