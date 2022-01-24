import React from 'react';
import './Style.js'
import {CreativeSection , CreativeInfo , InfoTitle , Span, InfoDir , InfoDesc ,A} from './Style.js'

 function About() {
    return (
        
        <CreativeSection className="creative">
            <div className="container">
                <CreativeInfo className="creative-info">
                    <InfoTitle className="info-title"><Span>This is</Span> Me</InfoTitle>
                    <InfoDir className="info-dir">Creative Director</InfoDir>
                    <InfoDesc className="info-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <A href="#">explicabo</A> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                    <InfoDesc className="info-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                </CreativeInfo>
            </div>
        </CreativeSection>
    )
}

export default About;
