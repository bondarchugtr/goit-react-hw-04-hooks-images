import React, { useState, useEffect } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.css";
import container from "../Container.module.css";
import Api from "../ApiService/ApiService";
import Button from "../Button/Button";
import ThreeDots from "../Loader/Loader";
import Modal from "../Modal/Modal";

function ImageGallery({ imgName, onClick }) {
  const [imgArr, setImgArr] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState(null);

  useEffect(() => {
    if (!imgName) {
      return;
    }

    if (imgName !== imgName || page !== page) {
      setLoading(true);
      Api(imgName, page)
        .then((imgArr) => setImgArr([...imgArr, ...imgArr.hits]))
        .finally(() => setLoading(false));
    }
    if (imgName !== imgName) {
      clearOnNewRequest();
    }
  }, [imgName, page]);

  // componentDidUpdate(prevProps, prevState) {
  //   const { page } = this.state;
  //   const { imgName } = this.props;
  //   if (prevProps.imgName !== imgName || prevState.page !== page) {
  //     this.setState({ loading: true });
  //     Api(this.props.imgName, this.state.page)
  //       .then((imgArr) =>
  //         this.setState({
  //           imgArr: [...this.state.imgArr, ...imgArr.hits],
  //         })
  //       )
  //       .finally(() => this.setState({ loading: false }));
  //   }
  //   if (prevProps.imgName !== imgName) {
  //     this.clearOnNewRequest();
  //   }
  // }
  const clearOnNewRequest = () => {
    setPage(1);
    setImgArr([]);
  };

  const buttonOnclickNextPage = () => {
    setPage((page) => page + 1);

    scrollTop();
  };

  const onClickImgToggleModal = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const imgModalWriting = (largeImageURL) => {
    onClickImgToggleModal();
    setLargeImageURL(largeImageURL);
  };

  const scrollTop = () => {
    setTimeout(
      () =>
        window.scrollTo({
          top: window.pageYOffset + document.documentElement.clientHeight,
          behavior: "smooth",
          block: "end",
        }),
      1000
    );
  };

  // const { imgArr, isOpen, largeImageURL, loading } = this.state;

  return (
    <>
      <div className={container.container}>
        {imgArr.length > 0 && (
          <ul className={s.gallery}>
            {imgArr.map((img) => (
              <ImageGalleryItem
                key={img.id}
                src={img.webformatURL}
                alt={img.tags}
                onClick={() => imgModalWriting(img.largeImageURL)}
              />
            ))}
          </ul>
        )}
      </div>

      {imgArr.length > 0 && !loading && (
        <Button nextPage={buttonOnclickNextPage} />
      )}
      {loading && <ThreeDots />}

      {isOpen && (
        <Modal
          onClose={this.onClickImgToggleModal}
          openImgModal={largeImageURL}
        />
      )}
    </>
  );
}
export default ImageGallery;
