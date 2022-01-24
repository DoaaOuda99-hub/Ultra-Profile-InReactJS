import React from 'react';
import './Style.js';
import Footer from  './../Footer';
import {DropSection , Droptitle , Span , FormSection , Input , FormInput , TextArea , Submit} from './Style.js'

 function Contact() {
    return (
        <React.Fragment>
        <DropSection class="drop">
        <div class="container">
            <Droptitle class="drop-title"><Span>Drop </Span>Me A line</Droptitle>
            <FormSection action="">
                <FormInput class="form-Input">
                    <Input text item type="text" placeholder="Your Name"/>
                    <Input email item type="email" placeholder="Your Email"/>
                </FormInput>
                <Input sub type="text" placeholder="Your Subject"/>
                <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                <Submit type="submit" value="Send Message" />
            </FormSection>
        </div>
    </DropSection>
    <Footer/>
    </React.Fragment>
    )
}

export default Contact;
