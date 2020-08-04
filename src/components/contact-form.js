import React from "react"

export default () => (
    <form name="Contact" method="POST" netlify-honeypot="bot-field" action="/thank-you/" data-netlify="true">
        <input type="hidden" name="form-name" value="Contact" />
        <p class="hidden">
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>
        <p>
            <label>Name* <input type="text" name="name" placeholder="Enter your name"/></label>   
        </p>
        <p>
            <label>Country* 
                <select name="country">
                    <option value="united states">United States</option>
                    <option value="canada">Canada</option>
                    <option value="united kingdom">United Kingdom</option>
                    <option value="other">Other</option>
                </select>
            </label>   
        </p>
        <p>
            <label>Your Email* <input type="email" name="email" placeholder="Enter your email"/></label>
        </p>
        <p>
            <label>City* <input type="text" name="city" placeholder="Enter your city name"/></label>   
        </p>
        <p>
            <label>Phone* <input type="text" name="phone" placeholder="Enter your phone number"/></label>   
        </p>
        <p class={"full"}>
            <label>Message <textarea name="message" placeholder="Enter your message"></textarea></label>
        </p>
        <p class={"button"}>
            <button type="submit" class={"submit"}>Send</button>
        </p>
    </form>
)