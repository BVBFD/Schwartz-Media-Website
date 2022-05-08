import React, { useState } from 'react';
import styled from 'styled-components';
import BottomBar from '../components/BottomBar.jsx';
import Header from '../components/Header.jsx';
import Posts from '../components/Posts.jsx';

const JournalismBox = styled.div``;

const ImgBox = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img.attrs({ src: '../imgs/journalPic.png' })`
  width: 50%;
  height: 100%;
  object-fit: cover;
`;

const IntroBox = styled.div`
  height: 100vh;
  width: 100%;
  margin-top: 5.8rem;
  display: flex;
  flex-direction: column;
`;

const IntroHeader = styled.div`
  width: 100%;
  height: 70vh;
  position: relative;
  top: -8rem;

  div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    margin-bottom: -3rem;
    padding: 0 4rem 0 4rem;
    font-size: 3rem;
  }

  div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
    padding: 0 14rem 0 14rem;
    font-size: 2.4rem;
    font-weight: 350;

    span {
      font-size: 1.8rem;
      margin-right: 2rem;
      font-weight: 400;
    }
  }
`;

const Journalism = (props) => {
  const [scrollY, setScrollY] = useState();

  return (
    <JournalismBox
      onWheel={() => {
        setScrollY(window.scrollY);
      }}
    >
      <Header scrollY={scrollY} />
      <IntroBox>
        <ImgBox>
          <Img />
        </ImgBox>
      </IntroBox>
      <IntroHeader>
        <div>Journalism.</div>
        <div>
          <p>
            <span>Journalism</span>
            Our audience reads to know, not just to agree. We invest in
            long-form journalism where the issues demand it, providing writing
            of a quality that makes difficult topics clear. Schwartz Media
            publishes Australia’s most respected writers across The Saturday
            Paper, The Monthly magazine and the daily podcast 7am, alongside our
            sister publications, Quarterly Essay and Australian Foreign Affairs.
          </p>
        </div>
      </IntroHeader>
      <Posts />
      <BottomBar />
    </JournalismBox>
  );
};

export default Journalism;
