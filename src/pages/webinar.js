import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import Modal from 'react-modal';
import SEO from "../components/seo"
import WebinarLayout from "../components/webinar-layout"
import RegisterForm from "../components/register-form"

class WebinarPage extends Component {
    constructor () {
      super();
      this.state = {
        showModal: false
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }
    
    render () {
        const { data } = this.props; 
        
        return (
            <WebinarLayout>
                {data.allWordpressWpCustomPage.edges.map(post => (
                    <div>
                        <SEO 
                        title={post.node.acf.meta_title} 
                        description={post.node.acf.meta_description}
                        image={post.node.featured_media.localFile.childImageSharp.sizes}
                        />
                        <div
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        >
                            <WebinarImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
                        </div>
                        <WebinarMain 
                        data-sal="zoom-in"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        dangerouslySetInnerHTML={{ __html: post.node.content }}/>
                        <PresentedBy
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        >presented by {post.node.acf.presented_by}</PresentedBy>
                        <RegisterButton
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        >
                            <button onClick={this.handleOpenModal} aria-label="Register Button">Click Here to Register<br/><span>(Free)</span></button>
                        </RegisterButton>
                        <WebinarSub dangerouslySetInnerHTML={{ __html: post.node.acf.sub_info }}/>
                        <WebinarDate
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        >
                            <p>{post.node.acf.event_date}</p>
                        </WebinarDate>
                        <DotDivider
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        >
                            <div></div>
                            <div></div>
                            <div></div>
                        </DotDivider>
                        <WebinarBio>
                            <p 
                            data-sal="fade"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            class={"featuring"}>Featuring</p>
                            <h2
                            data-sal="zoom-in"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >{post.node.acf.speaker_name}</h2>
                            <hr
                            data-sal="zoom-in"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            />
                            <h3
                            data-sal="zoom-in"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >{post.node.acf.speaker_title}</h3>
                            <div
                            data-sal="fade"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                            <SpeakerImg sizes={post.node.acf.speaker_image.localFile.childImageSharp.sizes} alt={post.node.acf.speaker_name} />
                            </div>
                            <p 
                            data-sal="slide-up"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            dangerouslySetInnerHTML={{ __html: post.node.acf.speaker_info}}></p>
                            <BioLink
                            data-sal="slide-up"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                                to="/bio/"
                            >
                                Click Here for Bio
                            </BioLink>
                        </WebinarBio>
                        <CustomModal 
                            isOpen={this.state.showModal}
                            contentLabel="Minimal Modal Example"
                        >
                            <ModalContent>
                                <button onClick={this.handleCloseModal} class={"close"} aria-label="Close Modal">×</button>
                                <h2>Register Now</h2>
                                <RegisterForm/>
                            </ModalContent>
                        </CustomModal>
                        <div type="hidden" style={{ display: 'none' }}>
                        <form
                            name="Register"
                            method="post"
                            action="/registration-success/"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            >
                            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                            <input type="hidden" name="form-name" value="Register" aria-label="Input"/>
                            <p class={"hidden"}>
                                <label>
                                Don’t fill this out:{" "}
                                <input name="bot-field" aria-label="Input" />
                                </label>
                            </p>
                            <p class={"full"}>
                                <label htmlFor="name">
                                Name
                                <input type="text" name="name" placeholder="Enter your name" aria-label="Input" required/>
                                </label>
                            </p>
                            <p class={"full"}>
                                <label  htmlFor="title">
                                Title
                                <input type="text" name="title" placeholder="Enter your title" aria-label="Input" required />
                                </label>
                            </p>
                            <p class={"full"}>
                                <label  htmlFor="company">
                                Company
                                <input type="text" name="company" placeholder="Enter your company" aria-label="Input" required/>
                                </label>
                            </p>
                            <p class={"full"}>
                                <label  htmlFor="state">
                                State
                                <select name="state" required>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">District Of Columbia</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                                </label>
                            </p>
                            <p class={"full"}>
                                <label  htmlFor="email">
                                Email
                                <input type="email" name="email" placeholder="Enter your email" aria-label="Input" required />
                                </label>
                            </p>
                            <p class={"button"}>
                                <button type="submit" class={"submit"} aria-label="Submit Form">Send</button>
                            </p>
                            </form>
                        </div>
                    </div>
                ))}
            </WebinarLayout>
        );
    }
}

const WebinarImg = styled(Img)`
    max-width: 320px;
    margin: 0 auto;
    margin-bottom: 50px;

`

const WebinarMain = styled.div`
    padding: 0 20px;
    text-align: center;
    color: #fff;
    h4 {
        font-family: auto;
        font-weight: 100;
        font-size: 52px;
        line-height: 1.2;
        margin-bottom: 0;
        @media(max-width:480px) {
            font-size: 32px;
        }
    }
    h1 {
        font-family: "Antonio";
        font-weight: bold;
        font-size: 108px;
        line-height: 1.1;
        letter-spacing: 5px;
        margin-bottom: 10px;
        text-transform: uppercase;
        @media(max-width:900px) {
            font-size: 85px;
        }
        @media(max-width:700px) {
            font-size: 42px;
            letter-spacing: 3px;
        }
        @media(max-width:480px) {
            font-size: 32px;
        }
    }
`

const PresentedBy = styled.p`
    padding: 0 20px;
    font-family: "Helvetica Thin";
    font-weight: 100;
    font-size: 33px;
    line-height: 1.2;
    color: #fff;
    text-align: center;
    @media(max-width:480px) {
        font-size: 21px;
    }
`
const RegisterButton = styled.div`
    padding: 0 20px;
    text-align: center;
    margin: 50px 0;
    button {
        font-family: "Raleway";
        padding: 42px 34px;
        display: inline-block;
        background: #67B1E2;
        color: #fff;
        border: 7px solid white;
        font-size: 31px;
        line-height: 1.3;
        font-weight: bold;
        font-style: italic;
        letter-spacing: 5px;
        transition: all ease-in-out .3s;
        text-align: center;
        outline: 0;
        text-transform: uppercase;
        span {
            text-transform: capitalize;
        }
        &:hover {
            background: #fff;
            color: #67B1E2;
            cursor: pointer;
        }
        @media(max-width:480px) {
            font-size: 20px;
            padding: 20px;
        }
    }
`

const WebinarSub = styled.div`
    max-width: 1140px;
    width: 100%;
    padding: 50px 20px;
    margin: 0 auto;
    p {
        font-family: "Helvetica Thin";
        font-weight: bold;
        font-size: 28px;
        line-height: 1.3;
        margin-bottom: 35px;
        letter-spacing: 2px;
        color: #fff;
        @media(max-width:480px) {
            font-size: 20px;
        }
    }
`

const WebinarDate = styled.div`
    padding: 0 20px;
    text-align: center;
    p {
        font-family: "Helvetica Thin";
        font-size: 29px;
        color: #fff;
        font-weight: bold;
        line-height: 1.4;
        padding: 22px 75px;
        border: 5px solid #fff;
        display: inline-block;
        letter-spacing: 5px;
        text-transform: uppercase;
        max-width: 575px;
    }
    @media(max-width:480px) {
        p {
            padding: 20px;
            font-size: 20px;
        }
    }
`

const DotDivider = styled.div`
    margin: 125px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
        height: 15px;
        width: 15px;
        margin: 20px;
        background-color: #67B1E2;
        border-radius: 50%;
        display: inline-block;  
    }
`

const WebinarBio = styled.div`
    max-width: 1140px;
    width: 100%;
    padding: 50px 20px;
    margin: 0 auto;
    text-align: center;
    p {
        font-family: "Helvetica Thin";
        font-size: 30px;
        line-height: 1.5;
        color: #fff;
        text-align: center;
        max-width: 900px;
        margin: 0 auto;
        &.featuring {
            font-family: "Helvetica Thin";
            font-size: 30px;
            line-height: 1.5;
            margin-bottom: 20px;
            margin: auto;
            padding: 50px;
            color: #fff;
            text-transform: uppercase;
            text-align: center;
        }
        @media(max-width:480px) {
            font-size: 20px;
        }
    }
    h2 {
        font-family: "Raleway";
        font-size: 68px;
        color: white;
        text-transform: capitalize;
        position: relative;
        letter-spacing: 5px;
        text-align: center;
        font-weight: 600;
        margin-bottom: 0;
        @media(max-width:480px) {
            font-size: 32px;
        }
    }
    hr {
        background-color: #fff;
        height: 2.5px;
        max-width: 65%;
        width: 100%;
        margin: 15px auto;
    }
    h3 {
        font-family: 'Antonio';
        font-weight: bold;
        font-style: normal;
        text-align: center;
        font-size: 50px;
        line-height: 1.4;
        max-width: 850px;
        margin: 40px auto;
        letter-spacing: 3px;
        color: #fff;
        text-transform: uppercase;
        @media(max-width:480px) {
            font-size: 30px;
        }
    }
`

const SpeakerImg = styled(Img)`
    max-width: 427px;
    margin: 0 auto;
    margin-bottom: 50px;
`

const BioLink = styled(Link)`
    font-family: "Raleway";
    padding: 35px 70px;
    display: inline-block;
    background: #67B1E2;
    color: #fff;
    border: 7px solid white;
    font-size: 31px;
    line-height: 1.3;
    font-weight: bold;
    font-style: italic;
    letter-spacing: 5px;
    transition: all ease-in-out .3s;
    text-align: center;
    outline: 0;
    text-transform: uppercase;
    text-decoration: none !important;
    margin: 50px 0;
    &:hover {
        background: #fff;
        color: #67B1E2;
        cursor: pointer;
    }
    @media(max-width:480px) {
        font-size: 20px;
        padding: 20px;
    }
`

const CustomModal = styled(Modal)`
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
`

const ModalContent = styled.div`
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
    position: relative;
    @media(max-width:1200px) {
        width: 75%;
    }
    @media(max-width:900px) {
        width: 90%;
    }
    form {
        width: 60%;
        margin: 0 auto;
        @media(max-width:800px) {
            width: 100%;
        }
    }
    h2 {
        font-family: "Raleway";
        text-align: center;
        margin-bottom: 30px;
        font-size: 30px;
        line-height: 1.25em;
    }
    p {
        &.hidden {
            opacity: 0;
            position: absolute;
            top: 0;
            left: 0;
            height: 0;
            width: 0;
            z-index: -1;
        }
        width: 50%;
        display: inline-block;
        padding: 0 15px;
        @media(max-width:470px) {
            width: 100%;
        }
        &.full {
            width: 100%;
        }
        &.button {
            width: 100%;
            text-align: center;
        }
        label {
            font-family: "Raleway";
            font-size: 14px;
            line-height: 26px;
            font-weight: 600;
            color: #000;
        }
        input {
            font-family: "Raleway";
            width: 100%;
            border: none;
            outline: 0;
            border-bottom: 1px solid #000;
            padding: 10px 0;
            font-size: 13px;
            line-height: 17px;
            color: #000;
            &:placeholder {
                color: #aaa;
            }
        }
        select {
            font-family: "Raleway";
            width: 100%;
            border: none;
            outline: 0;
            border-bottom: 1px solid #000;
            padding: 10px 0;
            font-size: 13px;
            line-height: 17px;
            color: #000;
            background: transparent;
        }
        textarea {
            font-family: "Raleway";
            width: 100%;
            border: none;
            outline: 0;
            border-bottom: 1px solid #000;
            padding: 10px 0;
            font-size: 13px;
            line-height: 17px;
            color: #000;
            &:placeholder {
                color: #aaa;
            }
        }
    }
    button {
        &.close {
            font-family: "Raleway Bold";
            line-height: 28px;
            color: #aaaaaa;
            font-size: 28px;
            font-weight: bold;
            position: absolute;
            top: 20px;
            right: 20px;
            background: transparent;
            border: none;
            outline: 0;
            padding: 0;
            &:hover {
                cursor: pointer;
                color: #000;
            }
        }
        &.submit {
            background: #fff;
            color: #0c62fb;
            font-size: 16px;
            display: inline-block;
            min-width: 6.5rem;
            cursor: pointer;
            text-align: center;
            border: .1rem solid #0c62fb;
            font-family: "Raleway";
            transition: all 0.2s ease;
            border-radius: 0;
            padding: 10px;
            margin: 0 auto;
            &:hover {
                color: #fff;
                background: #0c62fb;
                cursor: pointer;
                }
            }
        }
    }
`



export default props => (
    <StaticQuery
      query={graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 22}}}}) {
                edges {
                    node {
                        title
                        content
                        featured_media {
                            localFile {
                                childImageSharp {
                                    sizes(maxWidth: 600) {
                                        ...GatsbyImageSharpSizes
                                    }
                                }
                            }
                        }
                        acf {
                            presented_by
                            sub_info
                            event_date
                            speaker_name
                            speaker_title
                            speaker_image {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 427) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            speaker_info
                            meta_title
                            meta_description
                        }
                    }
                }
            }
        }
      `}
      render={data => <WebinarPage data={data} {...props} />}
    />
  );