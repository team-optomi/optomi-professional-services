import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import { FaLinkedin } from 'react-icons/fa'

class LeadershipSection extends Component {

    constructor(props) {
        super(props);
        this.state = { activeSlide: 0, activeCategory: 1 };
    }

    clickSelector(index) {
        let num = index;
        this.setState({ activeSlide: num});
    }

    clickCategory(cat_id) {
        let num = cat_id;
        this.setState({ activeCategory: num});
        if(cat_id === 1) {
            this.setState({ activeSlide: 0});
        }
        if(cat_id === 2) {
            this.setState({ activeSlide: 3});
        }
    }

    render() {
        const { data } = this.props; 

        return(
            <LeadershipFull>
                <LeadershipTop>
                    <div 
                        className={"flex-box"}
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                    >
                        <div className={"left-col"}>
                            <h2>Leadership</h2>
                        </div>
                        <div className={"right-col"}>
                            <p>We are a team of innovative thinkers, industry disruptors and refreshingly enterprising strategists influencing a more purpose-driven world.</p>
                        </div>
                    </div>
                </LeadershipTop>
                <LeadershipMenu className={1 === this.state.activeCategory ? "show-executives" : "show-leadership"}>
                        <LeadershipCategory>
                            <button class="executives-button" onClick={() => this.clickCategory(1)}>Executives</button>
                            <button class="leadership-button" onClick={() => this.clickCategory(2)}>Leadership</button>
                        </LeadershipCategory>
                    {data.allWordpressWpTeamMember.edges.map((post, i) => (
                        <LeadershipLink className={post.node.acf.team_category}>
                            <button id={"selector_" + i} onClick={() => this.clickSelector(i)} className={i === this.state.activeSlide ? "active" : "inactive"}  aria-label="Selector">{post.node.acf.menu_title}</button>
                        </LeadershipLink>
                    ))}
                </LeadershipMenu>
                <LeadershipSlider>
                    {data.allWordpressWpTeamMember.edges.map((post, i) => (
                        <LeadershipSlide id={"slide_" + i} className= {i === this.state.activeSlide ? "active" : "inactive"}>
                            <BackgroundImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
                            <BackgroundImgBW sizes={post.node.acf.gray_image.localFile.childImageSharp.sizes} alt={post.node.title} />
                            <div class={"slide-overlay"}>
                                <div class={"slide-row"} style={{justifyContent: post.node.acf.content_alignment}}>
                                    <div 
                                        class={"slide-content"}
                                        data-sal="slide-up"
                                        data-sal-duration="1000"
                                        data-sal-easing="ease"
                                    >
                                        <h3>{post.node.title}</h3>
                                        <p class={"full-title"}>{post.node.acf.full_title}</p>
                                        <hr/>
                                        <MemberCopy dangerouslySetInnerHTML={{ __html: post.node.content }}/>
                                        <hr/>
                                        <a href={post.node.acf.linkedin_link} target="_blank" rel="noopener noreferrer"><FaLinkedin/>LinkedIn</a>
                                    </div>
                                </div>
                            </div>
                        </LeadershipSlide>
                    ))}
                </LeadershipSlider>
            </LeadershipFull>
        );
    }
}

const LeadershipFull = styled.div`
    position: relative;
    z-index: 10;
`

const LeadershipTop = styled.div`
    background-color: #8b8f91;
    .flex-box {
        max-width: 1140px;
        width: 100%;
        padding: 60px 20px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        .left-col {
            margin-right: 30px;
            h2 {
                font-family: "Helvetica Thin";
                color: #fff;
                font-weight: normal;
                font-size: 55px;
                line-height: 55px;
                text-transform: capitalize;
                font-weight: 100;
                margin-bottom: 0;
                @media(max-width:1200px) {
                    font-size: 45px;
                    line-height: 1;
                }
            }
        }
        .right-col {
            p {
                font-family: "Helvetica Thin";
                color: #fff;
                font-size: 25px;
                line-height: 25px;
                margin-bottom: 0;
                @media(max-width:1200px) {
                    font-size: 22px;
                    line-height: 1.2;
                }
            }
        }
        @media(max-width:1200px) {
            max-width: 990px;
        }
        @media(max-width:950px) {
            display: block;
            .left-col {
                margin-right: 0;
            }
        }
    }
`

