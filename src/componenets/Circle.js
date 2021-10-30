import styled, { css }from 'styled-components'

const Circle = styled.div`
  height: 10em;
  width: 10em;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .75s;

  ${props =>
        props.peach &&
        css`
          background: #E85A4F;
          color: white;
        `};
    ${props =>
        props.red &&
        css`
          background: #E98074;
          color: white;
        `};
        ${props =>
        props.gray &&
        css`
          background: #8E8D8A;
          color: white;
        `};
        ${props =>
        props.tan &&
        css`
          background: #D8C3a5;
          color: white;
        `};
`

export default Circle;