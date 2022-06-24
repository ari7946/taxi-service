import styled, { css } from 'styled-components';

export const LabeledInputWrapper = styled.div`
	height: 100%;
	margin-bottom: 1.3rem;
`;

export const Label = styled.label`
	text-transform: capitalize;
	font-size: 16px;
	color: var(--color-yellow);

	.required {
		color: var(--color-gray-light-2);
		text-transform: lowercase;
		margin-left: 0.6rem;
		font-size: 13px;
	}
`;

export const Input = styled.input`
	letter-spacing: 2px;
	width: 100%;
	border-radius: 4px;
	padding: 0.5rem 1rem;
	font-size: 14px;
	margin-top: 0.3rem;
	color: white;

	&:focus {
		border: 1px solid var(--color-yellow);
	}
`;

export const TextArea = styled(Input)`
	min-height: 65px;
	padding: 11px 20px;
	border-radius: 4px;
	background-color: #f8f8f8;
`;
