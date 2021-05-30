import { Fragment, useState } from 'react';
import {
	faLongArrowAltLeft,
	faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {}

const reviews = [
	{
		image: '/assets/images/rohit_saraf.jpg',
		name: 'Rohit Saraf',
		review:
			'Bullsorg is the best place to learn trading and investing.The mentors here are excellent at the work and explains the concepts like a brother. Systematic lectures helped me in understanding the market even better.Really learned a lot here especially the execution of theory we learned in actual trading. And the best day of the week is the doubt session via video conferencing. Very happy to be a student at bullsorg. Keep it up guys. GrowMore❤️',
	},
	{
		image: '/assets/images/manash.jpg',
		name: 'Manash Kedia',
		review:
			'I started from my beginning of stock market, bullsORG gave me the opportunity to grow financial and learn about financial knowledge. I have great experience from this community and thanks for giving this opportunity...❤️❤️',
	},
	{
		image: '/assets/images/agrim_sharma.jpg',
		name: 'Agrim Sharma',
		review:
			'I started my stock market journey 5months ago and since then, Bullsorg team stood by my side. Instead of just making money, they taught me the ins and outs of the market. They provided me with knowledge and platform to build a strong foundation. You got personal financial issues, have fundamental doubts or need technical analysis? They got you. The whole team is very cooperative and responsive, quick in communication, they don’t keep you waiting. Bullsorg has grown tremendously in such a short time and I’m glad to be part of it. All the very best for future endeavours, wish you great success!',
	},
	{
		image: '/assets/images/prateek_beel.jpg',
		name: 'Prateek Beel',
		review:
			'Every succesful person requires a mentor and it was very confusing for me to find someone who is expert in the field of Investing and trading.So one day while scrolling through instagram I came across Bullsorg and when I contacted them they explained me everything in detail .Whenever I am in any problem they have  always helped me and guided in the right path.Now since its been more than 5 months of joining,I have enjoyed everyday while learning more in depth about the stock market.',
	},
	{
		image: '/assets/images/abhinav.jpg',
		name: 'Abhinav Dogra',
		review:
			'Team Bullsorg assisted me a lot  to get handy with market and understand financial concepts. whole team is very cooperative and do not shy away from answering any of your queries/doubts. From assisting in demat account opening steps to recommending books to boost up and uplift your financial IQ and most importantly those Saturday live doubt clearing sessions were so useful. Bullsorg have come a long way in a short span and a lot more to go.I wish them nothing but the best for future!',
	},
];

const Review = ({ value }: { value: any }) => (
	<div
		className="review"
		data-aos="fade-up"
		data-aos-delay="50"
		data-aos-duration="700"
		data-aos-easing="ease-in-out-cubic"
	>
		<img src={value.image} alt="asd" />

		<h3>{value.name}</h3>

		<p className="para-headings review-para">
			<span>
				<img src={`/assets/icons/quotation-mark.svg`} alt="as" />
			</span>
			{value.review}
		</p>
	</div>
);

const Reviews = (props: Props) => {
	const [index, setIndex] = useState(0);

	const handlePositionIncrease = () => {
		if (index === reviews.length - 1) {
			setIndex(0);
		} else {
			setIndex((val) => val + 1);
		}
	};

	const handlePositionDecrease = () => {
		if (index === 0) {
			setIndex(reviews.length - 1);
		} else {
			setIndex((val) => val - 1);
		}
	};

	return (
		<Fragment>
			<div className="review-section" id="reviews-section">
				<div className="review-container">
					<p
						className="sub-heading"
						data-aos="fade-up"
						data-aos-delay="30"
						data-aos-duration="700"
						data-aos-easing="ease-in-out-cubic"
					>
						Testimonies
					</p>
					<h3
						className="headings t-c"
						data-aos="fade-up"
						data-aos-delay="30"
						data-aos-duration="700"
						data-aos-easing="ease-in-out-cubic"
					>
						What our customers say about us.
					</h3>

					<Review value={reviews[index]} />

					<div className="bottom-container">
						<div className="arr-cont">
							<FontAwesomeIcon
								icon={faLongArrowAltLeft}
								onClick={handlePositionDecrease}
							/>
						</div>
						<div className="circles-cont">
							{Array.from({ length: reviews.length }, (v, i) => (
								<div
									className={`circle ${index === i && `selected`}`}
									onClick={() => setIndex(i)}
								></div>
							))}
						</div>
						<div className="arr-cont">
							<FontAwesomeIcon
								icon={faLongArrowAltRight}
								onClick={handlePositionIncrease}
							/>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Reviews;