const LeadershipCategory = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #52555b;
    button {
        font-family: "Helvetica Thin";
        background-color: transparent;
        font-size: 28px;
        text-align: center;
        border: none;
        outline: 0;
        padding: 30px;
        color: #298fc2;
        position: relative;
        &:hover {
            cursor: pointer;
            background-color: #63666b;
        }
    }
`

const LeadershipLink = styled.div`
    background-color: #52555b;
    align-self: stretch;
    flex: 1;
    max-width: 250px;
    button {
        font-family: "Helvetica Thin";
        background-color: transparent;
        height: 100%;
        width: 100%;
        text-align: center;
        border: none;
        outline: 0;
        padding: 20px;
        color: #fff;
        position: relative;
        &:hover {
            cursor: pointer;
        }
        &.active {
            background-color: #8B8F8E;
            &:after {
                opacity: 1;
                visibility: visible;
            }
        }
        &:after {
            content: '';
            position: absolute;
            height: 28px;
            width: 52px;
            left: calc(50% - 26px);
            bottom: -20px;
            background: #8b8f91;
            display: inline-block;
            border-bottom-left-radius: 90px;
            border-bottom-right-radius: 90px;
            z-index: 1;
            opacity: 0;
            visibility: hidden;
        }
        @media(max-width:1200px) {
            font-size: 14px;
            line-height: 1.1;
            padding: 15px 10px;
        }
    }
    &:hover {
        background-color: #63666b;
    }
`

const LeadershipMenu = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: #52555b;
    @media(max-width:700px) {
        display: none;
    }
    &.show-executives {
        ${LeadershipCategory} {
            button {
                &.executives-button {
                    text-decoration: underline;
                }
            }
        }
        ${LeadershipLink} {
            &.leadership {
                display: none;
            }
        }
    }
    &.show-leadership {
        ${LeadershipCategory} {
            button {
                &.leadership-button {
                    text-decoration: underline;
                }
            }
        }
        ${LeadershipLink} {
            &.executives {
                display: none;
            }
        }
    }
`

const BackgroundImg = styled(Img)`
    height: 100vh;
    width: 100vw;
    transition-duration: 2s;
    img {
        margin-bottom: 0;
    }
    @media(max-width:1200px) {
        height: 80vh;
    }
    @media(max-width:700px) {
        height: 50vh;
        width: 50vw;
    }
    @media(max-width:550px) {
        height: 70vh;
        width: 100%;
    }
`

const BackgroundImgBW = styled(Img)`
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    position: absolute !important;
    opacity: 0;
    transition-duration: 2s;
    img {
        margin-bottom: 0;
    }
    @media(max-width:1200px) {
        height: 80vh;
    }
    @media(max-width:700px) {
        display: none !important;
    }
`

const LeadershipSlider = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    @media(max-width:1200px) {
        height: 80vh;
    }
    @media(max-width:700px) {
        height: auto;
        display: flex;
        flex-wrap: wrap;
    }
`

const MemberCopy = styled.div`
    @media(max-width:700px) {
        p {
            font-size: 14px;
            line-height: 1.1;
        }
    }
