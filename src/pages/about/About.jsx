import React from 'react'
import styled from "styled-components"
import Theme from "../../util/Theme.js"

import Footer from "../../components/footer/Footer.jsx";

const AboutBackground = styled.div`
background: ${Theme.backgroundAbout};
height: 100vh;
width: 100vw;

`
const AboutInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: flex-end;
height: 70vh;
width: 100vw;
border-bottom: 1px solid ${Theme.borderColor};
`
const AboutTitle = styled.h1`
width: 50%;
margin: 0 auto;
font-size: 2rem;
color: black;
margin-bottom: .8rem;

`

const AboutText = styled.div`
position: relative;
color: ${Theme.aboutText};
font-size: 1rem;
width: 50%;
margin: 0 auto;
padding-top: 10px;
padding-bottom: 10px;
letter-spacing: 1.5px;
border-top: 1px solid ${Theme.borderColor};
border-bottom: 1px solid ${Theme.borderColor};
`
export default function about() {
    return (
        <AboutBackground>
           <AboutInfo><AboutTitle>About</AboutTitle><AboutText>Hello, my name is Karen Morgan, KMo for short. My professional career has been as a fine artist, digital artist for PC games, and currently as a graphic designer. This is a portfolio site showcasing some of my original artwork. The paintings were created using prismacolor pencils and watercolor. The subject matter comes from personal photos taken in such a way that they would lend themselves to very small images. My goal was to make pieces that were typical of the medium in that they are very realistic images, and yet done with my unique perspective. Please enjoy your visit and thank you for taking the time to look through my work.</AboutText></AboutInfo>
           <Footer></Footer>
        </AboutBackground>
        
    )
}
