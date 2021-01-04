import Layout from '../layouts/default.js'
import Team from '../components/team.js'

const meta = {
  title: 'About Savi Solutions PBC',
  description:
    'Savi is solving the student debt crisis with automated tools to enroll you in over 150 federal and state programs to save you money, and get maximum loan forgiveness.',
  image: '/images/meta/about.png',
  url: 'https://www.bysavi.com/about',
}

export default function About() {
  return (
    <Layout meta={meta}>
      <div id="page-about" className="page">
        <div className="section section-banner">
          <div className="container">
            <div className="content">
              <h1>About Savi</h1>
              <p className="text-lg">
                We believe that people shouldn't spend their lives buried in
                student loan debt.
              </p>
              <p>
                <a className="button button-green" href="/partner">
                  Partner with Savi
                </a>
              </p>
            </div>
            <div className="col-image">
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcset="/images/graphics/office.svg"
                />
                <img
                  src="/images/graphics/office-mobile.jpg"
                  alt="office image"
                />
              </picture>
            </div>
          </div>
        </div>

        <div className="section section-info">
          <div className="container">
            <div className="row">
              <div className="col-left">
                <h2>Our Mission</h2>
              </div>
              <div className="col-right">
                <p>
                  Savi is on a mission to help the middle class prosper by
                  tackling the student debt crisis. We create cutting-edge
                  financial technology that makes it easier to navigate complex
                  decisions.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-left">
                <h2>Our Guiding Principles</h2>
              </div>
              <div className="col-right">
                <p>
                  <span>Honesty</span>We are honest and transparent -- providing
                  clear information on how we work with partners and users and
                  how we make money.
                </p>
                <p>
                  <span>Savvy</span>We are student loan experts -- combining
                  scalable technology with deep student debt knowledge to help
                  our users save time and money.
                </p>
                <p>
                  <span>Impact</span>We are outcome-driven -- practicing a
                  commitment to service as a Public Benefit Corporation, always
                  going above and beyond in the pursuit of positive impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section section-team">
          <div className="container">
            <h2 className="heading-underline">Meet the Savi Team</h2>
            <div className="founders">
              <div className="founder">
                <div className="col-left">
                  <div className="avatar">
                    <img src="/images/team/aaron.jpg" alt="Aaron" />
                  </div>
                  <div className="social">
                    <a
                      className="linkedin"
                      href="https://www.linkedin.com/in/aaron-smith-77bbb89/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/social/linkedin.png"
                        alt="linkedin logo"
                      />
                    </a>
                    <a
                      className="twitter"
                      href="https://twitter.com/aaronsmith44"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/social/twitter.png"
                        alt="twitter logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-right">
                  <h2>Aaron Smith</h2>
                  <p className="position">Co-founder</p>
                  <p>
                    Aaron Smith is a long-time student loan expert and advocate
                    with over a decade of experience in the intersection between
                    higher education and financial technology. Aaron co-founded
                    and served as the original Executive Director of Young
                    Invincibles, one of the largest and most impactful youth
                    advocacy and policy non-profits in the country, with a focus
                    on engaging 18 to 34 year olds. Aaron started YI in 2009
                    while still a student at Georgetown Law School (from which
                    he still has substantial student loan debt). Through his
                    work at YI, Aaron worked with the Department of Education,
                    the White House, and Congress to make concrete fixes to
                    higher education funding and the student loan process. Aaron
                    has been featured in the New York Times, Washington Post,
                    Wall Street Journal, Fox News, MSNBC, and CNN.
                  </p>
                </div>
              </div>
              <div className="founder">
                <div className="col-left">
                  <div className="avatar">
                    <img src="/images/team/tobin.jpg" alt="Tobin" />
                  </div>
                  <div className="social">
                    <a
                      className="linkedin"
                      href="https://www.linkedin.com/in/tobinvanostern/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/social/linkedin.png"
                        alt="linkedin logo"
                      />
                    </a>
                    <a
                      className="twitter"
                      href="https://twitter.com/TobinVanOstern"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/social/twitter.png"
                        alt="twitter logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-right">
                  <h2>Tobin Van Ostern</h2>
                  <p className="position">Co-founder</p>
                  <p>
                    Tobin Van Ostern is an experienced leader and policy expert
                    with over a decade of accolades in the intersecting fields
                    of youth engagement and innovative technology. A former web
                    developer, Van Ostern mobilized young adults using
                    technology when he served as the National Director of the
                    Student Engagement Program for President Barack Obama’s 2008
                    campaign. Afterwards, he became the Deputy Director of
                    Generation Progress, a project of the Center for American
                    Progress where he led work on a number of policy and
                    engagement areas, including student loans. He has been
                    featured in The New York Times, Washington Post, Associated
                    Press, Wall Street Journal, TIME, ABC, CBS, NPR, U.S. News &
                    World Report, Chronicle of Higher Education, and others.
                  </p>
                </div>
              </div>
            </div>
            <Team />
          </div>
        </div>

        <div className="section section-story">
          <div className="container">
            <div className="content">
              <h2>Our Story</h2>
              <p>
                The student loan debt crisis is postponing the American Dream
                for 46 million borrowers-- and the rules to reduce payments and
                forgive debt are so confusing that public officials say the
                system is broken. Founded in 2017 by long-time student loan
                experts and advocates, Aaron Smith and Tobin Van-Ostern, Savi is
                a social impact technology startup in Washington, D.C. working
                to solve the student debt crisis.
              </p>
              <p>
                Savi was founded on the principle that America's loan borrowers,
                who hold $1.7 trillion of debt, deserve help navigating the
                complex student loan system. Using innovative technology and a
                team of thoughtful industry leaders, we help loan borrowers
                discover new repayment and loan forgiveness options. So far,
                we've identified $200+ million in projected forgiveness for
                student loan borrowers who have signed up with Savi as a unique
                student loan benefit provided by their employer, membership
                organization, or financial institution.
              </p>
            </div>
          </div>
        </div>

        <div className="section section-convert bg-flooring">
          <div className="container">
            <div className="col-image">
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcset="/images/graphics/jobhunt.svg"
                />
                <img
                  className="easeBox fadeBox"
                  src="/images/graphics/jobhunt-mobile.png"
                  alt="jobhunt image"
                />
              </picture>
            </div>
            <div className="content">
              <h2>Join the Savi Team</h2>
              <p>
                We think that borrowers everywhere should be able to manage
                their debt, lower their payments, and find a path to student
                loan freedom. Our team is passionate about creating honest and
                effective financial technology that helps everday, working class
                people. Join us in working to end the student debt crisis.
              </p>
              <p>
                <a
                  className="button button-orange"
                  href="https://angel.co/company/bysavi/jobs"
                >
                  View Openings
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
