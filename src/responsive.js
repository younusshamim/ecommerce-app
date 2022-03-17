import { css } from "styled-components";

export const mobile = (props) => css`
  @media only screen and (max-width: 380px) {
    ${props}
  }
`;

export const tablet = (props) => css`
  @media only screen and (max-width: 576px) {
    ${props}
  }
`;

export const mediumScreen = (props) => css`
  @media only screen and (max-width: 768px) {
    ${props}
  }
`;

// export const mediumScreen = (props) => css`
//   @media only screen and (max-width: 992px) {
//     ${props}
//   }
// `;

// export const largeScreen = (props) => css`
//   @media only screen and (max-width: 1200px) {
//     ${props}
//   }
// `;
