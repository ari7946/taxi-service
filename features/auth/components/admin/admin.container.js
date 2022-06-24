import React, { useEffect } from 'react';
import './admin.styles.ts';
import { useRouter } from 'next/router';
import AdminLogin from './admin-login.component';

import { selectAuthRole } from '../../redux/auth.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const AdminContainer = ({ authRole }) => {
	const router = useRouter();

	useEffect(() => {
		if ((authRole === 'user') | (authRole === 'admin')) {
			router.push('/trips');
		}
	}, [authRole]);

	return <AdminLogin />;
};

const mapStateToProps = createStructuredSelector({
	authRole: selectAuthRole,
});

export default connect(mapStateToProps)(AdminContainer);
