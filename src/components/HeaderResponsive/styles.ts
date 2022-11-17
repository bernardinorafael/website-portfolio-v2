import styled from "styled-components"

export const Container = styled.header`
  @media (max-width: 640px) {
    background: ${({ theme }) => theme.colors.background[900]};
    border-top: 1px solid ${({ theme }) => theme.colors.background[700]};
    bottom: 0;
    height: 4rem;
		box-shadow: 0px -7px 50px 0px rgba(0,0,0,0.75);
    padding: 0 2rem;
    position: fixed;
    width: 100%;
    z-index: 100;

    section {
      display: grid;
      padding: 0.5rem;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      height: 100%;
      align-items: center;

      button {
        background: transparent;
        border-radius: ${({ theme }) => theme.radii.sm};
        border: none;
        outline: none;
				justify-content: center;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        height: 100%;
        color: ${({ theme }) => theme.colors.background[400]};
      }
    }
  }
`
