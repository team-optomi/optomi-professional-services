import React from "react"

export default () => (
    <form name="register" method="post" netlify-honeypot="bot-field" netlify action="/thank-you/">
        <input type="hidden" name="form-name" value="register" />
        <p class="hidden">
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>
        <p class={"full"}>
            <label>Name <input type="text" name="name" placeholder="Enter your name" required/></label>   
        </p>
        <p class={"full"}>
            <label>Title <input type="text" name="title" placeholder="Enter your title" required/></label>   
        </p>
        <p class={"full"}>
            <label>Company <input type="text" name="company" placeholder="Enter your company name" required/></label>   
        </p>
        <p class={"full"}>
            <label>Your Email <input type="email" name="email" placeholder="Enter your email" required/></label>
        </p>
        <p class={"button"}>
            <button type="submit" class={"submit"}>Send</button>
        </p>
    </form>
)