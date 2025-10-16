import React from 'react'
import Layout from '../Components/Layout'
import HeaderBanner from '../Components/HeaderBanner'
import NewsCPNT from '../Components/NewsCPNT'

function News() {
  return (
   <Layout>
    <HeaderBanner title="News" image="banner5.jpg"/>
<NewsCPNT/>
   </Layout>
  )
}

export default News