import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import jumboImage from '../../img/HomeBanner.png';

const Styles = styled.div`
  .jumbo {
    background: url(${jumboImage}) no-repeat fixed top;
    margin-top: 0px;
    margin-bottom: 500px;
    background-size: cover;
    color: #efefef;
    height: 170px;
    width: 100%;
    position: fixed;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>OSRSMate</h1>
        <p>Helping you optimize your gameplay since 2020</p>
      </Container>
    </Jumbo>
  </Styles>
)