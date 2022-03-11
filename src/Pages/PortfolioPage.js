import React from 'react'
import Port from '../Components/Port'
import Title from '../Components/Title'
import { MainLayout, InnerLayout } from "../styles/Layout"

const PortfolioPage = () => {
  return (
    <MainLayout>
      <InnerLayout>
              <Title title={'Portfolio'} span={'Portfolio'} />
              <Port/>
      </InnerLayout>
    </MainLayout>
  )
}

export default PortfolioPage