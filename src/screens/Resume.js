import { MainNav } from "../elements";

export const Resume = () => (
  <>
    <MainNav />
    <section className="content extendedContent">
      <h2>Resume</h2>
      <p className="summary">
        I am a Front-End Developer at the OptOut Media Foundation. In addition,
        I am a talented problem solver, critical thinker, and communicator,
        aided by my previous experience as a college-level Spanish instructor.
      </p>
      <h3 className="sectionHeader">Projects</h3>
      <section className="resumeSection project">
        <div className="dates">Oct 2020 - Present</div>
        <section className="projectInfo">
          <div className="projectTitle">
            <a
              className="projectLink"
              href="https://optout.news/"
              target="_blank"
              rel="noreferrer"
            >
              OptOut News
            </a>
          </div>
          <div className="projectDesc">
            <ul>
              <li className="description">
                Utilize my skills with React Native, Redux, Firebase and Git to build
                front-end features for a non-profit news aggregator app.
              </li>
              <li className="description">
                Participate in weekly meetings with teammates.
              </li>
            </ul>
          </div>
        </section>
      </section>
      <section className="resumeSection project">
        <div className="dates">Jun 2019 - Apr 2020</div>
        <section className="projectInfo">
          <div className="projectTitle">
            <a
              className="projectLink"
              href="https://github.com/CodersForBernieSanders/BernieBnB#download"
              target="_blank"
              rel="noreferrer"
            >
              BernieBnB
            </a>
          </div>
          <div className="projectDesc">
            <ul>
              <li className="description">
                Utilized my skills with React Native, Firebase, and Git to build
                front-end and back-end features on an AirB&B-type app for
                political campaign staff and volunteers.
              </li>
              <li className="description">
                Participated in pair programming sessions and weekly meetings
                with teammates.
              </li>
            </ul>
          </div>
        </section>
      </section>
      <section className="resumeSection project">
        <div className="dates">May 2019</div>
        <section className="projectInfo">
          <div className="projectTitle">Mobile Flashcards</div>
          <div className="projectDesc">
            <ul>
              <li className="description">
                Created an iOS and Android mobile flashcards application using
                React Native.
              </li>
              <li className="description">
                Leveraged Redux and AsyncStorage for data management.
              </li>
              <li className="gitHub">
                <a
                  className="url"
                  href="https://github.com/devrmateo/mobile-flashcards"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/devrmateo/mobile-flashcards
                </a>
              </li>
            </ul>
          </div>
        </section>
      </section>
      <section className="resumeSection project">
        <div className="dates">Apr 2019</div>
        <section className="projectInfo">
          <div className="projectTitle">
            <a
              className="projectLink"
              href="projects/wouldYouRather"
              target="_blank"
              rel="noreferrer"
            >
              Would You Rather App
            </a>
          </div>
          <div className="projectDesc">
            <ul>
              <li className="description">
                Built online version of popular “Would You Rather” game from
                scratch.
              </li>
              <li className="description">
                Leveraged React for UI and Redux for state management.
              </li>
              <li className="gitHub">
                <a
                  className="url"
                  href="https://github.com/devrmateo/would-you-rather"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/devrmateo/would-you-rather
                </a>
              </li>
            </ul>
          </div>
        </section>
      </section>
      <section className="resumeSection project">
        <div className="dates">Dec 2018</div>
        <section className="projectInfo">
          <div className="projectTitle">
            <a
              className="projectLink"
              href="projects/neighborhoodMap"
              target="_blank"
              rel="noreferrer"
            >
              Neighborhood Map
            </a>
          </div>
          <div className="projectDesc">
            <ul>
              <li className="description">
                Created an online neighborhood map application using React, the
                Google Maps JavaScript API, and the FourSquare Places API.
              </li>
              <li className="gitHub">
                <a
                  className="url"
                  href="https://github.com/devrmateo/neighborhood-map-react"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/devrmateo/neighborhood-map-react
                </a>
              </li>
            </ul>
          </div>
        </section>
      </section>
      <h3 className="sectionHeader">Experience</h3>
      <section className="resumeSection">
        <div className="dates">Oct 2020 - Present</div>
        <section className="details">
          <span className="title">Front-End Developer</span>
          <span className="institution">OptOut Media Foundation</span>
          <span className="city">Remote</span>
          <ul className="duties">
            <li className="description">
              Build front-end features as a developer for a non-profit
              news aggregator app.
            </li>
            <li className="description">
              Collaborate with front-end lead and other teammates to ensure
              quality and timely updates to the app.
            </li>
            <li className="link">
              <a
                className="url"
                href="https://originals.optout.news/"
                target="_blank"
                rel="noreferrer"
              >
                https://originals.optout.news/
              </a>
            </li>
          </ul>
        </section>
      </section>
      <section className="resumeSection">
        <div className="dates">Jun 2019 - Mar 2020</div>
        <section className="details">
          <span className="title">Full-Stack Developer</span>
          <span className="institution">Coders For Bernie Sanders</span>
          <span className="city">Remote</span>
          <ul className="duties">
            <li className="description">
              Built front-end and back-end features as a volunteer developer in
              service to a political campaign.
            </li>
            <li className="description">
              Collaborated with a team of seven developers in an agile
              environment.
            </li>
            <li className="gitHub">
              <a
                className="url"
                href="https://github.com/CodersForBernieSanders/BernieBnB"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/CodersForBernieSanders/BernieBnB
              </a>
            </li>
          </ul>
        </section>
      </section>
      <section className="resumeSection">
        <div className="dates">Jun 2019 - Apr 2020</div>
        <section className="details">
          <span className="title">Campaign Volunteer</span>
          <span className="institution">Bernie Sanders 2020</span>
          <span className="city">Agoura Hills, California</span>
          <ul className="duties">
            <li className="description">
              Communicated with potential voters through community canvasses and
              on the phone in both English and Spanish.
            </li>
            <li className="description">
              Lead community canvasses by organizing a staging area and training
              volunteers.
            </li>
          </ul>
        </section>
      </section>
      <section className="resumeSection">
        <div className="dates">May 2019 - Oct 2019</div>
        <section className="details">
          <span className="title">Independent Consultant</span>
          <span className="institution">Udacity</span>
          <span className="city">Remote</span>
          <ul className="duties">
            <li className="description">
              Provided individualized technical support through code reviews and
              one-on-one virtual calls with students.
            </li>
            <li className="description">
              Served as an individual mentor to a cohort of up to fifty
              students.
            </li>
          </ul>
        </section>
      </section>
      <section className="resumeSection">
        <div className="dates">May 2017 - Jun 2018</div>
        <section className="details">
          <span className="title">Webmaster</span>
          <span className="institution">Lagoon Playgroup</span>
          <span className="city">Long Beach, California</span>
          <ul className="duties">
            <li className="description">
              Provided timely and quality website management for preschool
              website built with WordPress.
            </li>
            <li className="description">
              Initiated and developed enrolled-families section of website for
              thirty parent users.
            </li>
            <li className="link">
              <a
                className="url"
                href="http://lagoonplaygroup.com/"
                target="_blank"
                rel="noreferrer"
              >
                http://lagoonplaygroup.com/
              </a>
            </li>
          </ul>
        </section>
      </section>
      <section className="resumeSection">
        <div className="dates">Jan 2018 - May 2018</div>
        <section className="details">
          <span className="title">Volunteer</span>
          <span className="institution">Justice Democrats</span>
          <span className="city">Long Beach, California</span>
          <ul className="duties">
            <li className="description">
              Made phone calls to potential voters in support of the
              organization's candidates.
            </li>
            <li className="description">
              Attended phonebank with other volunteers.
            </li>
          </ul>
        </section>
      </section>
      <section className="resumeSection">
        <div className="dates">Jan 2012 - May 2018</div>
        <section className="details">
          <span className="title">Adjunct Faculty-Spanish</span>
          <span className="institution">Rio Hondo College</span>
          <span className="city">Whittier, California</span>
          <ul className="duties">
            <li className="description">
              Taught introductory and heritage Spanish classes and collaborated
              actively with colleagues in organizing college activities.
            </li>
            <li className="description">
              Provided instruction for over fifteen sections of web-hybrid
              Spanish classNamees, as well as three fully online courses.
            </li>
          </ul>
        </section>
      </section>
      <section className="resumeSection">
        <div className="dates">Jan 2013 - Dec 2016</div>
        <section className="details">
          <span className="title">Adjunct Faculty-Spanish</span>
          <span className="institution">Fullerton College</span>
          <span className="city">Fullerton, California</span>
          <ul className="duties">
            <li className="description">
              Taught introductory Spanish classes and worked with colleagues to
              promote departmental activities and initiatives.
            </li>
            <li className="description">
              Employed best teaching practices in more than ten class sections,
              including several evening and weekend courses.
            </li>
          </ul>
        </section>
      </section>
      <section className="resumeSection">
        <div className="dates">Aug 2009 - May 2011</div>
        <section className="details">
          <span className="title">Instructional Faculty-Spanish</span>
          <span className="institution">Pima Community College</span>
          <span className="city">Tucson, Arizona</span>
          <ul className="duties">
            <li className="description">
              Taught introductory and intermediate Spanish classes and worked
              actively with colleagues to ensure a smoothly functioning
              department.
            </li>
            <li className="description">
              Incorporated technology in innovative and creative ways for more
              than fifteen class sections.
            </li>
          </ul>
        </section>
      </section>
      <section className="resumeSection">
        <div className="dates">May 2006 - Aug 2009</div>
        <section className="details">
          <span className="title">Webmaster</span>
          <span className="institution">
            Department of Spanish and Portuguese, The University of Arizona
          </span>
          <ul className="duties">
            <li className="description">
              Performed all website development and provided assistance to
              faculty and graduate-student users.
            </li>
            <li className="description">
              Supported a department of thirty faculty users and sixty-plus
              graduate students.
            </li>
            <li className="link">
              <a
                className="url"
                href="http://spanish.arizona.edu/"
                target="_blank"
                rel="noreferrer"
              >
                http://spanish.arizona.edu/
              </a>
            </li>
          </ul>
        </section>
      </section>
      <section className="resumeSection">
        <div className="dates">May 2006 - Aug 2009</div>
        <section className="details">
          <span className="title">D2L Coordinator</span>
          <span className="institution">
            Department of Spanish and Portuguese, The University of Arizona
          </span>
          <ul className="duties">
            <li className="description">
              Collaborated with D2L Support Team to facilitate online
              instruction for graduate-student teachers.
            </li>
            <li className="description">
              Gave presentations and created online tutorials for a cohort of
              sixty-plus instructors.
            </li>
            <li className="link">
              <a
                className="url"
                href="https://d2l.arizona.edu/d2l/loginh/"
                target="_blank"
                rel="noreferrer"
              >
                https://d2l.arizona.edu/d2l/loginh/
              </a>
            </li>
          </ul>
        </section>
      </section>
      <section className="resumeSection">
        <div className="dates">Aug 2004 - Aug 2009</div>
        <section className="details">
          <span className="title">Graduate Associate in Teaching</span>
          <span className="institution">The University of Arizona</span>
          <span className="city">Tucson, Arizona</span>
          <ul className="duties">
            <li className="description">
              Taught introductory and intermediate Spanish classes and conferred
              with graduate-student colleagues regarding best teaching
              practices.
            </li>
            <li className="description">
              Developed lessons and administered assessments for more than
              fifteen class sections.
            </li>
          </ul>
        </section>
      </section>
      <section className="resumeSection">
        <div className="dates">Aug 2003 - May 2004</div>
        <section className="details">
          <span className="title">Spanish Instructor</span>
          <span className="institution">
            Penn State Erie, The Behrend College
          </span>
          <span className="city">Erie, Pennsylvania</span>
          <ul className="duties">
            <li className="description">
              Taught introductory and intermediate Spanish classes to
              undergraduate students.
            </li>
            <li className="description">
              Developed lessons and provided quality instruction for twelve
              class sections.
            </li>
          </ul>
        </section>
      </section>
      <section className="resumeSection">
        <div className="dates">Aug 2002 - May 2003</div>
        <section className="details">
          <span className="title">Graduate Assistant in Teaching</span>
          <span className="institution">Bowling Green State University</span>
          <span className="city">Bowling Green, Ohio,</span>
          <ul className="duties">
            <li className="description">
              Taught introductory and intermediate Spanish classes and
              collaborated actively with other graduate-student instructors.
            </li>
            <li className="description">
              Developed lessons and gave presentations promoting the
              university's study abroad program to more than fifty undergraduate
              students.
            </li>
          </ul>
        </section>
      </section>
      <section className="resumeSection">
        <div className="dates">Aug 1999 - Jun 2001</div>
        <section className="details">
          <span className="title">Spanish Teacher</span>
          <span className="institution">Saint Edward High School</span>
          <span className="city">Lakewood, Ohio</span>
          <ul className="duties">
            <li className="description">
              Taught introductory, intermediate and honors Spanish classes and
              participated actively in departmental and school-wide activities.
            </li>
            <li className="description">
              Developed curriculum and provided instruction for over three
              hundred students in a two-year period.
            </li>
          </ul>
        </section>
      </section>
      <h3 className="sectionHeader">Education</h3>
      <section className="resumeSection">
        <div className="dates">Jun 2019</div>
        <section className="degreeInst">
          <div>
            <span className="degree">
              <a
                className="projectLink"
                href="https://confirm.udacity.com/2HPDSE3L"
                target="_blank"
                rel="noreferrer"
              >
                Nanodegree – React
              </a>
            </span>
            <span className="institution">Udacity</span>
          </div>
        </section>
      </section>
      <section className="resumeSection">
        <div className="dates">Dec 2018</div>
        <section className="degreeInst">
          <div>
            <span className="degree">
              <a
                className="projectLink"
                href="https://graduation.udacity.com/confirm/Q45LQ2AC"
                target="_blank"
                rel="noreferrer"
              >
                Nanodegree – Front-End Web Developer
              </a>
            </span>
            <span className="institution">Udacity</span>
          </div>
        </section>
      </section>
      <section className="resumeSection">
        <div className="dates">Jun 2017</div>
        <section className="degreeInst">
          <div>
            <span className="degree">
              The Complete Web Developer Course, 2.0
            </span>
            <span className="institution">Udemy</span>
          </div>
        </section>
      </section>
      <section className="resumeSection">
        <div className="dates">Sep 2016</div>
        <section className="degreeInst">
          <div>
            <span className="degree">
              <a
                className="projectLink"
                href="https://confirm.udacity.com/KG3QD72D"
                target="_blank"
                rel="noreferrer"
              >
                Nanodegree – Intro to Programming
              </a>
            </span>
            <span className="institution">Udacity</span>
          </div>
        </section>
      </section>
      <section className="resumeSection">
        <div className="dates">Aug 2009</div>
        <section className="degreeInst">
          <div>
            <span className="degree">Ph.D. in Spanish</span>
            <span className="institution">The University of Arizona</span>
            <span className="city">Tucson, Arizona</span>
          </div>
        </section>
      </section>
      <section className="resumeSection">
        <div className="dates">May 2003</div>
        <section className="degreeInst">
          <div>
            <span className="degree">Master of Arts in Spanish</span>
            <span className="institution">Bowling Green State University</span>
            <span className="city">Bowling Green, Ohio</span>
          </div>
        </section>
      </section>
      <section className="resumeSection">
        <div className="dates">May 1999</div>
        <section className="degreeInst">
          <div>
            <span className="degree">Master of Arts in Teacher Education</span>
            <span className="institution">Ursuline College</span>
            <span className="city">Pepper Pike, Ohio</span>
          </div>
        </section>
      </section>
      <section className="resumeSection">
        <div className="dates">May 1995</div>
        <section className="degreeInst">
          <span className="degree">
            Bachelor of Science in Business Administration
          </span>
          <span className="institution">Bowling Green State University</span>
          <span className="city">Bowling Green, Ohio</span>
        </section>
      </section>
      <h3 className="sectionHeader">Technical Skills</h3>
      <section className="resumeSection">
        <ul>
          <li className="skills">Object-Oriented Programming</li>
          <li className="skills">Functional Programming</li>
          <li className="skills">Responsive Web Design</li>
          <li className="skills">Git</li>
          <li className="skills">Github</li>
          <li className="skills">W3C Accessibility</li>
          <li className="skills">Command Line (Terminal)</li>
          <li className="skills">Gulp</li>
          <li className="skills">Bootstrap</li>
          <li className="skills">PHP</li>
          <li className="skills">WordPress</li>
          <li className="skills">Node Package Manager</li>
          <li className="skills">Yarn</li>
          <li className="skills">AJAX</li>
          <li className="skills">React</li>
          <li className="skills">Redux</li>
          <li className="skills">React Native</li>
          <li className="skills">Firebase</li>
          <li className="skills">Styled Components</li>
        </ul>
      </section>
    </section>
  </>
);
