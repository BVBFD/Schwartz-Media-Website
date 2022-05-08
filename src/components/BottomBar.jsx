import React from 'react';
import styled from 'styled-components';

const BottomBar = (props) => {
  const BottomBarBox = styled.div`
    margin-top: 5rem;
    padding: 2rem 15rem 0 15rem;
    border: 1px solid black;
    background-color: #444;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;

    div {
      span {
        cursor: pointer;
        user-select: none;
      }
    }

    div:nth-child(1) {
      span:nth-child(1) {
        font-size: 2.4rem;
        font-weight: bold;
      }
      display: flex;
      justify-content: space-between;
    }

    div:nth-child(2) {
      display: flex;
      flex-direction: column;
      padding: 8rem 0 1rem 0;
    }

    div:nth-child(3) {
      display: flex;
      flex-direction: column;
      padding: 3rem 0 2rem 0;

      span:last-child {
        cursor: inherit;
      }
    }
  `;

  return (
    <BottomBarBox>
      <div>
        <span>Schwartz</span>
        <span>Schwartz Media</span>
        <span>Schwartz Books</span>
      </div>
      <div>
        <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
      </div>
      <div>
        <span>© 2022 Schwartz Publishing</span>
        <span>All rights reserved</span>
      </div>
    </BottomBarBox>
  );
};

export default BottomBar;
