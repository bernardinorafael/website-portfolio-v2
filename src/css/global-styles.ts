import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	&:focus {
		box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.cyan[500]};
		outline: none;
	}
	
	body {
		background: ${({ theme }) => theme.colors.gray[900]};
		color: ${({ theme }) => theme.colors.gray[100]};
		-webkit-font-smoothing: antialiased;
	}
	
	body, input, select, textarea, button {
		font-family: ${({ theme }) => theme.fontFamily.default};
		font-size: ${({ theme }) => theme.fontSize.md};
		font-weight: ${({ theme }) => theme.fontWeight.regular};
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	button {
		cursor: pointer;
	}
	
	@media (max-width: 992px) {
		html {
			font-size: 93.75%;
		}
	}
	
	@media (max-width: 768px) {
		html {
			font-size: 87.5%;
		}
	}
`
