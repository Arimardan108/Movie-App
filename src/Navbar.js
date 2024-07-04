import React, { Component } from "react";
import styles from "./Navbar.module.css";

class Navbar extends Component {
  render() {
    return (
      <>
        <div className={styles.nav}>
          <div className={styles.title}>Movie-App</div>
          <div className={styles.cartIconContainer}>
            <img
              className={styles.cartIcon}
              src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png"
              alt="cart-icon"
            />
            <span className={styles.cartCount}>3</span>
          </div>
        </div>
      </>
    );
  }
}
export default Navbar;
