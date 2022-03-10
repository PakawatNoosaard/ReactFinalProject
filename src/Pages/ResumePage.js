import React from 'react'
import Title from '../Components/Title'
import { MainLayout, InnerLayout } from "../styles/Layout"


const ResumePage = () => {
  return (
    <>
    <MainLayout>
            <InnerLayout>
              <Title title={'Resume'} span={'Resume'} />
            </InnerLayout>
    </MainLayout>
        
    </>
  )
}

export default ResumePage