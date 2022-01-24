import React from 'react';
import './Style.js';
import { HomeInfo, HomeSection ,HomeInformation ,HomeTitle, HomeDesc ,HomeButton } from './Style.js';


 function Home() {
    return (
        <HomeSection className="home">
            <div className="container">
                <HomeInformation className="home-information">
                    <HomeTitle className="home-title margin-bottom">Hamza Nabil</HomeTitle>
                    <HomeInfo className="home-info">Creative Director</HomeInfo>
                    <HomeDesc className="home-desc">
                        Iam a professional <span>UX Designer</span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeButton className="home-btn">Let's Begin</HomeButton>
                </HomeInformation>
            </div>
        </HomeSection>
    )
}

export default Home;
