import React , {useState , useEffect} from 'react';
import './Style.js';
import axios  from 'axios';
import {ProfileSkills , ProfileSection ,ProfileTitle ,ProfileSpan, SkillsTitle,Skills,
    ProfileItemSpan, ProfileItem,
     SkillsSpan,ProfileList ,SkillsDesc , Bar , BarTitle , BarPerc , Parent ,
     ParentSpan} from './Style.js'

     const Profile = () => {

    const [data , setData] = useState([]);
//   const [skills, setskills] = useState([])

    useEffect(() => {
        axios.get('js/data.json')
        .then((res) => setData(res.data.profile))
    },[])
    

    const profileInfo = data.map(info => {
        return(
            <ProfileList key={info.id} className="profile-list">
            <ProfileItem>
                <ProfileItemSpan>Name</ProfileItemSpan>
               {info.name}
            </ProfileItem>
            <ProfileItem>
                <ProfileItemSpan>Birthday</ProfileItemSpan>
               {info.birthday}
            </ProfileItem>
            <ProfileItem>
                <ProfileItemSpan>Address</ProfileItemSpan>
               {info.address}
            </ProfileItem>
            <ProfileItem>
                <ProfileItemSpan>Phone</ProfileItemSpan>
               {info.phone}
            </ProfileItem>
            <ProfileItem>
                <ProfileItemSpan>Email</ProfileItemSpan>
                {info.email}
            </ProfileItem>
            <ProfileItem>
                <ProfileItemSpan>Website</ProfileItemSpan>
                <ProfileItemSpan web >{info.website}</ProfileItemSpan>
            </ProfileItem>
        </ProfileList>
        )
    }
    )
    return (
        <ProfileSkills className="profile_skills">
            <div className="container">
                <ProfileSection className="profile">
                    <ProfileTitle className="profile-title"><ProfileSpan>My </ProfileSpan>Profile</ProfileTitle>
                    {profileInfo}
                </ProfileSection>
                <Skills className="skills">
                    <SkillsTitle className="skills-title">Some <SkillsSpan>skills</SkillsSpan></SkillsTitle>
                    <SkillsDesc className="skills-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>

                    <Bar className="bar">
                        <BarTitle className="title">Photoshop</BarTitle>
                        <BarPerc className="perc">100%</BarPerc>
                        <Parent className="parent">
                            <ParentSpan spa1> </ParentSpan>
                        </Parent>
                    </Bar>
                    <Bar className="bar">
                        <BarTitle className="title">Css</BarTitle>
                        <BarPerc className="perc">90%</BarPerc>
                        <Parent className="parent">
                            <ParentSpan spa2> </ParentSpan>
                        </Parent>
                    </Bar>
                    <Bar className="bar">
                        <BarTitle className="title">JavaScript</BarTitle>
                        <BarPerc className="perc">80%</BarPerc>
                        <Parent className="parent">
                            <ParentSpan spa3> </ParentSpan>
                        </Parent>
                    </Bar>
                  
                </Skills>
                
            </div>
        </ProfileSkills>
    )
}

export default Profile;
