import React from 'react'
import Layout from '../Components/Layout'
import HomeSlider from '../Components/HomeSlider'
import Services from '../Components/Services'
import RoomsCPNT from '../Components/RoomsCPNT'
import CTABanner from '../Components/CTABanner'
import NewsCPNT from '../Components/NewsCPNT'
import MediaSlider from '../Components/MediaSlider'
import EventsInfo from '../Components/EventsInfo'
function Home() {
  return (
    <>
    <Layout>
        <HomeSlider/>
        <Services/>
        <RoomsCPNT/>
        <CTABanner/>
        <NewsCPNT/>
        <MediaSlider/>
        <EventsInfo/>
    </Layout>
    </>
  )
}

export default Home