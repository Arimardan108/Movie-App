import React from "react";
import styled from "styled-components";
const Nav = styled.div`
  height: 78px;
  background-color: linear-gradient(170deg, #1bc059, #0d47a1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const Title = styled.div`
  font-size: 30px;
  color: #fff;
  font-weight: 600;
  font-family: "Times New Roman" Times serif;
  margin-left: 20px;
  &:hover {
    color: #0f0;
  }
`;
const CartImg = styled.img`
  height: 48px;
  margin-right: 20px;
`;
const CartIconContainer = styled.div`
  position: relative;
  cursor: pointer;
`;
const CartCount = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  padding: 4px 8px;
  position: absolute;
  right: 10px;
  top: -5px;
  font-size: 12px;
  visibilty: ${(props) => (props.show ? "visible" : "hidden")};
`;

class Navbar extends React.Component {
  render() {
    return (
      <Nav>
        <Title>Movie-App</Title>

        <CartIconContainer>
          <CartImg
            alt="cart icon"
            src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png"
          />
          <CartCount color="yellow" show={false}>
            3
          </CartCount>
        </CartIconContainer>
      </Nav>
    );
  }
}
