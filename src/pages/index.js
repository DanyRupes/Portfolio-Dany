import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/images/image"
import SEO from "../components/seo"
import Project from '../components/projects/Projects'
import Quoten from "../components/Quoten/Quotes";
import Connector from "../components/Connector/Connector";
import { GiTemplarHeart} from 'react-icons/gi'
import { FiArrowUp} from 'react-icons/fi'
import Avatar from "../components/avatar/Avatar";
const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query getProjectsQuery{
    site {
      siteMetadata {
        projects {
          img_url
          description
          id  
        }
        TopIntro {
          image_url
          description
        }
        bottomQuote{
          head
          quote
        }
      }
    }
  }`)

  let all_data = data.site.siteMetadata

  return(
      
  <Layout>
  <SEO title="Dany Rupes" />

  <Avatar quote="God is my way" TopIntro={all_data.TopIntro}/>

  <Project projects={all_data.projects} />

  <Quoten  data={all_data.bottomQuote} />

  <Connector />

  <footer style={{textAlign:'center'}}>
        © {new Date().getFullYear()}, Made with <GiTemplarHeart /> of Jesus
        {/* {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> */}
  </footer>
  <a className="bottom-fab-a" href="#"><FiArrowUp  className="bottom-fab"/></a>
</Layout>
  )
}

export default IndexPage
