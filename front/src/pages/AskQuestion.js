import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import TextEditor from '../components/TextEditor';
import Accordion from '../components/Accordion';
import InputTag from '../components/input-tag';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 15px;
  background-color: #f1f2f3;
  width: 100%;
  > div {
    max-width: 1240px;
    margin-right: auto;
    margin-left: auto;
    &:first-child {
      max-width: 876px;
    }
  }
  .main-button {
    margin-top: 20px;
    margin-bottom: 50px;
  }
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  height: 112px;
  margin-left: 100px;
  padding: 40 10 40 30;
  font-size: 32px;
  margin-top: 80px;
  margin-right: auto;
`;

const Question = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 40px;
`;

const Input = styled.input`
  display: flex;
  justify-content: left;
  width: 100%;
  height: 35px;
  padding: 8px 10px;
  &:focus ~ {
    .s-popover {
      display: block;
    }
  }
`;

const StyledDiv = styled.div`
  padding: 20px;
  max-width: 894px;
  height: 862px;
  border-radius: 3px;
  row-gap: 10px;
  background-color: white;
  box-shadow: grey 0px 0px 3px;
`;

const StyledButton = styled.button`
  margin-right: 790px;
  border: 1px solid;

  color: #ffffff;
  background-color: #379fef;
  width: 160px;
  height: 37px;
  border-radius: 5px;
  box-shadow: none;
  font-size: 13.6px;
  padding: 2px 9px;
`;

const StyledDivv = styled.div`
  padding-top: 6px;
  padding-bottom: 7px;
`;

const StyledAccordion = styled.div`
  display: flex;
  justify-content: culumn;
`;

const QuestionDiv = styled.div`
  display: flex;
  justify-content: row;
`;

const tags = ['java', 'javascript', 'c', 'c#', 'c++'];

const AskQuestion = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const [hasText, setHasText] = useState(false);
  const [inputValue, setInputValue] = useState('tags');
  const [options, setOptions] = useState(tags);
  const [getTag, setgetTag] = useState('');

  console.log(getTag);
  const editorRef = useRef(null);
  const onChange = () => {
    const data = editorRef.current.getInstance().getHTML(); // getHTML or getMarkdown
    setText(data);
    console.log(text);
  };

  // const onChangeTitle = () => {
  //   setTitle(e.target.value);
  //   console.log(title);
  // };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setHasText(true);
    setOptions(tags.filter((value) => value.includes(e.target.value)));
  };

  const nameClick = (clickedOption) => {
    setInputValue(clickedOption);
    setOptions([clickedOption]);
  };

  return (
    <Wrapper>
      <Header>Ask a public question</Header>
      <QuestionDiv>
        <StyledDiv>
          Title
          <br />
          <StyledDivv>
            Be specific and imagine you`re asking a question to another person
          </StyledDivv>
          <Input
            // onChangeTitle={onChangeTitle}
            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
          ></Input>
          <Question>
            Body
            <br />
            <StyledDivv>
              Include all the information someone would need to answer your
              question
            </StyledDivv>
            <TextEditor ref={editorRef} onChange={onChange}></TextEditor>
          </Question>
          Tags
          <br />
          <StyledDivv>
            Add up to 5 tags to describe what your question is about
          </StyledDivv>
          {/* <Input
            onChange={handleInputChange}
            options={options}
            nameClick={nameClick}
            placeholder="e.g. (angular sql-server string)"
          ></Input> */}
          <InputTag setgetTag={setgetTag} />
          {/* <div className="s-popover" id="popover-example" role="menu">
            <div className="s-popover--arrow"></div> {tags.map((el) => el)}
          </div> */}
        </StyledDiv>

        <Accordion />
      </QuestionDiv>
      <div className="main-button">
        <StyledButton>Review your question</StyledButton>
      </div>
    </Wrapper>
  );
};

export default AskQuestion;
