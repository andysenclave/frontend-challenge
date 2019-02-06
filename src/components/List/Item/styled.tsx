import styled from 'styled-components';

export const ItemWrap = styled.div`
  background: ${props => (props.active ? 'linear-gradient(to right, #FFEDBC, #ED4264)' : 'white')};
  display: flex;
  flex-direction: row;
  padding: 10px;
  border-radius: 40px;
  width: 80%;
  margin: 10px auto;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
  transition: 0.1s;

  :hover {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }
  
  @media (max-width: 700px) {
    width: 90%;
  }
`;
export const Avatar = styled.img`
  border-radius: 27px;
  border: 3px solid #009dff;

  @media (max-width: 700px) {
    width: 30px;
  }
`;
export const Title = styled.span`
  font-size: 1.2em;
  text-align: left;
`;
export const Subtext = styled.span`
  font-size: 1.2em;
`;
export const Score = styled.span`
  font-size: 1.2em;
`;
export const ProgressBarWrapper = styled.div`
  height: 12px;
  width: 170px;
  background: #e9e7e6;
  border-radius: 6px;

  @media (max-width: 700px) {
    display: none;
  }
`;
export const Progress = styled.div`
  height: 12px;
  width: ${props => props.value + '%'};
  background: #8BC34A;
  border-radius: 6px;
`;
export const Icon = styled.img`
  width: 30px;
  height: 30px;
`;
