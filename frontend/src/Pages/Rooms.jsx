import React from 'react'
import Layout from '../Components/Layout'
import HeaderBanner from '../Components/HeaderBanner'
import RoomsCPNT from '../Components/RoomsCPNT'
import Services from '../Components/Services'
function Rooms() {
  return (
   <>
   <Layout>
    <HeaderBanner title="Rooms" image="banner.jpg"/>
    <RoomsCPNT/>
    <Services/>
   </Layout>
   
   </>
  )
}

export default Rooms