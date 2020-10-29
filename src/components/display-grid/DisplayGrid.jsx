import React from 'react'
import Theme from "../../util/Theme.js"
import styled from 'styled-components'
import Cherries from '../../images/bowlofCherries.png'
import Clementines from '../../images/Clementines.png'
import Dalia from '../../images/Dalia.png'
import Dandelion from '../../images/Dandelion.png'
import Dogwood from '../../images/Dogwood.png'
import HenandChick from '../../images/HenandChick.png'
import hydrangia from '../../images/hydrangia.png'
import redStar from '../../images/redStar.png'
import SweetPeas from '../../images/SweetPeas.png'

const GridBackground = styled.div`
height: 60vh;
width: 100vw;
background-color: ${Theme.backgroundGrid};
border-bottom: 1px solid ${Theme.borderColor};
`

const Grid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr;
grid-gap: 1rem;
height: 90%;
width: 50%;
margin: 0 auto;
padding-top: 12vh;
`


const GridItem = styled.div`
background-image: url(${props => props.backgroundImg});
background-size: cover;
cursor: pointer;
`
export default function displayGrid() {
    return (
        <GridBackground>
            <Grid>
<GridItem backgroundImg={Cherries}></GridItem>
<GridItem backgroundImg={Clementines}></GridItem>
<GridItem backgroundImg={Dalia}></GridItem>
<GridItem backgroundImg={Dandelion}></GridItem>
<GridItem backgroundImg={Dogwood}></GridItem>
<GridItem backgroundImg={HenandChick}></GridItem>
<GridItem backgroundImg={hydrangia}></GridItem>
<GridItem backgroundImg={redStar}></GridItem>
<GridItem backgroundImg={SweetPeas}></GridItem>
            </Grid>
        </GridBackground>
    )
}
