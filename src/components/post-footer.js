import React, { Component } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal';

class PostFooter extends Component {
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
          <FooterRow>
              <div class={"footer-copy"}>
                  <h3>Let's drive tomorrow's technology together.</h3>
              </div>
            <div class={"contact-button"}>
            <button onClick={this.handleOpenModal}>Let's Talk</button>
            </div>
            <CustomModal 
                isOpen={this.state.showModal}
                contentLabel="Minimal Modal Example"
            >
                <ModalContent>
                    <button onClick={this.handleCloseModal} class={"close"}>×</button>
                    <h1>Let's Talk</h1>
                    <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" action="/success">
                        <input type="hidden" name="form-name" value="contact" />
                        <p class="hidden">
                            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                        </p>
                        <p>
                            <label>Name* <input type="text" name="name" placeholder="Enter your name" required/></label>   
                        </p>
                        <p>
                            <label>Country* 
                                <select name="country" required>
                                    <option value="united states">United States</option>
                                    <option value="canada">Canada</option>
                                    <option value="united kingdom">United Kingdom</option>
                                    <option value="other">Other</option>
                                </select>
                            </label>   
                        </p>
                        <p>
                            <label>Your Email* <input type="email" name="email" placeholder="Enter your email" required/></label>
                        </p>
                        <p>
                            <label>City* <input type="text" name="city" placeholder="Enter your city name" required/></label>   
                        </p>
                        <p>
                            <label>Phone* <input type="text" name="phone" placeholder="Enter your phone number" required/></label>   
                        </p>
                        <p class={"full"}>
                            <label>Message <textarea name="message"  placeholder="Enter your message"></textarea></label>
                        </p>
                        <p class={"button"}>
                            <button type="submit" class={"submit"}>Send</button>
                        </p>
                    </form>
                </ModalContent>
            </CustomModal>
          </FooterRow>
      );
    }
  }

  const FooterRow = styled.div`
    padding: 4rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
        font-family: "Raleway";
        color: #818181;
        font-size: 3rem;
        line-height: 4rem;
        font-weight: 100;
        max-width: 600px;
    }
    .contact-button {
        button {
            font-family: "Raleway";
            color: #0c62fb;
            border: .1rem solid #0c62fb;
            padding-left: 30px;
            padding-right: 30px;
            min-width: 6.5rem;
            padding: 1rem 3rem;
            font-size: 16px;
            background: #fff;
            transition-duration: .3s;
            &:hover {
                color: #fff;
                background: #0c62fb;
                cursor: pointer;
            }
        }
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
    form {
        width: 60%;
        margin: 0 auto;
    }
    h1 {
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
  
  export default PostFooter