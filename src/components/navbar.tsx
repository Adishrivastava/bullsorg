import React from 'react';
import { HashLink } from 'react-router-hash-link';
interface Props {}

const Navbar = (props: Props) => {
	return (
		<nav className="navbar">
			<div className="nav-inner">
				<img src="/assets/logos/logo.png" alt="LOGO HERE" />

				<div className="sec-section">
					<div className="menu-items">
						<HashLink smooth to="#about-section">
							about
						</HashLink>
						<HashLink smooth to="#reviews-section">
							reviews
						</HashLink>
						<HashLink smooth to="#footer">
							contact us
						</HashLink>
					</div>

					<button type="button" className="btn-primary">
						connect us
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
