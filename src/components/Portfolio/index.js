import axios from 'axios';
import React , {useState , useEffect} from 'react';
import './Style.js';
import {PortfolioSection, PortfolioTitle ,Span,PortfolioItem, Box, Image, Overlay, OverlaySpan,PortfolioList} from './Style.js'

 const Portfolio = () => {

  const [images, setimages] = useState([])

  useEffect(() => {
    axios.get('js/data.json')
    .then((res) => setimages(res.data.portfolio))
},[])
    const portfolioImages = images.map((imgItem) => {
        return (
        <Box key={imgItem.id}>
        <Image src={imgItem.image} alt="" />
        <Overlay className="overlay">
            <OverlaySpan>
                Show Image
            </OverlaySpan>
        </Overlay>
    </Box>
        )
    })

    return (
       
        <PortfolioSection className="portfolio">
            <PortfolioTitle className="portfolio-title"><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList className="portfolio-list">
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <div className="box">
                {portfolioImages}
            </div>
            
        </PortfolioSection>
    )
}

export default Portfolio;
