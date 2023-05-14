import React, { useState } from 'react';
import styled from 'styled-components';
import { shadows } from './data';
import {FiCopy} from 'react-icons/fi';
import {AiOutlineCheck} from 'react-icons/ai';
const ShadowContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 4em 0;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    justify-content: space-around;
    height: 200px;
   background-color: #fff;
  margin: 20px;
  box-shadow: ${(props) => props.shadow};
  position: relative;

`;

const CopyButton = styled.button`
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  position: absolute;
  text-align: center;
  background-color: #ffffff;
  font-size: 12px;
  cursor: pointer;
  border: none;
`;

const Main = () => {
   
  const [copiedShadow, setCopiedShadow] = useState('');

  const handleCopyShadow = (shadow) => {
    navigator.clipboard.writeText(shadow);
    setCopiedShadow(shadow);
    setTimeout(() => {
      setCopiedShadow(null);
    }, 1000);
  };
  
  return (
    <div>
      
        <ul>
        {shadows.map((shadow, index) => (
        <li key={index}>
            <ShadowContainer shadow={shadow}>
          <CopyButton onClick={() => handleCopyShadow(shadow)}>
            {copiedShadow === shadow ? <AiOutlineCheck/> : <FiCopy/>}
          </CopyButton>
        </ShadowContainer>
        </li>
      ))}
        </ul>
       
    </div>
  );
};

export default Main;