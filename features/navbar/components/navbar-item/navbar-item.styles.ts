import styled, { css } from 'styled-components';

export const NavItemWrapper = styled.li<{ isDesktop: boolean }>`
	margin: 0.5rem;
	font-size: 1.2rem;
	padding-top: 0.7rem;
	cursor: pointer;
	margin: 1rem 2.5rem;
	display: block;
	font-weight: bold;

	a,
	.dropdown__first-item,
	.dropdown__first-item a {
		color: lightblue !important;
		text-decoration: none;
		display: flex;
		padding-top: 1rem;
		padding-block: 0.5rem;

		${({ isDesktop }) =>
			!isDesktop &&
			css`
				color: blue;
			`}
	}

	.dropdow_first-item {
		display: flex;

		.icon {
			margin-left: 0.5rem;
			font-size: 1rem;
			color: lightblue !important;
		}
	}

	.active {
		color: white !important;
		${({ isDesktop }) =>
			!isDesktop &&
			css`
				color: darkgray !important;
				font-weight: bold;
			`}
	}

	.dropdown__list {
		position: absolute;
		.list-item {
			display: flex;
			flex-direction: column;
			padding-left: 2rem;
			margin-top: 0.8rem;

			${({ isDesktop }) =>
				isDesktop &&
				css`
					position: relative;
				`}
		}
	}
`;
