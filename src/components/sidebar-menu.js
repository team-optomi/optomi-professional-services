import React, { Component } from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

class SideMainMenu extends Component {

    render() {
        return (
            <MainMenu>
                <MenuItem>
                    <Link
                    to="/"
                    >
                    Home
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link
                    to="/services/"
                    >
                    Services
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link
                    to="/clients/"
                    >
                    For Clients
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link
                    to="/case-studies/"
                    >
                    Case Studies
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link
                    to="/candidates/"
                    >
                    For Candidates
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link
                    to="/impact/"
                    >
                    Impact
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link
                    to="/about/"
                    >
                    About
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link
                    to="/awards/"
                    >
                    Awards
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link
                    to="/insights/"
                    >
                    Insights
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link
                    to="/news/"
                    >
                    Newsroom
                    </Link>
                </MenuItem>
                {/* <MenuItem>
                    <Link
                    to="/leadership/"
                    >
                    Leadership
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link
                    to="/founders/"
                    >
                    Founders
                    </Link>
                </MenuItem> */}
                <MenuItem>
                    <Link
                    to="/contact/"
                    >
                    Contact
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link
                    to="/locations/"
                    >
                    Locations
                    </Link>
                </MenuItem>
                <MenuItem>
                    <a href="http://optomi.com/" target="_blank" rel="noopener noreferrer">Optomi Brand</a>
                </MenuItem>
                <MenuItem>
                    <a href="https://provalus.com/" target="_blank" rel="noopener noreferrer">Provalus Brand</a>
                </MenuItem>
            </MainMenu>
        );
    }
}

const MainMenu = styled.ul`
    list-style: none;
    padding: 30px;
    margin: 0;
`

const MenuItem = styled.li`
    margin: 0 0 10px;
    letter-spacing: 1px;
    font-size: 18px;
    font-family: "Helvetica Thin";
    a {
        letter-spacing: 1px;
        font-size: 18px;
        color: #61b1e8;
        text-decoration: none;
        transition-duration: .3s;
        &:hover {
            color: #fff;
        }
    }
`

export default SideMainMenu