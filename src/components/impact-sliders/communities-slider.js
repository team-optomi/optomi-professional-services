import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import Slider from "react-slick"
import styled from 'styled-components'

const CommunitiesSlider = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 35}}}})  {
                edges {
                    node {
                        acf {
                            impact_section_four_gallery {
                                title
                                localFile {
                                    childImageSharp {
                                        fluid(maxWidth: 800, quality: 100) {
                                            ...GatsbyImageSharpFluid_withWebp
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        focusOnSelect: true,
        centerMode: true,
        responsive: [
            {
            breakpoint: 500,
            settings: {
                focusOnSelect: false,
                centerMode: false,
            }
            }
        ]
    };
    
    return (
        data.allWordpressWpCustomPage.edges.map(post => (
        <SliderContainer className={"our-work-slider"}>
            <Slider {...settings}>
            {post.node.acf.impact_section_four_gallery.map(imageSrc => (
            <OurWorkSlide>
                <div class="work-image-bg">
                    <Img fluid={imageSrc.localFile.childImageSharp.fluid} alt={imageSrc.title} />
                </div>
            </OurWorkSlide> 
            ))}
            </Slider>
        </SliderContainer>
        ))
    );
}

const OurWorkSlide = styled.div`
    padding: 0px;
    position: relative;
    outline: 0;
    .work-image-bg {
      height: 450px;
      width: 100%;
      .gatsby-image-wrapper {
        height: 100%;
        img {
            margin-bottom: 0;
        }
      }
    }
    @media(max-width:767px) {
      .work-image-bg {
        height: 350px;
      }
    }  
    @media(max-width:500px) {
      .work-image-bg {
        height: 250px;
      }
    } 
`

const SliderContainer = styled.div`
    width: 100%;
    max-width: 100%;
    height: 450px;
    margin: 0 auto;
    .slick-prev {
      height: 35px;
      width: 35px;
      border-top: 8px solid #000;
      border-left: 8px solid #000;
      color: transparent;
      z-index: 10;
      transform: rotate(-45deg);
      left: 0;
      &:before {
        display: none;
      }
    }
    .slick-next {
      height: 35px;
      width: 35px;
      border-top: 8px solid #000;
      border-right: 8px solid #000;
      color: transparent;
      z-index: 10;
      transform: rotate(45deg);
      right: 0;
      &:before {
        display: none;
      }
    }
    .slick-slider {
      max-width: 770px;
      width: 100%;
      margin: 0 auto;
      overflow: visible;
    }
    .slick-list{
      padding: 0;
      overflow: visible;
    }
    .slick-slide {
      width: 100%;
      transition-duration: .3s;
      outline: 0 !important;
      margin-bottom: -7px;
      > div {
          height: 100%;
      }
      &:not(.slick-active) {
        &:hover {
          cursor: pointer;
        }
      }
      &.slick-active {
        ${OurWorkSlide} {
          .work-image-overlay {
            opacity: 1;
            h3 {
              opacity: 1;
              left: 0;
              visibility: visible;
            }
            a {
              opacity: 1;
              left: 0;
              visibility: visible;
            }
          }
        }
      }
    }
  @media(max-width:767px) {
    height: 300px;
    .slick-slide {
      &.slick-active {
        ${OurWorkSlide} {
          .work-image-overlay {
            opacity: 1;
            h3 {
              opacity: 1;
              left: 0;
            }
            a {
              opacity: 1;
              left: 0;
            }
          }
        }
      }
    }
  }
  @media(max-width:500px) {
    .slick-list{
      padding: 0 !important;
      overflow: visible;
    }
    .slick-prev {
      left: 10px;
    }
    .slick-next {
      right: 10px;
    }
  }  
`

export default CommunitiesSlider