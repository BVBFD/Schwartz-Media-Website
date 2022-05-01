import React from 'react';
import styled from 'styled-components';

const PostBox = styled.div`
  margin-bottom: 1rem;

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
      </div>
    </PostBox>
  );
};

export default Post;
