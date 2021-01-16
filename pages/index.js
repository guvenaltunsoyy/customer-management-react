import React  from 'react'

import Layout from '../components/layout'
import Home from '../components/homePage/homePage'
import TopBar from "../components/topBar/topBar";
import {StoreProvider} from "../store";

function HomePage() {

  return (
    <Layout>
        <TopBar/>
        <Home/>
    </Layout>
  )
}

export default HomePage
