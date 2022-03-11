import React from 'react';
import styled from 'styled-components';
import SchoolIcon from '@material-ui/icons/School';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SmallTitle from '../Components/SmallTitle';
import Title from '../Components/Title';
import {InnerLayout} from '../styles/Layout';
import ResumeItem from '../Components/ResumeItem'
import ReactTypingEffect from 'react-typing-effect'

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'Resume'} />
            <InnerLayout>
                <div className="small-title u-small-title-margin">
                <ReactTypingEffect text={['Education']} speed={80} eraseDelay={200} className="typingeffect" />
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2006-2011'} 
                        title={'Junior High School'}
                        subTitle={'Banbangkaphi School'}
                        text={'Scine-Math'} 
                    />
                    <ResumeItem 
                        year={'2011-2017'} 
                        title={'High School'}
                        subTitle={'Nawamintarachinutit Benjamarachalai School'}
                        text={'Business-Eng'} 
                    />
                    <ResumeItem 
                        year={'2018-2022'} 
                        title={'Bachelor'}
                        subTitle={'Thai-Nichi Institue of Technology'}
                        text={'Faculty of Information Technology '}
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }
    .resume-content{
        border-left: 2px solid var(--border-color);
    }

    .typingeffect {
        text-decoration: bolder;
        font-size: 50px;
      }

`;
export default Resume