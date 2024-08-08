import { Helmet } from 'react-helmet-async';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
// import css from './HomePage.module.css'
import css from './HomePage.module.css';

const HomePage = () => {

  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div className={css.homePage}>
        <WelcomeSection />
        <AdvantagesSection />
      </div>
    </>
  );
};

export default HomePage;
