import React from 'react'
import styled from 'styled-components'

import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const IconLinks = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 35%;
margin: 0 auto;
height: 100%;
font-size: 5rem;
cursor: pointer;
`

export default function ContactLinks() {
    return (
        <IconLinks>
            <FaInstagram />
            <FaLinkedinIn />
            <FiMail />
        </IconLinks>
    )
}
