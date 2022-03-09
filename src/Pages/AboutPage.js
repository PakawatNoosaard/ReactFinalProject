import React from 'react'
import Title from '../Components/Title'
import { MainLayout, InnerLayout } from "../styles/Layout"

const AboutPage = () => {
  return (
    <>
        <MainLayout>
            <InnerLayout>
              <Title title={'About me'} span={'Abput me'} />
            </InnerLayout>
        </MainLayout>
    </>
  )
}

export default AboutPage