import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import SEO from "../components/seo"
import BlogLayout from "../components/blog-layout"
import TownhallForm from "../components/townhall-form"

const TownhallPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 27}}}}) {
                edges {
                    node {
                        title
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
            <BlogLayout>
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
                
                <FormSection>
                    <TownhallForm/>
                </FormSection>
                <div type="hidden" style={{ display: 'none' }}>
                    <form
                        name="Townhall"
                        method="post"
                        action="/townhall-success/"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        >
                        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                        <input type="hidden" name="form-name" value="Townhall" aria-label="Input"/>
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
            </BlogLayout>
        ))
    )
}

const WebinarImg = styled(Img)`
    max-width: 320px;
    margin: 0 auto;
    margin-bottom: 50px;
    margin-top: 100px;
`

const FormSection = styled.div`
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    padding-bottom: 100px;
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

export default TownhallPage