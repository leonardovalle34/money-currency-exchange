import styled from "styled-components";

export const Main = styled.div`
    background-color: grey;
    width: 80vw;
    height: 80vh;
    max-height: 600px;
    max-width: 800px;
    color: black;
    border-radius: 8px;
    margin: 0px;
    display: flex;
    justify-content: center;
    padding: 0px;
    align-items: center;
    flex-direction: column;
    opacity: 0.8;

`

export const Title = styled.h1`
    font-size: 1.3rem;
    margin: 10px;
`
export const Convert = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ff9901;
    color: black;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 8px;
    margin: 18px;
    width: 30%;
    height: 10%;
`