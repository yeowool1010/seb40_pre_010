import styled from 'styled-components';
import React from 'react';
import SideNav1 from '../components/Nav-Side1';
import Tag from '../components/tag';
import dummy2 from './../static/dummy2.json';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
`;
const TagsWrapper = styled.div`
  flex-wrap: wrap;
  div {
    flex: 0 1 24%;

    @media screen and (max-width: 768px) {
      flex: 0 1 48%;
    }
  }
`;
const Tags = () => {
  return (
    <Wrapper className="d-flex">
      <SideNav1 />
      <div className="pt96  px16 ">
        <div className=" ta-left d-flex jc-space-between pb8">
          <span className="fs-headline1">Tags</span>
        </div>
        <p className="ta-left fs-body2 pb24 mb24 bb bc-black-075">
          A tag is a keyword or label that categorizes your question with other,
          similar questions.
          <br />
          Using the right tags makes it easier for others to find and answer
          your question.Tag
        </p>
        <TagsWrapper className="d-flex g12 pb24">
          {dummy2.tags.map((x, i) => {
            return <Tag key={i} name={x.name} description={x.description} />;
          })}
        </TagsWrapper>
      </div>
    </Wrapper>
  );
};
export default Tags;
