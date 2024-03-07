import React from "react";

const Certificates = () => {
  const pdfUrl =
    "https://www.dropbox.com/scl/fi/02kc0060g1nmwz4e1b3ja/EnglishScore.pdf?rlkey=c4crjy32y62xin42527n25qhv&dl=0";

  return (
    <div>
      <iframe title="pdf-viewer" src={pdfUrl} width="100%" height="600px" />
    </div>
  );
};

export default Certificates;
