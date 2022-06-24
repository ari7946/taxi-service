import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.button.attrs((props) => ({
	type: props.type || 'button',
}))`
	border-radius: 3px;
	text-decoration: none;
	text-align: center;
	cursor: pointer;
	width: 100%;
	padding: ${(props) => props.padding || '0.5rem'};
	margin-top: 0.5rem;
	text-transform: uppercase;
	letter-spacing: 1px;
	width: ${(props) => props.width || '100%'};
	${(props) =>
		props.primary &&
		css`
			background: var(--color-yellow);
		`}
	${(props) =>
		props.secondary &&
		css`
			background: var(--color-green-light);
		`}
    @media (max-width: 1200px) {
		font-size: 14px;
	}
`;
