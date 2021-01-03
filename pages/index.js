import Layout from '../layouts/default.js'
import Mentions from '../components/mentions.js'
import QuotesSlider from '../components/quotes-slider.js'

const meta = {
  title: 'Save Time and Money On Student Loans with Savi',
  description:
    'Savi is solving the student debt crisis with automated tools to enroll you in over 150 federal and state programs to save you money, and get maximum loan forgiveness.',
  image: '/images/meta/home.png',
  url: 'https://www.bysavi.com',
}

const quotes = [
  {
    name: 'Jen',
    description: 'Marketing Executive, Washington',
    avatar: '/images/content/quote-jen.jpg',
    profile: true,
    term: 'users',
    quote:
      'I call it my second mortgage... hundreds of thousands of dollars of student debt. Given my background in marketing and tech, I was super impressed with the user experience and ease of use.',
  },
  {
    name: 'Kerry Ryan',
    description: 'Benefits Director, Boston Medical Center',
    avatar: '/images/logos/vendors/boston-medical.png',
    term: 'partners',
    quote:
      'The program helps employees achieve meaningful savings both in their monthly budgets and in the overall cost of their college debt. An employee told us she was struggling to pay her rent but now she has that burden lifted. It’s really life changing!',
  },
  {
    name: 'Nancy',
    description: 'Retired Middle School Teacher, New Jersey',
    avatar: '/images/content/quote-nancy.jpg',
    profile: true,
    term: 'users',
    quote:
      "I taught for 30 years. I’m financially not in great shape. I just kept pushing the loans off but you can't keep pushing them off, they're federal loans. It was all overwhelming at first, but Savi showed me it's not scary. I now know what my payments are going to be and lowered them to my realm of reality.",
  },
]

