// Home.jsx
import { useState } from "react";
import styles from "./Home.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Faq from "../../Components/FAQ/Faq";
import OverviewCard from "../../Components/OverviewCard/OverviewCard";
import { testimonailData } from "../../utilis/Testimonial";
import Testimonial from "../../Components/Testimonial/Testimonial";

// eslint

const Home = () => {
  const [review, setReview] = useState(testimonailData);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.gradient_bg}></div>
      <div className={styles.rounded_bg_right}></div>
      <div className={styles.rounded_bg_left}></div>
      <Navbar />
      <div className={styles.bodySection}>
        <div className={styles.heroSection}>
          <div className={styles.sloganContainer}>
            <h1 className={styles.herosectionTitle}>Learn</h1>
            <h2 className={styles.herosectionsubTitle}>with CheersAi !</h2>
            <p className={styles.herosectionDescription}>
              The world's most humanistic AI-powered ,<br />
              therapist - personalized and science-backed.
            </p>
            <div className={styles.btnWrapper}>
              <button className={styles.accessBtn}>Access beta</button>
              <button className={styles.pitchBtn}>Pitch Deck</button>
            </div>
            <button className={styles.freeBtn}>Free Now</button>
          </div>

          <div className={styles.videoWrapper}>
            <video controls className={styles.video}>
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className={styles.overviewContainer}>
          <div className={styles.overview_container_header}>
            <h1 className={styles.overviewHeading}>AI-Powered</h1>
            <div className={styles.overview_container_description}>
              <p className={styles.overviewTitle}>
                A Comprehensive Therapy Platform
              </p>
              <p className={styles.overviewDescription}>
                Features designed to emulate and elevate the nuances of
                conventional therapy.{" "}
              </p>
            </div>
          </div>
          <div className={styles.overviewCardContainer}>
            <OverviewCard />
            <OverviewCard />
            <OverviewCard />
            <OverviewCard />
            <OverviewCard />
            <OverviewCard />
          </div>
        </div>
        <div className={styles.TestiomonialContainer}>
          <div className={styles.TestimonialFirstContainer}>
            <p>Testimonial</p>
            <h1>Struggling Individuals </h1>
            <h1> Love CheersAI </h1>
            <h3>
              Listen to individuals’ who’ve overcome mental health challenges
              with CheersAI
            </h3>
            <button className={styles.getStartedBtn}>Get Started</button>
          </div>
          <div className={styles.testimonials}>
            {review.map((item) => {
              return <Testimonial item={item} />;
            })}
          </div>
        </div>
        <Faq />
        <div className={styles.endSection}>
          <h1>Try Cheers Ai free for now</h1>
          <button className={styles.accessBtn}>Access Beta</button>
          <p className={styles.community}>JOIN OUR LARGE COMMUNITY NOW</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
