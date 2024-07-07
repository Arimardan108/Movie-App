import React, { Component } from "react";
import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  height: 70px;
  background-color: cadetblue;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 30;
  color: #fff;
  font-weight: 600;
  font-family: Montserrat, sans-serif;
  text-transform: uppercase;
  margin-left: 20;
`;
class Navbar extends Component {
  render() {
    return (
      <Nav>
        <Title>Movie-App</Title>
        <div style={styles.cartContainer}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
            alt="cart-icon"
            style={styles.cartIcon}
          />
          <span style={styles.cartCount}>3</span>
        </div>
      </Nav>
    );
  }
}

export default Navbar;

const styles = {
  nav: {
    width: "100%",
    height: 70,
    background: "#4267b2",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: 600,
    fontFamily: '"Montserrat", sans-serif',
    textTransform: "uppercase",
    marginLeft: 20,
  },
  cartContainer: {
    position: "relative",
    cursor: "pointer",
  },
  cartIcon: {
    height: 48,
    marginRight: 20,
  },
  cartCount: {
    background: "orange",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 10,
    top: -5,
    fontSize: 12,
  },
};
