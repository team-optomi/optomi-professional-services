import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ClientsSlider from "../components/impact-sliders/clients-slider"
import ConsultantsSlider from "../components/impact-sliders/consultants-slider"
import EmployeeSlider from "../components/impact-sliders/employee-slider"
import CommunitiesSlider from "../components/impact-sliders/communities-slider"
import ChildrenSlider from "../components/impact-sliders/children-slider"

const ImpactPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 35}}}}) {
                edges {
                    node {
                        title
                        content
                        featured_media {
                            localFile {
                                childImageSharp {
                                    sizes(maxWidth: 2000) {
                                        ...GatsbyImageSharpSizes
                                    }
                                }
                            }
                        }
                        acf {
                            impact_hero_section_heart {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1200) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            impact_section_one_content
                            impact_section_one_main_image {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1200) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            impact_section_two_content
                            impact_section_two_main_image {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1200) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            impact_section_three_content
                            impact_section_three_main_image {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1200) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            impact_section_four_content
                            impact_section_four_main_image {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1200) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            impact_section_five_content
                            impact_section_five_main_image {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1200) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            meta_title
                            meta_description
                        }
                    }
                }
            }
        }
    `)

    return(
        
        data.allWordpressWpCustomPage.edges.map(post => (
            <Layout>
                <SEO 
                title={post.node.acf.meta_title} 
                description={post.node.acf.meta_description}
                image={post.node.featured_media.localFile.childImageSharp.sizes}
                />
                <HeroSection>
                    <div class="hero-background">
                        <BackgroundImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
                    </div>
                    <div class="hero-content">
                        <h1
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        style={{transitionDelay: '.3s'}}
                        >We are <br/><span>Serving</span></h1>
                        <p 
                        data-sal="fade"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        style={{transitionDelay: '.9s'}}
                        class="hero-main">We are all <span>influencing</span> the world around us.
                        Through OPS, we’re on a mission to make
                        a <span>positive impact</span> on...</p>
                        <div class="hero-keywords">
                        <p
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        style={{transitionDelay: '1.5s'}}
                        >clients</p>
                        <p
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        style={{transitionDelay: '2s'}}
                        >consultants</p>
                        <p
                        data-sal="slide-left"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        style={{transitionDelay: '2.5s'}}
                        >employees</p>
                        <p
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        style={{transitionDelay: '3s'}}
                        >communities</p>
                        <p
                        data-sal="slide-left"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        style={{transitionDelay: '3.5s'}}
                        >children</p>
                        </div>
                    </div>
                    <div class="heart-container">
                        <div 
                        data-sal="slide-left"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        style={{transitionDelay: '.6s'}}
                        class="heart-image">
                            <Img sizes={post.node.acf.impact_hero_section_heart.localFile.childImageSharp.sizes} alt={post.node.acf.impact_hero_section_heart.title} />             
                        </div>
                    </div>
                </HeroSection>
                <MainSection>
                    <div class="main-row">
                        <div 
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        style={{transitionDelay: '.6s'}}
                        class="main-content">
                            <div dangerouslySetInnerHTML={{ __html: post.node.acf.impact_section_one_content }} />
                        </div>
                        <div 
                        data-sal="slide-left"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        style={{transitionDelay: '1.2s'}}
                        class="main-image">
                            <Img sizes={post.node.acf.impact_section_one_main_image.localFile.childImageSharp.sizes} alt={post.node.acf.impact_section_one_main_image.title} />
                        </div>   
                    </div>
                    <div
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    style={{transitionDelay: '.6s'}}
                    class="slider-row">
                        <ClientsSlider/>
                    </div>
                </MainSection>

                <MainSection>
                    <div class="main-row">
                        <div 
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        style={{transitionDelay: '.6s'}}
                        class="main-image">
                            <Img sizes={post.node.acf.impact_section_two_main_image.localFile.childImageSharp.sizes} alt={post.node.acf.impact_section_two_main_image.title} />
                        </div> 
                        <div 
                        data-sal="slide-left"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        style={{transitionDelay: '1.2s'}}
                        class="main-content">
                            <div dangerouslySetInnerHTML={{ __html: post.node.acf.impact_section_two_content }} />
                        </div>  
                    </div>
                    <div
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    style={{transitionDelay: '.6s'}}>
                        <ConsultantsSlider />
                    </div>
                </MainSection>

                <MainSection>
                    <div class="main-row">
                        <div 
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        style={{transitionDelay: '.6s'}}
                        class="main-content">
                            <div dangerouslySetInnerHTML={{ __html: post.node.acf.impact_section_three_content }} />
                        </div>
                        <div 
                        data-sal="slide-left"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        style={{transitionDelay: '1.2s'}}
                        class="main-image">
                            <Img sizes={post.node.acf.impact_section_three_main_image.localFile.childImageSharp.sizes} alt={post.node.acf.impact_section_three_main_image.title} />
                        </div>   
                    </div>
                    <div
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    style={{transitionDelay: '.6s'}}>
                        <EmployeeSlider />
                    </div>
                </MainSection>

                <MainSection>
                    <div class="main-row">
                        <div 
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        style={{transitionDelay: '.6s'}}
                        class="main-image">
                            <Img sizes={post.node.acf.impact_section_four_main_image.localFile.childImageSharp.sizes} alt={post.node.acf.impact_section_four_main_image.title} />
                        </div>   
                        <div 
                        data-sal="slide-left"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        style={{transitionDelay: '1.2s'}}
                        class="main-content">
                            <div dangerouslySetInnerHTML={{ __html: post.node.acf.impact_section_four_content }} />
                        </div>
                    </div>
                    <div
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    style={{transitionDelay: '.6s'}}>
                        <CommunitiesSlider />
                    </div>    
                </MainSection>

                <MainSection>
                    <div class="main-row">
                        <div 
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        style={{transitionDelay: '.6s'}}
                        class="main-content">
                            <div dangerouslySetInnerHTML={{ __html: post.node.acf.impact_section_five_content }} />
                        </div>
                        <div 
                        data-sal="slide-left"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        style={{transitionDelay: '1.2s'}}
                        class="main-image">
                            <Img sizes={post.node.acf.impact_section_five_main_image.localFile.childImageSharp.sizes} alt={post.node.acf.impact_section_five_main_image.title} />
                        </div>   
                    </div>
                    <div
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    style={{transitionDelay: '.6s'}}>
                        <ChildrenSlider />
                    </div>
                </MainSection>
            </Layout>
        ))
    )
}

const HeroSection = styled.section`
    position: relative;
    height: 100vh;
    width: 100%;
    .hero-background {
        position: absolute;
        height: 100vh;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        &:after {
            content: '';
            position: absolute;
            height: 100vh;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 2;
            background-color: rgba(0,0,0, .5);
        }
    }
    .hero-content {
        position: relative;
        z-index: 3;
        padding-top: 100px;
        padding-left: 100px;
        h1 {
            font-family: "Helvetica Thin";
            color: #fff;
            font-size: 77px;
            font-weight: 100;
            span {
                font-family: Freeland;
                color: rgb(90, 179, 232);
                font-size: 72px;
                line-height: 52px;
                font-weight: 100;
                padding-left: 200px;
            }
        }
        p.hero-main {
            font-family: "Helvetica Thin";
            color: #fff;
            font-size: 32px;
            font-weight: 400;
            padding-top: 20px;
            max-width: 600px;
            line-height: 1.2;
            span {
                color: rgb(90, 179, 232);
            }
        }
        .hero-keywords {
            p {
                font-family: "Helvetica Thin";
                font-size: 56px;
                font-weight: 400;
                line-height: 1;
                margin-bottom: 5px;
                &:nth-child(1) {
                    color: rgb(139, 143, 145);
                    padding-left: 100px;
                }
                &:nth-child(2) {
                    color: rgb(90, 179, 232);
                    padding-left: 320px;
                }
                &:nth-child(3) {
                    color: #fff;
                    padding-left: 660px;
                }
                &:nth-child(4) {
                    color: #734c28;
                    padding-left: 60px;
                }
                &:nth-child(5) {
                    color: rgb(139, 143, 145);
                    padding-left: 460px;
                }
            }
        }
    }
    .heart-container {
        position: absolute;
        top: 50px;
        right: -20%;
        width: 55%;
        z-index: 4;
        .heart-image {
            
        }
    }
    
