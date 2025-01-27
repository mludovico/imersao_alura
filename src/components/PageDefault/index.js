import React, { Fragment } from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;

export default function PageDefault(props){
    return (
        <Fragment>
            <Menu />
            <Main>
                {props.children}
            </Main>
            <Footer />
        </Fragment>
    );
}