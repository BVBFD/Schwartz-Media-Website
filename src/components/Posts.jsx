import React from 'react';
import Post from './Post';
import { PostsArray } from '../dummyDatas';
import styled from 'styled-components';

const HomePostsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  padding: 0 14rem 0 14rem;
  text-align: center;
`;

const Posts = (props) => {
  return (
    <HomePostsBox>
      {PostsArray.map((postObj) => (
        <Post postObj={postObj} />
      ))}
    </HomePostsBox>
  );
};

export default Posts;
