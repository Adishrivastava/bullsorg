import Footer from '../components/footer'
import Reviews from '../components/reviews'

interface Props {

}

const cardItems = [
   {
      icon: '../assets/icons/stock-exchange-app.png   ',
      label: 'Basics of Stock Market'
   },
   {
      icon: '../assets/icons/stock-exchange-app.png   ',
      label: 'Fundamental Analysis'
   },
   {
      icon: '../assets/icons/stock-exchange-app.png   ',
      label: 'Trading and Techincal Analysis'
   },
   {
      icon: '../assets/icons/stock-exchange-app.png   ',
      label: 'Mutual Funds'
   },
   {
      icon: '../assets/icons/stock-exchange-app.png   ',
      label: 'Real Estate'
   },
   {
      icon: '../assets/icons/stock-exchange-app.png   ',
      label: 'Passive income'
   },
]

const pointItems = [
   "A community of 500+ people with the same mindset and wavelength as you.",
   "Mentors with 3+ Years of experience who will help you through this beautiful journey so that YOU DON'T HAVE TO GO THROUGH THE YEARS OF PAIN OF LEARNING WITH BITTER EXPERIENCES OF LOSSES.",
   "In-depth explaination of every topic in the simplest form.",
   "Live sessions to give you that Hands-on experience and real life example.",
]

const Card = ({ item }: { item: any }) => {
   return (
      <div className="card">
         <img src={item.icon} alt="asd" />
         <p className="para-text">{item.label}</p>
      </div>
   )
}

const Point = ({ text }: { text: any }) => {
   return (
      <div className="point-sec">
         <div className="circle-main">
            <p></p>
         </div>
         <p className="para-text">
            {text}
         </p>
      </div>
   )
}

// about section
const AboutSection = () => {

   return (
      <div className="about-section-cont">
         <img src="/Vector Smart Object-5.png" alt="asd" />
         <div className="about-in">
            <h2 className="headings">About Us</h2>
            <p className="para-text">
               We are a group of people who share the same vision, to help people achieve financial independency through mindful solutions. With us you can learn all the tools necessary to achieve the goal of financial independency.
            </p>
         </div>
      </div>

   )
}

const CardsSection = () => {
   return (
      <div className="cards-section">

         <div className="main-container">
            <p className="sub-heading">
               Covering from the basics to advanced.
            </p>
            <h4 className="headings-2">
               Whether you are a complete beginner or an experienced trader, BullsORG has you covered.
          </h4>

            <div className="cards-container">
               {cardItems.map(item => (
                  <Card item={item} key={item.label} />
               ))}
            </div>
         </div>

      </div>
   )
}

const PointsSection = () => {
   return (
      <div className="points-section">
         <div className="points-container">
            <div className="points-in">
               <h3 className="headings">
                  We provide best value to you
               </h3>
               <div className="top-points">

                  {
                     pointItems.map((text) => (
                        <Point text={text} />
                     ))
                  }

               </div>
            </div>
            <img src="/Vector Smart Object-2.png" alt="" />

         </div>
      </div>
   )
}


const Homepage = (props: Props) => {
   return (
      <div className="page-container">

         <div className="heading-cont"
         >
            <div className="">
               <h1>Bullsorg</h1>
               <p>A crapy place for all those greedy people.</p>
            </div>
            <div className="">
               <button type="button">Join now</button>
            </div>
         </div>

         <AboutSection />

         <CardsSection />

         <PointsSection />

         <Reviews />

         <Footer />

      </div>
   )
}

export default Homepage