export default function Home() {
  return (
    <Layout meta={meta}>
      <div id="page-home" className="page">
        <div className="section section-banner">
          <div className="container">
            <div className="content">
              <h1>Save Time and Money on Student Loans</h1>
              <p>
                Savi helps America's 46 million student loan borrowers easily
                lower their payments and find forgiveness. Join hundreds of
                partners that offer Savi technology and resources.
              </p>
              <p>
                <a className="button button-green" href="/partner">
                  Partner with Savi
                </a>
                <span className="px-3 py-2 md:inline-block block">or</span>
                <a
                  className="inline-block md:py-3 font-semibold whitespace-pre"
                  href="/borrowers"
                >
                  I'm an individual borrower
                </a>
              </p>
            </div>
            <div className="col-image"></div>
          </div>
        </div>

        <div className="section section-mentions">
          <div className="container">
            <Mentions />
          </div>
        </div>

        <div className="section section-intro">
          <div className="container">
            <div className="intro">
              <h2 className="heading-underline">How Savi Helps Borrowers</h2>
              <p>
                Savi checks for savings and automates enrollment in 150+ state
                &amp; federal programs. Borrowers save time, money and
                headaches.
              </p>
              <p>
                <img
                  className="anim-scroll"
                  src="/images/icons/caret-vert.svg"
                  alt="caret vertical"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="section section-how">
          <div className="container">
            <div className="how">
              <div className="col-left">
                <div className="content">
                  <h2>1. Calculate Repayment &amp; Forgiveness</h2>
                  <p>
                    Easily{' '}
                    <a
                      className="link"
                      href="https://blog.plaid.com/savi-customer-story/"
                    >
                      sync your loans
                    </a>{' '}
                    to automatically calculate loan forgiveness and repayment
                    options.
                  </p>
                  <p>
                    Reduce your payments by{' '}
                    <span className="font-semibold">$156</span> on average.
                  </p>
                </div>
              </div>
              <div className="col-right">
                <div className="image-wrap">
                  <picture>
                    <source
                      media="(min-width: 768px)"
                      srcSet="images/graphics/homepage-how-1.svg"
                    />
                    <img
                      className="easeBox fadeBox"
                      src="/images/graphics/homepage-how-1.png"
                      alt="homepage how 1"
                    />
                  </picture>
                </div>
              </div>
            </div>
            <div className="how flex-row-reverse">
              <div className="col-left">
                <div className="content">
                  <h2>2. Enroll Automatically</h2>
                  <p>
                    Users review their customized options from 150+ public and
                    private forgiveness and repayment plans.
                  </p>
                  <p>Let Savi take care of all the rest.</p>
                </div>
              </div>
              <div className="col-right">
                <div className="image-wrap">
                  <picture>
                    <source
                      media="(min-width: 768px)"
                      srcSet="images/graphics/homepage-how-2.svg"
                    />
                    <img
                      className="easeBox fadeBox"
                      src="/images/graphics/homepage-how-2.png"
                      alt="homepage how 2"
                    />
                  </picture>
                </div>
              </div>
            </div>
            <div className="how">
              <div className="col-left">
                <div className="content">
                  <h2>3. Save Year Over Year</h2>
                  <p>
                    We take care of any annual re-enrollment paperwork and
                    monitor for new applicable benefits.
                  </p>
                  <p>Watch the savings add up.</p>
                </div>
              </div>
              <div className="col-right">
                <div className="image-wrap">
                  <picture>
                    <source
                      media="(min-width: 768px)"
                      srcSet="images/graphics/homepage-how-3.svg"
                    />
                    <img
                      className="easeBox fadeBox"
                      src="/images/graphics/homepage-how-3.png"
                      alt="homepage how 3"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section section-path">
          <div className="container">
            <div className="content">
              <h2>Find a Path to Student Loan Freedom</h2>
              <p>
                Savi identifies the best loan repayment &amp; forgiveness programs
                based on each user's unique financial picture and goals.
              </p>
            </div>
            <div className="comparison">
              <div className="col">
                <h3>Your Loan Without Savi</h3>
                <ul>
                  <li className="stat">
                    <span className="value">$0</span>Loan Forgiven
                  </li>
                  <li className="stat">
                    <span className="value">$453</span>Monthly Payment
                  </li>
                  <li className="stat">
                    <span className="value">$68,750</span>Total Payment
                  </li>
                </ul>
              </div>
              <div className="col col-image">
                <img src="/images/graphics/path.svg" alt="path"/>
              </div>
              <div className="col">
                <h3>Your Loan With Savi</h3>
                <ul>
                  <li className="stat stat-with">
                    <span className="value">$20,500</span>Loan Forgiven
                  </li>
                  <li className="stat stat-with">
                    <span className="value">$184</span>Monthly Payment
                  </li>
                  <li className="stat stat-with">
                    <span className="value">$48,250</span>Total Payment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section section-trust">
          <div className="container">
            <h2>Savi is the Trusted Provider For</h2>
            <div className="stats">
              <div className="stat">
                <h3>3 Million+</h3>
                <p>Educators</p>
              </div>
              <div className="stat">
                <h3>50,000+</h3>
                <p>Fortune 500 Employees</p>
              </div>
              <div className="stat">
                <h3>125,000+</h3>
                <p>Social Workers</p>
              </div>
              <div className="stat">
                <h3>2 Million+</h3>
                <p>Service Workers</p>
              </div>
            </div>
            <p className="font-serif text-gray-light italic text-lg mt-1">
              "Making an impact where it matters most."
            </p>
          </div>
        </div>

        <div className="section section-quotes">
          <div className="container">
            <div className="col-left">
              <h2>
                What Our<br></br>
                <span className="fader-term inline-block mb-2 border-b-6 border-green">
                  Users
                </span>
                <br></br> Say
              </h2>
            </div>
            <div className="col-right">
              <QuotesSlider slides={quotes} />
            </div>
          </div>
        </div>

        <div className="section section-convert bg-flooring">
          <div className="container">
            <div className="col-image">
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet="images/graphics/startup.svg"
                />
                <img
                  className="easeBox fadeBox"
                  src="/images/graphics/startup-mobile.png"
                  alt="startup mobile"
                />
              </picture>
            </div>
            <div className="content">
              <h2>Bring Savi to Your Team</h2>
              <p>
                Savi works with hundreds of Fortune 500 employers, membership
                groups, financial institutions and nonprofit organizations.
                Bring Savi to your community by introducing us to your HR
                leader.
              </p>
              <p>
                <a
                  className="typeform-share button button-orange"
                  href="https://bysavi.typeform.com/to/Ygjr7BD4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Invite HR Leader
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
