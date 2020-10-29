import React from 'react'
import styles from "./NavBar.module.css";
import styled from "styled-components"
import Theme from "../../util/Theme.js"


const Logo = styled.div`
display: flex;
justify-content: center;
text-align: center;
align-items: center;
font-weight: bold;
font-family: 'Rokkitt', serif;
color: white;
font-size: 2rem;
z-index: 2;
`



  

export default function navBar(props) {
    return (
        <header className={styles.header}>
            <div className={styles.innerHeader}>
            <Logo>KMo</Logo>
        <nav>{props.children}</nav>
        </div>
        </header>
    )
}
