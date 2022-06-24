import React, { useState } from 'react';
import * as Styled from './user.styles';

import { userAuth } from '../../redux/auth.actions';
import { connect } from 'react-redux';

import { useRouter } from 'next/router';
import Link from 'next/link';
import { createStructuredSelector } from 'reselect';
import { selectAuthLoading } from '../../redux/auth.selectors';
import { UserAuth } from '../../types/auth.types';

import LabeledInput from '../../../_global/components/labeled-input/labeled-input.component';
import Button from '../../../_global/components/button/button.component';
interface UserRegisterProps {
	userAuth: (obj: UserAuth) => any;
	loading: boolean;
}

const UserRegister = ({ userAuth, loading }: UserRegisterProps) => {
	const [userCredentials, setUserCredentials] = useState<
		Omit<UserAuth, 'authType'>
	>({
		username: '',
		password: '',
		name: '',
		email: '',
		phone: '',
	});
	const router = useRouter();

	const handleChange = (name: string, value: string) => {
		setUserCredentials({
			...userCredentials,
			[name]: value,
		});
	};

	return (
		<Styled.UserAuthWrapper>
			<h1>Register</h1>
			{loading && <p>loading...</p>}
			<form
				onSubmit={async (event) => {
					event.preventDefault();
					const { username, password, name, email, phone } = userCredentials;
					await userAuth({
						authType: 'register',
						username,
						password,
						name,
						email,
						phone,
					});
					router.push('./trips');
				}}
			>
				<LabeledInput
					id='user-username'
					type='text'
					name='username'
					placeholder='username'
					handleChange={handleChange}
					value={userCredentials.username}
					required
				/>
				<LabeledInput
					id='user-password'
					type='password'
					name='password'
					placeholder='password'
					handleChange={handleChange}
					value={userCredentials.password}
					required
				/>
				<LabeledInput
					id='user-name'
					type='text'
					name='name'
					placeholder='name'
					handleChange={handleChange}
					value={userCredentials.name}
				/>
				<LabeledInput
					id='user-email'
					type='email'
					name='email'
					placeholder='email'
					handleChange={handleChange}
					value={userCredentials.email}
				/>
				<LabeledInput
					id='user-phone'
					type='phone'
					name='phone'
					placeholder='phone'
					handleChange={handleChange}
					value={userCredentials.phone}
				/>
				<Styled.ButtonGroupWrapper>
					<Button type='submit' name='submit' primary>
						Register
					</Button>
					<span>
						Need to register?
						<Link href='/login'>
							<a>Login here</a>
						</Link>
					</span>
				</Styled.ButtonGroupWrapper>
			</form>
		</Styled.UserAuthWrapper>
	);
};

const mapStateToProps = createStructuredSelector({
	loading: selectAuthLoading,
});

const mapDispatchToProps = (dispatch) => ({
	userAuth: (userRegisterData: UserAuth) =>
		dispatch(userAuth({ ...userRegisterData })),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserRegister);
