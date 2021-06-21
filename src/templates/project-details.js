import React from "react";
import Img from "gatsby-image";
import Layout from "../components/layout/layout.component";
import '../styles/global.css';
import { graphql } from 'gatsby';

const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className="details">
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className="featured">
          <Img fluid={featuredImg.childImageSharp.fluid} />
        </div>
        <div className="styles.html" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export default ProjectDetails;

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
