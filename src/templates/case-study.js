import React from "react"
import BlogLayout from "../components/blog-layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styled from 'styled-components'


const CaseStudy = ({ data }) => (
    <BlogLayout>
      <SEO 
        title={data.wordpressWpCaseStudy.acf.meta_title} 
        description={data.wordpressWpCaseStudy.acf.meta_description}
        image={data.wordpressWpCaseStudy.featured_media.localFile.childImageSharp.sizes}
        />
      <MainArticle
        className="case-study"
        itemScope
        itemType="http://schema.org/Article"
      >
        <MainHeader>
          <Img sizes={data.wordpressWpCaseStudy.featured_media.localFile.childImageSharp.sizes} className={data.wordpressWpCaseStudy.featured_media.title} />
          <h1 itemProp="headline"><span class="bold">Client: </span>{data.wordpressWpCaseStudy.title}</h1>
        </MainHeader>
        <MainSection itemProp="articleBody">
          <div class="section-one">
            <div class="flex-row">
              <div class="overview" dangerouslySetInnerHTML={{ __html: data.wordpressWpCaseStudy.acf.case_study_section_one.case_study_overview }} />
              <div class="services" dangerouslySetInnerHTML={{ __html: data.wordpressWpCaseStudy.acf.case_study_section_one.case_study_skillsets }} />
            </div>
          </div>
          <div class="section-two">
            <div class="section-two-copy" dangerouslySetInnerHTML={{ __html: data.wordpressWpCaseStudy.acf.case_study_section_two }} />
          </div>
          <div class="section-three">
            <div class="section-three-copy" dangerouslySetInnerHTML={{ __html: data.wordpressWpCaseStudy.acf.case_study_section_three }} />
          </div>
        </MainSection>

      </MainArticle>
    </BlogLayout>
)

const MainArticle = styled.article`
  
`

const MainHeader = styled.header`
position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .gatsby-image-wrapper {
    position: absolute !important;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }
  &:before {
    content: '';
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0, .7);
    z-index: 2;
  }
  h1 {
    position: relative;
    font-family: "Helvetica Thin";
    letter-spacing: 2px;
    max-width: 840px;
    width: 100%;
    padding: 0 20px;
    text-align: center;
    color: #fff;
    z-index: 3;
  }
`

const MainSection = styled.section`
  .section-one {
    background-color: rgb(82, 85, 91);
    padding: 100px 20px;
    .flex-row {
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      .overview {
        width: 70%;
        padding-right: 50px;
        h2 {
            font-family: "Helvetica Thin";
            color: rgb(97, 177, 232);
            font-size: 35px;
            line-height: 35px;
            letter-spacing: 2px;
        }
        p {
            font-family: "Helvetica Thin";
            color: rgb(255, 255, 255);
            letter-spacing: 1px;
            font-size: 20px;
            line-height: 25px;
            margin-bottom: 20px;
        }
      }
      .services {
        width: 30%;
        h2 {
            font-family: "Helvetica Thin";
            color: rgb(97, 177, 232);
            font-size: 35px;
            line-height: 35px;
            letter-spacing: 2px;
        }
        h3 {
            font-family: "Helvetica Thin";
            color: #fff;
            font-size: 20px;
            line-height: 1.2;
        }
        > div {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
            img {
                max-height: 50px;
                max-width: 50px;
                object-fit: contain !important;
                margin-right: 20px;
            }
        }
      }
    }
  }
  .section-two {
    background-color: #fff;
    padding: 100px 20px;
    > div {
      max-width: 800px;
      width: 100%;
      margin: 0 auto;
      h2 {
        font-family: "Helvetica Thin";
            color: rgb(97, 177, 232);
            font-size: 35px;
            line-height: 35px;
            letter-spacing: 2px;
      }
      h3 {
        font-family: "Helvetica Thin";
        color: #000;
        font-size: 24px;
        line-height: 1.2;
        letter-spacing: 2px;
      }
      p, ul {
        font-family: "Helvetica Thin";
            color: #000;
            letter-spacing: 1px;
            font-size: 20px;
            line-height: 25px;
            margin-bottom: 20px;
      }
      ul {
        margin-left: 20px;
      }
      .gatsby-image-wrapper {
        margin: 0 auto;
        display: block;
      }
    }
  }
  .section-three {
    background-color: #000;
    padding: 100px 20px;
    > div {
      max-width: 800px;
      width: 100%;
      margin: 0 auto;
      > div {
        background-color: rgb(82, 85, 91);
        padding: 20px;
        margin-top: 35px;
      }
      h2 {
        font-family: "Helvetica Thin";
        color: rgb(97, 177, 232);
        font-size: 35px;
        line-height: 35px;
        letter-spacing: 2px;
      }
      h3 {
        font-family: "Helvetica Thin";
        color: #fff;
        font-size: 24px;
        line-height: 1.2;
        letter-spacing: 2px;
      }
      p, ul {
        font-family: "Helvetica Thin";
            color: rgb(255, 255, 255);
            letter-spacing: 1px;
            font-size: 20px;
            line-height: 25px;
            margin-bottom: 20px;
      }
      ul {
        margin-left: 20px;
      }
      .gatsby-image-wrapper {
        margin: 0 auto;
        display: block;
      }
      .back-button {
        a {
          display: block;
          font-family: "Kessel Light";
          width: 180px;
          text-align: center;
          margin: 20px auto;
          background-color: #0b283a;
          color: #fff;
          text-decoration: none;
          padding: 10px 0;
          letter-spacing: 1px;
        }
      }
    }
  }
  @media(max-width:767px) {
    .section-one {
      .flex-row {
        flex-wrap: wrap;
        .overview,
        .services {
          width: 100%;
          padding-right: 0;
        }
      }
    }
  }
`

export default CaseStudy

export const query = graphql`
query($id: Int!) {
  wordpressWpCaseStudy(wordpress_id: { eq: $id }) {
      title
      featured_media {
        title
        localFile {
            childImageSharp {
                sizes(maxWidth: 2000) {
                    ...GatsbyImageSharpSizes
                }
            }
        }
      }
      acf {
        meta_title
        meta_description
        case_study_section_one {
            case_study_overview
            case_study_skillsets
        }
        case_study_section_two
        case_study_section_three
      }
    }
  }
`