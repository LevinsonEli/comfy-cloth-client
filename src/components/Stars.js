import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const Stars = ({ stars, reviews }) => {
  const starsList = Array.from({ length: 5 }, (v, i) => {
    if (stars - i < 1 && stars - i > 0)
      return <span key={i}><BsStarHalf /></span>
    if (i < stars)
      return <span key={i}><BsStarFill /></span>
    else 
      return <span key={i}><BsStar /></span>
  });

  return (
    <Wrapper>
      <div className='stars'>{starsList}</div>
      <p className='reviews'>({reviews} customer reviews)</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`
export default Stars
