// components/FooterStyles.js

import styled from "styled-components";

export const Box = styled.div`
    padding: 5% 2.5%;
    background: #8697C4;
    bottom: 0;
    width: 100%;

    @media (max-width: 1000px) {
        padding: 2% 2%; /* Adjust padding for medium screens */
    }

    @media (max-width: 600px) {
        padding: 3% 1.5%; /* Further reduce padding for smaller screens */
    }
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;

    @media (max-width: 600px) {
        align-items: center; /* Center align items on small screens */
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;

    @media (max-width: 1000px) {
        margin-left: 30px; /* Reduce margin for medium screens */
    }

    @media (max-width: 600px) {
        margin-left: 0; /* Remove margin for smaller screens */
        align-items: center; /* Center align columns on small screens */
        margin-bottom: 20px; /* Add margin between columns */
    }
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
    grid-gap: 20px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Adjust for medium screens */
    }

    @media (max-width: 600px) {
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); /* Adjust for smaller screens */
    }
`;

export const FooterLink = styled.a`
    color: #fff;
    margin-bottom: 20px;
    font-size: 10px;

    @media (max-width: 600px) {
        font-size: 12px; /* Increase font size for better readability on small screens */
    }

    text-decoration: none;

    &:hover {
        color: green;
        transition: 200ms ease-in;
    }
`;

export const Heading = styled.p`
    font-size: 16px;
    color: #fff;
    margin-bottom: 20px;
    font-weight: bold;

    @media (max-width: 600px) {
        font-size: 14px; /* Reduce font size on small screens */
    }
`;

