import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const Section2020 = () => {
    
    const data = useStaticQuery(graphql`
        query {
            sectionData: wordpressWpCustomPage(wordpress_id: {eq: 668}) {
                acf {
                    timeline_2020_event
                    timeline_2020_award_one {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 211) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2020_award_two {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 267) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2020_logo {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 745) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2020_background {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 1920) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2020_bottom_border {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 1920) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    return(
        <MainSection>
            <div class="row-one">
                <div class="left-content">
                    <div 
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    class="top-year">
                        <h2 class="section-year">2020</h2>
                    </div>
                    <div 
                    data-sal="slide-right"
                    data-sal-duration="1000"
                    data-sal-delay="600"
                    data-sal-easing="ease"
                    class="left-awards">
                        <Img sizes={data.sectionData.acf.timeline_2020_award_one.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2020_award_one.title}/>
                        <Img sizes={data.sectionData.acf.timeline_2020_award_two.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2020_award_two.title}/>
                    </div>
                </div>
                <div class="right-content">
                    <div 
                    data-sal="slide-left"
                    data-sal-duration="1000"
                    data-sal-delay="900"
                    data-sal-easing="ease"
                    class="right-content-main">
                        <div class="right-logo">
                            <Img sizes={data.sectionData.acf.timeline_2020_logo.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2020_logo.title}/>
                        </div>
                        <div class="event">
                            <h3>{data.sectionData.acf.timeline_2020_event}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom-row">
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
                class="bottom-bg">
                    <Img sizes={data.sectionData.acf.timeline_2020_background.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2020_background.title}/>
                </div>
            </div>
            <div 
            data-sal="fade"
            data-sal-duration="1000"
            data-sal-delay="300"
            data-sal-easing="ease"
            class="border-bottom">
                <Img sizes={data.sectionData.acf.timeline_2020_bottom_border.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2020_bottom_border.title}/>
            </div>
        </MainSection>
    )

}

const MainSection = styled.section`
    background-color: #fff;
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    .row-one {
        display: flex;
        align-items: flex-start;
        @media(max-width:767px) {
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
        }
        .left-content {
            width: 50%;
            position: relative;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            @media(max-width:767px) {
                width: 100%;
            }
            h2 {
                font-family: "Helvetica Thin";
                color: #00385c;
                font-size: 180px;
                text-align: center;
                font-weight: 100;
                text-shadow: 15px 15px 12px rgba(0,0,0,.15);
                width: 100%;
                @media(max-width:1200px) {
                    font-size: 150px;
                }
                @media(max-width:1000px) {
                    font-size: 120px;
                }
                @media(max-width:767px) {
                    font-size: 72px;
                }
            }
            .left-awards {
                width: 100%;
                display: flex;
                justify-content: center;
                margin-bottom: 60px;
                @media(max-width:767px) {
                    margin-bottom: 20px;
                    flex-wrap: wrap;
                }
                .gatsby-image-wrapper:nth-child(1) {
                    max-width: 130px;
                    width: 100%;
                    margin: 0 25px;
                    @media(max-width:767px) {
                        max-width: 100px;
                        margin: 20px;
                    }
                }
                .gatsby-image-wrapper:nth-child(2) {
                    max-width: 180px;
                    width: 100%;
                    margin: 0 25px;
                    img {
                        object-fit: contain !important;
                    }
                    @media(max-width:767px) {
                        max-width: 130px;
                        margin: 20px;
                    }
                }
            }
        }
        .right-content {
            width: 50%;
            position: relative;
            z-index: 1;
            @media(max-width:767px) {
                width: 100%;
            }
            .right-content-main {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 3;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                .right-logo {
                    max-width: 500px;
                    width: 100%;
                    margin: 0 auto;
                    margin-top: -100px;
                    margin-bottom: 60px;
                    @media(max-width:1000px) {
                        max-width: 250px;
                        margin-top: 40px;
                    }
                    @media(max-width:767px) {
                        max-width: 180px;
                        margin-top: 0;
                        margin-left: 0;
                        margin-bottom: 0;
                    }
                }
                .event {
                    background-color: #00385c;
                    padding: 10px 50px;
                    box-shadow: 20px 20px 20px rgba(0,0,0,.5);
                    width: 80%;
                    margin-left: auto;
                    position: relative;
                    @media(max-width:1000px) {
                        width: 100%;
                        padding: 10px 20px;
                        margin-top: -20px;
                    }
                    @media(max-width: 767px) {
                        max-width: 400px;
                        margin-top: 0;
                        margin-right: auto;
                    }
                    h3 {
                        font-family: "Helvetica Thin";
                        font-weight: 100;
                        letter-spacing: 2px;
                        color: #fff ;
                        line-height: 1.3;
                        margin-top: 0;
                        margin-bottom: 0;
                        text-align: center;
                        @media(max-width:1000px) {
                            font-size: 20px;
                        }
                        @media(max-width:767px) {
                            font-size: 18px;
                        }
                    }
                }
            }
        }
    }
    .bottom-row {
        .bottom-bg {
            
        }
    }
    .border-bottom {
        padding-top: 80px;
    }
`

export default Section2020