import React  , {Component}from 'react';
import './Style.js';
import {WorkSection, WorkTitle ,Icon , PartTitle, Line , PartDesc,Part,Span} from './Style.js';
import axios from 'axios';

 class Work extends Component {
    
         state = {
             works : []
         }

         componentDidMount(){
             axios.get('js/data.json').then(res => {this.setState({works:res.data.works})})  
         }

         render() {

            const {works} = this.state;
            const worksList =  works.map( (work) => {
                return (
                    <Part first={work.id} key={work.id}>
                    <Icon className={work.icon_name}></Icon>
                    <PartTitle>{work.title}</PartTitle>
                    <Line className="line" />
                    <PartDesc>
                       {work.body}
                    </PartDesc>

                   
                </Part>
                )

            })
        return (
            <WorkSection className="work">
                <div className="container">
                    <WorkTitle className="work-title"><Span>My</Span> Work</WorkTitle>
                    {worksList}
                   
    
                    
                 
                    
                   
                    
                </div>
            </WorkSection>
        )

     }
  
}

export default Work;
