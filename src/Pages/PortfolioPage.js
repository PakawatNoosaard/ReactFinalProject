import React from 'react'
import Title from '../Components/Title'
import { MainLayout, InnerLayout } from "../styles/Layout"

const PortfolioPage = () => {
  return (
    <MainLayout>
      <InnerLayout>
              <Title title={'Portfolio'} span={'Portfolio'} />
      </InnerLayout>
    </MainLayout>
  )
}

export default PortfolioPage