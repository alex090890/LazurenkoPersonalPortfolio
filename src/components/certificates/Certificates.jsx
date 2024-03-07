import React from "react";

const Certificates = () => {
  const pdfUrl = "https://app.box.com/s/foncbqebdazudbc8ystvclnijz9rf856";

  return (
    <div>
      <iframe title="pdf-viewer" src={pdfUrl} width="100%" height="600px" />
    </div>
  );
};

export default Certificates;
