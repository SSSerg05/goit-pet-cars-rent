import styled from '@emotion/styled';

// export const Container = styled.div`
//     margin: 0 auto;
//     min-width: 270px;
    
//     display: flex;
//     flex-wrap: nowrap;
//     align-items: center;
//     flex-direction: column;
//     justify-content: center;
//     font-size: 40;
//     color: #010101;
// `;

export const Container = styled.div`
    width: 280px;
    margin: 0 auto;
    padding: 0 2rem;

    font-size: 40;
    color: #010101;

    @media screen and (min-width: 360px) {
      width: 360px;
    }

    @media screen and (min-width: 768px) {
      width: 510px;
    }
`;
  