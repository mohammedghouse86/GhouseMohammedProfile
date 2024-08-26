import React from "react";

const Page = () => {
  return (
    <>
      <object
        data="/cv.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
        style={{width:'100vw', height:'100vh'}}
      >
        <p>
          Alternative text - include a link{" "}
          <a href="/cv.pdf">to the PDF!</a>
        </p>
      </object>
    </>
  );
};

export default Page;
