import {
	faFacebook,
	faInstagram,
	faLinkedin,
	faTwitter,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {}

const Footer = (props: Props) => {
	return (
		<div className="footer" id="footer">
			<div className="top-section">
				<img src="/assets/logos/logoBig.png" alt="" />
				<div className="">
					<h5 className="sub-heading t-c">Connect with is</h5>
					<div className="socials">
						<a
							href="https://www.facebook.com/bullsorg/"
							rel="noreferrer"
							target="_blank"
						>
							<FontAwesomeIcon icon={faFacebook} />
						</a>
						<a
							href="https://www.instagram.com/bullsorg/?hl=en"
							rel="noreferrer"
							target="_blank"
						>
							<FontAwesomeIcon icon={faInstagram} />
						</a>
						<a
							href="https://twitter.com/BULLSORG1?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
							rel="noreferrer"
							target="_blank"
						>
							<FontAwesomeIcon icon={faTwitter} />
						</a>
						<a
							href="https://in.linkedin.com/company/bullsorg"
							rel="noreferrer"
							target="_blank"
						>
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
						<a
							href="https://www.youtube.com/channel/UCaqD4j-tB3ojApvRdgP5tVQ"
							rel="noreferrer"
							target="_blank"
						>
							<FontAwesomeIcon icon={faYoutube} />
						</a>
					</div>
				</div>
			</div>
			<div className="middle-section">
				<h5 className="sub-heading t-c">Contact US</h5>
				<p className="para-text">bullsorg@gmail.com</p>
				<br />
				<p className="para-text">
					+91-9109289927 <br /> +91-8851074188
				</p>
				<p className="para-text"></p>
			</div>
			<div className="bottom-section">
				<p className="para-text">2021 Bullsorg. All rights reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
