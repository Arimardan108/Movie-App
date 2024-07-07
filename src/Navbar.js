import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div
        style={{
          height: 70,
          background: "#4267b2",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: 30,
            color: "#fff",
            fontWeight: 600,
            fontFamily: '"Montserrat", sans-serif',
            textTransform: "uppercase",
            marginLeft: 20,
          }}
        >
          Movie-App
        </div>
        <div style={{ position: "relative", cursor: "pointer" }}>
          <img
            style={{ height: 48, marginRight: 20 }}
            src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
            alt="cart-icon"
          />
          <span
            style={{
              background: "orange",
              borderRadius: "50%",
              padding: "4px 8px",
              position: "absolute",
              right: 10,
              top: -5,
              fontSize: 12,
            }}
          >
            3
          </span>
        </div>
      </div>
    );
  }
}

export default Navbar;
