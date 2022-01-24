import axios from 'axios';
import React , {useState , useEffect} from 'react';
import './Style.js';
import {SocialmediaSection , Social , Icon , SocialInfo , Span} from './Style.js'

 function SocialMedia() {

    const [social, setsocial] = useState([]);
    useEffect(() => {
        axios.get('js/data.json').then(res => {
            setsocial(res.data.social)
        })
    }, [])

    const SocailInfo = social.map(data => {
        return(
            <Social
             key={data.id} item ={data.id}>
            <Icon className={data.icon}></Icon>
            <SocialInfo>
                <Span>{data.title}</Span>
                <Span info2>{data.body}</Span>
            </SocialInfo>
        </Social>
        )
    })
    return (
        <SocialmediaSection>
            
           {SocailInfo}
        </SocialmediaSection>
    )
}

export default SocialMedia;
