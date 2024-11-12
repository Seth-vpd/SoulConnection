import React from "react";
import photo from "../assets/AquPhoto.jpeg";

const Home = () => {
  return (
    <div>
      {/* <div style={{ position: "absolute", top: "150px", left: "450px" }}>
        Page Home
      </div> */}
      <div
        style={{
          width: "800px",
          height: "900px",
          display: "grid",
          backgroundColor: "black",
          gridTemplateColumns: "3fr 1fr 1fr",
          rowGap: " 50px",
          columnGap: "30px"
        }}
      >
        <div style={{ backgroundColor: "pink" }}>LOOOL</div>
        <div style={{ backgroundColor: "red" }}></div>
        <div style={{ backgroundColor: "orange" }}></div>
        <div style={{ backgroundColor: "green" , width: "200px"}}></div>
      </div>
    </div>
  );
};

export default Home;
