import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const PostBox = styled.div`
  margin-bottom: 5rem;

  span {
    font-size: 1.2rem;
    padding: 0.6rem 0 0.6rem 0;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 90%;
    }

    p {
      display: -webkit-box;
      overflow: hidden;
      line-height: 1.4;
      max-height: 3rem;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      padding: 0 0.6rem 2rem 0.6rem;
      margin-bottom: 0.6rem;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: 1rem;

      .readMore {
        padding: 0.6rem 1rem 0.6rem 1rem;
        border-radius: 1.4rem;
        border: 1px solid #000;
        cursor: pointer;
      }

      div {
        a {
          cursor: pointer;
        }
      }
    }
  }
`;

const Post = ({ postObj }) => {
  return (
    <PostBox>
      <div>
        <img src={postObj.homePostImg} alt='' />
        <span>{postObj.title}</span>
        <p>{postObj.text}</p>
        <div>
          <a className='readMore'>Read More</a>
          <div>
            <a>
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
              <span>Subscribe</span>
            </a>
          </div>
        </div>
      </div>
    </PostBox>
  );
};

export default Post;
