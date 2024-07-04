import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  height: 70px;
  background: linear-gradient(170deg, #1bc059, #0d47a1);
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 38;
  color: #fff;
  font-weight: 600;
  font-family: Montserrat, sans-ser;
  text-transform: uppercase;
  margin-left: 20;
  &:hover {
    color: #0ff0;
  }
`;
const CartIconContainer = styled.div`
  position: relative;
  cursor: pointer;
`;
const CartImg = styled.img`
  height: 48px;
  margin-right: 20px;
`;
const CartCount = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  padding: 4px 8px;
  position: absolute;
  right: 10px;
  top: -5px;
  font-size: 12px;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;
class Navbar extends React.Component {
  render() {
    return (
      <>
        <Nav>
          <Title>Movie-App</Title>
          <CartIconContainer>
            <CartImg
              src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png"
              alt="Cart Icon"
            />
            <CartCount color="yellow" show={false}>
              3
            </CartCount>
          </CartIconContainer>
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
