import React from 'react'
import Footer from '../components/footer'

interface Props {

}

const Point = ({ item }: { item: any }) => {
   return (
      <div className="point">
         <img src={item.icon} alt="asd" />
         <h5>{item.label}</h5>
      </div>
   )
}

const pointItems = [
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
      label: 'other financial intruments that help in fetching that passive income'
   },
]

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

         <fieldset className="second-section main-container">
            <legend>
               <h2>
                  Who are we
               </h2>
            </legend>
            <p className="">
               " We are a group of people who share the same vision, to help people achieve financial independency through mindful solutions. With us you can learn all the tools necessary to achieve the goal of financial independency. "
            </p>
         </fieldset>

         <div className="points-section main-container">

            <h4>
               <p>
                  Covering from the basics to advanced.
               </p>
               Whether you are a complete beginner or an experienced trader, BullsORG has you covered.
            </h4>

            <div className="points-container">
               {pointItems.map(item => (
                  <Point item={item} key={item.label} />
               ))}
            </div>

         </div>

         <div className="fourth-section">
            <div className="main-container">
               <img src="../assets/computer.png" alt="" />

               <h3 >
                  Come be a part of a thriving Financial Educational Platform where you interact and learn with the best
               </h3>

               <div className="top-points">
                  <div className="point-sec">
                     <div className="circle-main">
                        <p></p>
                     </div>
                     <p>
                        A community of 500+ people with the same mindset and wavelength as you
                     </p>
                  </div>
                  <div className="point-sec">
                     <div className="circle-main">
                        <p></p>
                     </div>
                     <p>
                        Mentors with 3+ Years of experience who will help you through this beautiful journey so that YOU DON'T HAVE TO GO THROUGH THE YEARS OF PAIN OF LEARNING WITH BITTER EXPERIENCES OF LOSSES
                     </p>
                  </div>
                  <div className="point-sec">
                     <div className="circle-main">
                        <p></p>
                     </div>
                     <p>
                        In-depth explaination of every topic in the simplest form
                     </p>
                  </div>
                  <div className="point-sec">
                     <div className="circle-main">
                        <p></p>
                     </div>
                     <p>
                        Live sessions to give you that Hands-on experience and real life example
                     </p>
                  </div>

               </div>
            </div>
         </div>

         <div className="reviews-section main-container">

         </div>

         <Footer />

      </div>
   )
}

export default Homepage
