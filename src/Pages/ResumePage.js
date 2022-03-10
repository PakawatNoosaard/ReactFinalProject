import React from 'react'
import Title from '../Components/Title'
import { MainLayout, InnerLayout } from "../styles/Layout"
import styled from 'styled-components'
import Resume from '../Components/Resume'
import Skills from '../Components/Skill'


const ResumePage = () => {
  return (
    <>
    <ResumePageStyled>
        <MainLayout>
            <InnerLayout>
                <Skills/>
                <Resume/>
            </InnerLayout>
        </MainLayout>
    </ResumePageStyled>       
    </>
  )
}

const ResumePageStyled = styled.div`

`

export default ResumePage