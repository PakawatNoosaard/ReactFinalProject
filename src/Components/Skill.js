import React from 'react'
import styled from 'styled-components';
import {InnerLayout, MainLayout, } from '../styles/Layout'
import Title from '../Components/Title'
import ProgressBar from './Progressbar'

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'HTML5'}
                            width={'50%'}
                            text={'50%'}
                        />
                        <ProgressBar 
                            title={'CSS3'}
                            width={'50%'}
                            text={'50%'}
                        />
                        <ProgressBar 
                            title={'JAVASCRIPT'}
                            width={'50%'}
                            text={'50%'}
                        />
                        <ProgressBar 
                            title={'JAVA'}
                            width={'50%'}
                            text={'50%'}
                        />
                        <ProgressBar 
                            title={'KALI Linux'}
                            width={'30%'}
                            text={'30%'}
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                            title={'Problem Solving'}
                            width={'50%'}
                            text={'50%'}
                        />
                        <ProgressBar
                             title={'Fast Learner'}
                             width={'45%'}
                             text={'45%'}
                        />

                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
