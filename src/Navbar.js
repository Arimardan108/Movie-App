import React from "react";
class Navbar extends React.Component {
  render() {
    return (
      <>
        <div style={styles.nav}>
          <div style={styles.title}>Movie-App</div>
          <div>
            <img alt="Cart Icon" />
            <span>3</span>
          </div>
        </div>
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
  },
  title: {
    fontSize: 38,
    color: "#fff",
    fontWeight: 600,
    fontFamily: '"Montserrat",sans-ser',
    textTransform: "uppercase",
    marginLeft: 20,
  },
};