`

const BackgroundImg = styled(Img)`
    height: 100vh;
    width: 100%;
`

const MainSection = styled.section`
    background-color: #fff;
    .main-row {
        display: flex;
        max-height: 500px;
        width: 100%;
        > div {
            width: 50%;
        }
        .main-image {
            .gatsby-image-wrapper {
                height: 100%;
            }
        }
        .main-content {
            padding: 40px;
            transition-delay: .6s;
            display: flex;
            align-items: center;
            p {
                font-family: "Helvetica Thin";
                font-size: 32px;
                font-weight: 400;
                line-height: 1.2;
            }
            .gatsby-image-wrapper {
                max-width: 200px !important;
                img {
                    max-width: 200px;
                    width: 100% !important;
                    height: auto !important;
                    object-fit: contain !important;
                }
            }
        }
    }
    .gallery-row {
        display: flex;
        height: 400px;
        .gatsby-image-wrapper {
            height: 100%;
            width: 33.33%;
        }
    }
    &:nth-child(2) {
        background-color: #6b6e6e;
        .main-row {
            .main-content {
                justify-content: flex-end;
                p {
                    color: #fff;
                    text-align: right;
                    span {
                        color: rgb(90,179,232);
                    }
                }
            }
        }
    }
    &:nth-child(3) {
        background-color: #454545;
        .main-row {
            .main-content {
                justify-content: flex-start;
                p {
                    color: #fff;
                    span {
                        color: rgb(90,179,232);
                    }
                }
            }
        }
    }
    &:nth-child(4) {
        background-color: #000;
        .main-row {
            .main-content {
                justify-content: flex-end;
                p {
                    color: #fff;
                    text-align: right;
                    span {
                        color: rgb(90,179,232);
                    }
                }
            }
        }
    }
    &:nth-child(5) {
        background-color: #878a8c;
        .main-row {
            .main-content {
                p {
                    color: #fff;
                    span {
                        color: #ab2831;
                    }
                }
            }
        }
    }
    &:nth-child(6) {
        background-color: #282b2b;
        .main-row {
            .main-content {
                justify-content: flex-end;
                p {
                    color: #fff;
                    text-align: right;
                    span {
                        color: rgb(90,179,232);
                    }
                }
            }
        }
    }
    @media(max-width: 1540px) {
        &:nth-child(4) {
            .main-row {
                .main-content {
                    p {
                        br {
                            display: none;
                        }
                    }
                }
            }
        }
    }
    @media(max-width:1250px) {
        .main-row {
            .main-content {
                h2 {
                    font-size: 44px;
                    line-height: 1;
                    margin-top: -20px;
                }
                p {
                    br {
                        display: none;
                    }
                }
                .gatsby-image-wrapper {
                    max-width: 150px !important;
                    img {
                        max-width: 150px;
                    }
                }
            }
        }
    }
    @media(max-width:767px) {
        .main-row {
            flex-wrap: wrap;
            > div {
                &.main-content {
                    width: 100%;
                    order: 1;
                }
                &.main-image {
                    width: 100%;
                    order: 2;
                }
            }
        }
        .gallery-row {
            background-color: #000;
            flex-wrap: wrap;
            justify-content: center;
            .gatsby-image-wrapper {
                width: 50%;
            }
        }
        &:nth-child(5) {
            .gallery-row {
                .gatsby-image-wrapper {
                    &:nth-child(2) {
                        order: 5;
                        width: 100%;
                    }
                }
            }
        }
        &:nth-child(6) {
            .gallery-row {
                .gatsby-image-wrapper {
                    &:nth-child(3) {
                        width: 100%;
                    }
                }
            }
        }
    }
    @media(max-width:440px) {
        .main-row {
            .main-content {
                padding: 40px 20px;
            }
        }
    }
`

export default ImpactPage