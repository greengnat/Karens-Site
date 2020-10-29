import React from 'react'
import Theme from "../../util/Theme.js"
import styled from 'styled-components'

import ContactLinks from './ContactLinks'

const FooterBackground = styled.div`
background-color: ${Theme.backgroundFooter};
height: 30vh;
width: 100vw;
`

export default function Footer() {
    return (
       <FooterBackground>
           <ContactLinks></ContactLinks>
       </FooterBackground>
    )
}
