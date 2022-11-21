import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	&:focus {
		box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.violet[200]};
		outline: none;
	}
	
	body {
		background: ${({ theme }) => theme.colors.background[900]};
		color: ${({ theme }) => theme.colors.background[100]};
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

	::-webkit-scrollbar {
		width: .8rem;
		background: ${({ theme }) => theme.colors.background[700]};
	}

	::-webkit-scrollbar-thumb {
		background: ${(props) => props.theme.colors.background[600]};
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
