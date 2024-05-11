// Home.js
import Banner from './Banner.js';
import FeaturedProducts from './FeaturedProducts.js';
import ShortAbout from './ShortAbout.js';
import NewsletterSubscription from './NewsletterSubscription.js';
import FeaturedArticle from './FeaturedArticle.js';
import Testimonials from './Testimonials.js';
import Footer from './Footer.js';
import Partners from './Partners.js';
const Home = () => {
  return (
    <>
      <Banner />
      <FeaturedProducts />
      <ShortAbout />
      <div style={{margin: '0px'}}><FeaturedArticle /></div>
      <Testimonials />
      <NewsletterSubscription />
      <div style={{margin: '70px'}}><Partners /></div>
      <Footer />
    </>

  );
};

export default Home;
