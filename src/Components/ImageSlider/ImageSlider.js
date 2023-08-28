import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
const allImages = [
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1690965948939_virdasreviseddesktop.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1692954046674_lolladesktop.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1690628905918_webbannernpa.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1692875161616_rakhshbandhadesktop.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1691130965445_wwesuperstardesktop.jpg",
];
function ImageSlider() {
  const [imgNo, setImgNo] = useState(0);

  // setInterval(() => {
  //   setImgNo(imgNo + 1);
  //   if (imgNo == allImages.length - 1) {
  //     setImgNo(0);
  //   }
  // }, 3000);
  function prev() {
    setImgNo(imgNo - 1);

    if (imgNo == 0) {
      setImgNo(allImages.length - 1);
    }
  }
  function next() {
    setImgNo(imgNo + 1);
    if (imgNo == allImages.length - 1) {
      setImgNo(0);
    }
  }

  return (
    <div>
      <div className="imageSlider">
        <button className="btn btnPrev" onClick={prev}>
          <GrFormPrevious className="btn_icon"></GrFormPrevious>
        </button>

        <div className="images">
          <img
            className="firstImg"
            src={allImages[imgNo - 1] ? allImages[imgNo - 1] : allImages[4]}
            alt=""
          />
          <img className="middleImg" src={allImages[imgNo]} alt="" />
          <img
            className="lastImg"
            src={allImages[imgNo + 1] ? allImages[imgNo + 1] : allImages[0]}
            alt=""
          />
        </div>

        <button className="btn btnNext" onClick={next}>
          <GrFormNext className="btn_icon"></GrFormNext>
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;