`

const LeadershipSlide = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: #000;
    @media(max-width:1200px) {
        height: 80vh;
    }
    .slide-overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: flex-end;
        background-color: rgba(0,0,0,.0);
        transition-duration: 1s;
        @media(max-width:1200px) {
            height: 80vh;
        }
        .slide-row {
            max-width: 1140px;
            width: 100%;
            padding-right: 20px;
            padding-left: 20px;
            margin: 0 auto;
            margin-bottom: 20vh;
            display: flex;
            @media(max-width:1200px) {
                max-width: 990px;
                margin-bottom: 10vh !important;
            }
            @media(max-width:1000px) {
                margin-bottom: 20px !important;
                justify-content: center !important;
            }
        }
        .slide-content {
            z-index: 1;
            transition-delay: 1s;
            width: 100%;
            padding: 20px;
            max-width: 540px;
            h3 {
                color: #fff;
                font-weight: 100;
                margin: 0;
                margin-bottom: 5px;
            }
            .full-title {
                font-family: "Helvetica Thin";
                color: #fff;
                font-size: 18px;
                line-height: 22px;
                margin-bottom: 0;
            }
            hr {
                margin-top: 15px;
                margin-bottom: 15px;
                background-color: #ffffff;
                height: 1px;
                width: 100%;
            }
            ${MemberCopy} {
                p {
                    font-family: "Helvetica Thin";
                    color: #fff;
                    margin-bottom: 0;
                }
            }
            a {
                font-family: "Helvetica Thin";
                color: #5ab3e8;
                text-decoration: none !important;
                display: flex;
                align-items: center;
                svg {
                    margin-right: 5px;
                }
            }
        }
    }
    &.active {
        opacity: 1;
        visibility: visible;
        .slide-overlay { 
            background-color: rgba(0,0,0,.6);
        }
        ${BackgroundImgBW} {
            opacity: 1;
        }
    }
    &.inactive {
        opacity: 0;
        visibility: hidden;
        .slide-overlay { 
            background-color: rgba(0,0,0,.0);
        }
        ${BackgroundImgBW} {
            opacity: 0;
        }
    }
    &:nth-child(2) {
        .slide-row {
            justify-content: flex-end;
        }
    }
    &:nth-child(3) {
        ${BackgroundImgBW},
        ${BackgroundImg} {
            img {
                object-position: center top !important;
            }
        }
    }
    &:nth-child(5) {
        ${BackgroundImgBW},
        ${BackgroundImg} {
            img {
                object-position: 65% 50% !important;
            }
        }
    }
    &:nth-child(7) {
        ${BackgroundImgBW},
        ${BackgroundImg} {
            img {
                object-position: 55% 50% !important;
            }
        }
    }
    &:nth-child(9) {
        ${BackgroundImgBW},
        ${BackgroundImg} {
            img {
                object-position: 60% 50% !important;
            }
        }
    }
    &:nth-child(12) {
        ${BackgroundImgBW},
        ${BackgroundImg} {
            img {
                object-position: 70% 50% !important;
            }
        }
    }
    @media(max-width:1000px) {
        &:nth-child(4) {
            ${BackgroundImgBW},
            ${BackgroundImg} {
                img {
                    object-position: right center !important;
                }
            }
        }
        &:nth-child(6) {
            ${BackgroundImgBW},
            ${BackgroundImg} {
                img {
                    object-position: 80% 50% !important;
                }
            }
        }
    }
    @media(max-width:700px) {
        position: relative;
        top: auto;
        left: auto;
        height: 50vh;
        width: 50%;
        overflow: hidden;
        &.inactive {
            opacity: 1;
            visibility: visible;
        }
        &:nth-child(11) {
            ${BackgroundImgBW},
            ${BackgroundImg} {
                img {
                    object-position: 70% 50% !important;
                }
            }
        }
        .slide-overlay {
            height: 50vh;
            width: 50vw;
            top: 50vh;
            background-color: rgba(0,0,0,.5) !important;
            text-align: center;
            .slide-content {
                transition-delay: .3s;
                hr,
                br,
                a {
                    display: none;
                }
            }
        }
        &:hover {
            .slide-overlay {
                top: 0;
            }
        }
    }
    @media(max-width:550px) {
        height: 70vh;
        width: 100%;
        .slide-overlay {
            height: 70vh;
            width: 100vw;
            top: 70vh;
            align-items: center;
            .slide-row {
                justify-content: center !important;
            }
        }
    }
`

export default props => (
    <StaticQuery
      query={graphql`
        query {
            allWordpressWpTeamMember(sort: {fields: date, order: DESC}) {
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
                            full_title
                            menu_title
                            linkedin_link
                            team_category
                            content_alignment
                            gray_image {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 2000) {
                                          ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
      `}
      render={data => <LeadershipSection data={data} {...props} />}
    />
  );