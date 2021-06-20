import React from "react";
import { Link,graphql } from 'gatsby';
import Layout from "../components/layout/layout.component";
import  '../styles/global.css';
import Img from "gatsby-image"

export default function Home({data}) {

  // const {title,description} = data.site.siteMetadata;

  return (
    <Layout>
      <section className="header">
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className="btn" to="/projects">My Portfolio Projects</Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
        {/*<p>{title} - {description}</p>*/}
      </section>
    </Layout>
  )
}

// export const query = graphql`
//   query SiteInfo {
//     site {
//       siteMetadata {
//         description
//         title
//       }
//     }
//   }
// `

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "banner.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
