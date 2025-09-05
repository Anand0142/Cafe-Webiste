import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Zany Grandiose Fish</title>
        <meta property="og:title" content="Zany Grandiose Fish" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100">
              Place your order seamlessly and enjoy our handcrafted delights.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Sign Up</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102">Menu</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">Home</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105">Order Now</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">Menu</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107">Order Now</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">
              Welcome to Hipsters Cafe, where coffee meets creativity.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">
              Explore our artisanal menu crafted with passion and precision.
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110">Testimonials</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">Testimonials</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Discover what our customers have to say about their Hipsters Cafe
              experience.
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Log In</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114">Order Now</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115">Explore Menu</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">Welcome to Hipsters Cafe</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
              Experience the perfect blend of coffee and creativity at our
              modern cafe.
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118">
              Engage with our interactive menu cards to explore our offerings in
              a fun and dynamic way.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">Interactive Experience</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">
              Effortlessly place your orders through our seamless order flow for
              a convenient dining experience.
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121">Fully Responsive Design</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">
              Enjoy a fully responsive design that adapts to all screen sizes
              for a consistent user experience.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">Efficient Order Flow</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124">
              Ready to experience the Hipsters Cafe difference?
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Explore our menu, place an order, and taste the goodness!
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Order Now</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127">
              Display customer testimonials to build trust and credibility for
              the cafe.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128">
              Engage customers with interactive menu cards showcasing delicious
              offerings.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129">Smooth Order Flow</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130">Interactive Menu Cards</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Effortless order flow for customers to place their orders
              seamlessly.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132">Testimonials Showcase</span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text133">$29.99</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text134">Order Now</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136">Order Now</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139">Testimonials Section</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143">Futuristic Design Elements</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146">$199.99</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147">Get started</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Order Now</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149">Fully Responsive Layout</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150">Deployment-Ready Code</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151">$200/yr</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152">Business plan</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153">Feature text goes here</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155">Framer Motion Animations</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157">Order Flow Functionality</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159">Feature text goes here</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165">or $29 monthly</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text166">$19.99</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167">or $49 monthly</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170">or $20 monthly</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text171">$299/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text172">$299.99</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text174">$499/yr</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176">Responsive Design</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text177">$99.99</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178">Interactive Menu Cards</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179">Modern Design Elements</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text181">Get started</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text182">$9.99</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text183">Enterprise plan</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text184">
              Browse through our interactive menu cards and select your
              preferred items from a wide range of delicious options.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text185">
              Sit back and relax while our team prepares your order with care
              and attention to detail.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text186">Place Your Order</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text187">
              Once you&apos;ve made your selection, proceed to the order flow to
              customize your order and make any special requests.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text188">Choose Your Favorite Items</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text189">Sit Back and Relax</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text190">
              Once your order is ready, savor the flavors of our freshly
              prepared dishes and enjoy a delightful dining experience.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text191">Enjoy Your Meal</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text192">Tech Enthusiast</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text193">Food Blogger</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text194">Alice Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text195">Emily Brown</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text196">
              I love the modern vibe of Hipsters Cafe. The menu offers a great
              variety, and the ordering process is seamless.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text197">John Doe</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text198">Entrepreneur</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text199">Michael Johnson</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text200">
              See what our customers have to say about their experience at
              Hipsters Cafe.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text201">Designer</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text202">
              Hipsters Cafe is my go-to place for delicious coffee and pastries.
              The ambiance is cozy, and the staff is always friendly.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text203">Testimonials</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text204">
              Hipsters Cafe exceeded my expectations. The attention to detail in
              every dish is remarkable. I highly recommend it!
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text205">
              As a busy entrepreneur, I appreciate the quick service at Hipsters
              Cafe. The quality of the food keeps me coming back.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Have a question or want to learn more about our services? Feel
              free to reach out to us.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text207">
              123 Main Street, Hipsterville, CA 90210
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text208">Contact Us</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text209">
              For any inquiries or assistance, visit our support center located
              at 456 Elm Avenue, Hipsterville, CA 90210
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210">Hipsters Cafe Headquarters</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211">Support Center</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text212">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text213">Order Online</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text214">Home</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text215">Terms and Conditions</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text216">Menu</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217">Contact Us</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
