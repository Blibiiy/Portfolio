import React from "react";
function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      {props.load && <div className="loader-text">Loading...</div>}
    </div>
  );
}

export default Pre;
