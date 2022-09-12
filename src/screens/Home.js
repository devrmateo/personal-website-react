import { MainNav, SubNav } from "../elements/";
import personalImage from "../assets/images/profile.jpeg";

export const Home = () => (
  <>
    <MainNav />
    <section className="content index">
      <h2>Web Developer</h2>
      <div className="image">
        <img className="profile" src={personalImage} alt="Matthew Smith" />
      </div>
      <p className="first">
        I am a Front-End Developer at the OptOut Media Foundation. My principal
        skills include React, React Native, and Redux. While I love building
        applications in general, I prefer to work on projects that advance a
        leftist vision of society. Before becoming a web developer, I taught
        college Spanish for almost twenty years. My experience in the humanities
        lends me a unique insight into the tech world.
      </p>
      <p>
        My transition from the field of higher education to that of web
        development began in 2016, when I completed Udacity's Intro to
        Programming Nanodegree, and culminated in 2019, when I completed the
        Front-End Web Developer and React Nanodegrees. I was fortunate to have
        earned a scholarship through the Grow With Google Initiative to the
        Front-End Web Developer Nanodegree. During this program, I wrote about
        my career transition in a Medium blog post (see the link in the
        "Related" section), and earned another scholarship to the React
        Nanodegree.
      </p>
      <p>
        As I was completing my career change, I was also becoming engaged
        politically. In 2016, I became a part of the movement that sprang up
        around the presidential candidacy of Senator Bernie Sanders,
        volunteering to make phone calls to voters and engaging with fellow
        campaign volunteers. After the election, I remained politically active,
        volunteering for organizations such as Justice Democrats.
      </p>
      <p>
        Ever since obtaining my certification in 2019, I have been working on
        projects with a progressive slant. I started by serving on the team that
        created BernieBnB–an AirB&B–style application for volunteers of the
        Sanders 2020 campaign (see the link in the "Related" section). Moreover,
        as of October, 2020, I am a front-end developer at the OptOut Media
        Foundation, where I have been assisting in the development of OptOut
        News, a non-profit independent news aggregator app (see link in the "Related" section for more
        info), as well as making enhancements to the organization's website.
      </p>
    </section>
    <SubNav />
  </>
);
