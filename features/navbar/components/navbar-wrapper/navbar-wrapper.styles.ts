import styled, { css } from 'styled-components';

export const NavbarWrapper = styled.nav<{
	isMobileMenuOpen: boolean;
	isDesktop: boolean;
}>`
	display: flex;
	justify-content: space-between;
	align-items: start;
	margin: 2rem;
	transform: translateX(0);
	/* ${({ isMobileMenuOpen, isDesktop }) =>
		isMobileMenuOpen &&
		!isDesktop &&
		css`
			flex-direction: column;
		`} */
`;

export const NavList = styled.ul<{
	isDesktop: boolean;
	isMobileMenuOpen: boolean;
}>`
	transform: translateX(0);
	${({ isDesktop }) =>
		isDesktop &&
		css`
			display: flex;
		`}

	${({ isMobileMenuOpen, isDesktop }) =>
		!isMobileMenuOpen &&
		!isDesktop &&
		css`
			display: none;
		`}

  ${({ isMobileMenuOpen, isDesktop }) =>
		isMobileMenuOpen &&
		!isDesktop &&
		css`
			position: absolute;
			display: flex;
			z-index: 100 !important;
			width: 95%;
			margin-top: 4rem;
			border-radius: 3%;
			flex-direction: column;
			justify-content: center;
			height: 55vh;
			background-color: rgba(0, 0, 0, 0.9);
		`}
`;
