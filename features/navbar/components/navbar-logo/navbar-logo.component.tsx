import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo2 from '../../../../public/navbar/assets/cyc-brand.png';
import * as Styled from './navbar-logo.styles';

export default function NavbarLogo() {
	return (
		<Styled.LogoWrapper>
			<Link href='/'>
				<a>
					<Image
						src={logo2}
						alt='Coastal Yellow Cabs Logo'
						className='logo'
						width={120}
						height={60}
					/>
				</a>
			</Link>
		</Styled.LogoWrapper>
	);
}
