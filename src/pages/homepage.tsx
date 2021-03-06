import React, { Fragment, useEffect, useState } from 'react';
import Footer from '../components/footer';
import LoadingPage from '../components/loading-page';
import Navbar from '../components/navbar';
import Reviews from '../components/reviews';

interface Props {}

const cardItems = [
	{
		icon: '../assets/icons/298-coins-outline.svg',
		label: 'Basics of Stock Market',
	},
	{
		icon: '../assets/icons/453-savings-pig-outline.svg',
		label: 'Fundamental Analysis',
	},
	{
		icon: '../assets/icons/943-commodity-outline.svg',
		label: 'Trading and Techincal Analysis',
	},
	{
		icon: '../assets/icons/948-stock-share-outline.svg',
		label: 'Mutual Funds',
	},
	{
		icon: '../assets/icons/955-demand-outline.svg',
		label: 'Real Estate',
	},
	{
		icon: '../assets/icons/946-equity-security-outline.svg',
		label: 'Government Investment Schemes',
	},
];

const pointItems = [
	'A community of 1000+ people with the same mindset and wavelength as you.',
	"Mentors with 3+ Years of experience who will help you through this beautiful journey so that YOU DON'T HAVE TO GO THROUGH THE YEARS OF PAIN OF LEARNING WITH BITTER EXPERIENCES OF LOSSES.",
	'In-depth explaination of every topic in the simplest form.',
	'Live sessions to give you that Hands-on experience and real life example.',
];

const Card = ({ item }: { item: any }) => {
	return (
		<div
			className="card"
			data-aos="fade-up"
			data-aos-delay="30"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out-cubic"
		>
			<img src={item.icon} alt="asd" />
			<p className="para-text">{item.label}</p>
		</div>
	);
};

const Point = ({ text }: { text: any }) => {
	return (
		<div className="point-sec">
			<div className="circle-main">
				<p></p>
			</div>
			<p className="para-text">{text}</p>
		</div>
	);
};

// sections

const HeadingSection = () => {
	return (
		<div className="heading-cont">
			<div className="">
				<h1>Bullsorg</h1>
				<p className="para-headings">
					Breaking Chains of Financial Dependency. Lorem ipsum dolor sit
					amet consectetur adipisicing elit. Distinctio nemo consequuntur
					corporis sunt veritatis tenetur.
				</p>
			</div>
			<div className="buttons-cont-heading">
				<a
					href="https://g.page/bullsorg/review?gm"
					target="_blank"
					rel="noreferrer"
				>
					<button type="button" className="btn-primary">
						Join now
					</button>
				</a>
				<a
					href="https://g.page/bullsorg/review?gm"
					target="_blank"
					rel="noreferrer"
				>
					<button type="button" className="btn-secondary ml-2">
						Review Us
					</button>
				</a>
			</div>
		</div>
	);
};

const AboutSection = () => {
	return (
		<div className="about-section-cont" id="about-section">
			<img
				src="/Vector Smart Object-5.png"
				alt="asd"
				data-aos="fade-up"
				data-aos-delay="30"
				data-aos-duration="700"
				data-aos-easing="ease-in-out-cubic"
			/>
			<div
				className="about-in"
				data-aos="fade-up"
				data-aos-delay="30"
				data-aos-duration="700"
				data-aos-easing="ease-in-out-cubic"
			>
				<p className="sub-heading">About Us</p>
				<h3 className="headings">What we do</h3>
				<p className="para-text">
					We are a group of people who share the same vision, to help
					people achieve Financial Independence through mindful solutions.
					With us, you can learn all the tools necessary to generate
					passive streams of income, helping you become wealthy.
				</p>
			</div>
		</div>
	);
};

const CardsSection = () => {
	return (
		<div
			className="cards-section"
			id="card-section"
			data-aos="fade-up"
			data-aos-delay="30"
			data-aos-duration="700"
			data-aos-easing="ease-in-out-cubic"
		>
			<div
				className="main-container"
				data-aos="fade-up"
				data-aos-delay="30"
				data-aos-duration="700"
				data-aos-easing="ease-in-out-cubic"
			>
				<p className="sub-heading">Covering from the basics to advanced.</p>
				<h4 className="headings-2">
					Whether you are a complete beginner or an experienced trader,
					BullsORG has you covered.
				</h4>

				<div className="cards-container">
					{cardItems.map((item) => (
						<Card item={item} key={item.label} />
					))}
				</div>
			</div>
		</div>
	);
};

const PointsSection = () => {
	return (
		<div className="points-section" id="points-section">
			<div className="points-container">
				<div
					className="points-in"
					data-aos="fade-up"
					data-aos-delay="30"
					data-aos-duration="700"
					data-aos-easing="ease-in-out-cubic"
				>
					<p className="sub-heading">Our Features</p>
					<h3 className="headings">We provide best value to you</h3>
					<div className="top-points">
						{pointItems.map((text) => (
							<Point text={text} />
						))}
					</div>
				</div>
				<img
					src="/Vector Smart Object-1.png"
					alt=""
					data-aos="fade-up"
					data-aos-delay="30"
					data-aos-duration="700"
					data-aos-easing="ease-in-out-cubic"
				/>
			</div>
		</div>
	);
};

const CTA = () => {
	return (
		<div id="CTA" className="CTA">
			<div className="main-container">
				<img
					src="/Vector Smart Object.png"
					alt=""
					data-aos="fade-up"
					data-aos-delay="30"
					data-aos-duration="700"
					data-aos-easing="ease-in-out-cubic"
				/>
				<h3
					className="headings"
					data-aos="fade-up"
					data-aos-delay="30"
					data-aos-duration="700"
					data-aos-easing="ease-in-out-cubic"
				>
					Join us now
				</h3>
				<p
					className="para-headings"
					data-aos="fade-up"
					data-aos-delay="30"
					data-aos-duration="700"
					data-aos-easing="ease-in-out-cubic"
				>
					Join us now to begin a journey of a lifetime.
				</p>
				<button type="button" className="btn-primary">
					JOIN US
				</button>
			</div>
		</div>
	);
};

const Homepage: React.FC = (props: Props) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	return (
		<Fragment>
			{loading ? (
				<LoadingPage />
			) : (
				<>
					<Navbar />

					<div className="page-container">
						<HeadingSection />

						<AboutSection />

						<CardsSection />

						<PointsSection />

						<Reviews />

						<CTA />

						<Footer />
					</div>
				</>
			)}
		</Fragment>
	);
};

export default Homepage;
