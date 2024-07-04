import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  height: 70px;
  background: blue;
  display: flex;
  justify-content: space-between;
`;
class Navbar extends React.Component {
  render() {
    return (
      <>
        <Nav>
          <div style={styles.title}>Movie-App</div>
          <div style={styles.cartContainer}>
            <img
              style={styles.cartIcon}
              src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png"
              alt="Cart Icon"
            />
            <span style={styles.cartCount}>3</span>
          </div>
        </Nav>
      </>
    );
  }
}
export default Navbar;

const styles = {
  nav: {
    width: "100%",
    height: 70,
    background: "red",
    display: "flex",
    justifyContent: " space-between",
    position: "relative",
  },
  title: {
    fontSize: 38,
    color: "#fff",
    fontWeight: 600,
    fontFamily: '"Montserrat",sans-ser',
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
