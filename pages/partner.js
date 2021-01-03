import Layout from '../layouts/default.js'
import QuotesSlider from '../components/quotes-slider.js'
import AppFlow from '../components/app-flow.js'

const meta = {
  title: 'Save Time and Money On Student Loans with Savi',
  description:
    'Savi works with employers, membership groups and financial institutions to provide a transformative student loan benefit. Request a demo today.',
  image: '/images/meta/partner.png',
  url: 'https://www.bysavi.com/partner',
}

const quotes = [
  {
    name: 'Leona Lindner',
    description: 'Chief Marketing Officer, NEA Benefits',
    avatar: '/images/logos/vendors/nea.png',
    quote:
      "The Savi tool is the key student debt benefit that we offer our millions of educators and public service employees. We hear from members coast to coast that Savi's innovative and affordable solution has saved them money and headaches on their student loans. We love Savi’s mission and their passion for helping our members.",
  },
  {
    name: 'Kerry Ryan',
    description: 'Benefits Director, Boston Medical Center',
    avatar: '/images/logos/vendors/boston-medical.png',
    quote:
      'The program helps employees achieve meaningful savings both in their monthly budgets and in the overall cost of their college debt. An employee told us she was struggling to pay her rent but now she has that burden lifted. It’s really life changing!',
  },
  {
    name: 'Gayle Collins',
    description:
      'People Operations Director, Devereux Advanced Behavioral Health',
    avatar: '/images/logos/vendors/devereux.svg',
    quote:
      'The tool is user-friendly, the data is impressive, and it has exceeded our expectations in every way. Most importantly, our employees are telling us the program is easy to navigate, that it is helping them reduce their monthly loan payments, and it ensures they are getting approved for the federal Public Service Loan Forgiveness (PSLF) program.',
  },
  {
    name: 'John R. Kozar',
    description:
      'Assistant Vice Chancellor of Human Resources, University of Pittsburgh',
    avatar: '/images/logos/vendors/uni-pittsburgh.svg',
    quote:
      'The University of Pittsburgh continually seeks benefits and services that can deliver high value at little or no cost. One of the best examples of this is the offering of the federal student loan forgiveness program through Savi. Within the first two months of the program, participants have found tens of thousands of dollars in immediate savings and long term forgiveness.',
  },
]

const facts = [
  {
    text:
      '25% of Americans work in jobs that are eligible for Public Service Loan Forgiveness (PSLF).',
    link:
      'https://files.consumerfinance.gov/f/documents/201706_cfpb_PSLF-midyear-report.pdf',
  },
  {
    text:
      '$200 billion of federal loans in the next 10 years are projected to be forgivable.',
    link: 'https://www.cbo.gov/system/files/2020-02/55968-CBO-IDRP.pdf',
  },
  {
    text:
      '89 percent of employees would use long-term financial planning tools or advice.',
    link:
      'https://www.shrm.org/resourcesandtools/hr-topics/benefits/pages/employers-explore-repaying-student-loan-debt.aspx',
  },
  {
    text:
      '59 percent of millennials in the workforce say paying off their student loans takes a higher priority than saving for retirement.',
    link:
      'https://file.asa.org/wp-content/uploads/2018/08/14141823/asa_young_worker_and_student_debt_survey_report-1.pdff',
  },
  {
    text:
      '53 percent of recent graduates entering the workforce say they would accept a reduced salary in exchange for a student loan repayment benefit.',
    link:
      'https://blog.wellable.co/majority-of-recent-graduates-would-accept-salary-cut-for-student-debt-benefit',
  },
]

const appSlides = [
  {
    title: "What's Included",
    description:
      "Scroll to see what's included when choosing to partner with Savi.",
    images: {
      default: '/images/graphics/partner/whats-included.png',
      desktop: '/images/graphics/partner/whats-included-lg.svg',
    },
  },
  {
    title: 'Customized Microsite',
    description:
      'Create your own student loan portal with a unique URL and custom branding',
    images: {
      default: '/images/graphics/partner/customized-site.png',
      desktop: '/images/graphics/partner/customized-site-lg.svg',
    },
  },
  {
    title: 'Partner Dashboard',
    description:
      'Track program impact, run individualized reports, and contact 1:1 support all in one page.',
    images: {
      default: '/images/graphics/partner/partner-dashboard.png',
      desktop: '/images/graphics/partner/partner-dashboard-lg.svg',
    },
  },
  {
    title: 'Integrated Tool',
    description:
      'Save time and money on student loans using any device, any time.',
    images: {
      default: '/images/graphics/partner/integrated-tool.png',
      desktop: '/images/graphics/partner/integrated-tool-lg.svg',
    },
  },
  {
    title: 'Educational Resources',
    description:
      'Access financial literacy and student loan education resources to promote broad financial health',
    images: {
      default: '/images/graphics/partner/educational-resources.png',
      desktop: '/images/graphics/partner/educational-resources-lg.svg',
    },
  },
  {
    title: 'HR Automation',
    description:
      'Automate the rollout of Savi and employer paperwork like Public Service Loan Forgiveness',
    images: {
      default: '/images/graphics/partner/hr-automation.png',
      desktop: '/images/graphics/partner/hr-automation-lg.svg',
    },
  },
]

export default function Partner() {
  return (
    <Layout meta={meta}>
      <div id="page-partner" className="page">
        <div className="section section-banner">
          <div className="container">
            <div className="content">
              <h1>Help Members &amp; Employees Save Money</h1>
              <p>
                Savi works with hundreds of employers, membership groups and
                financial institutions to provide a transformative student loan
                benefit.
              </p>
              <p>
                <a
                  className="typeform-share button button-orange"
                  href="https://bysavi.typeform.com/to/BEJFDL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request a Demo
                </a>
              </p>
            </div>
            <div className="col-image">
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet="/images/graphics/teamwork.svg"
                />
                <img
                  src="/images/graphics/teamwork-mobile.png"
                  alt="teamwork"
                />
              </picture>
            </div>
          </div>
        </div>

        <div className="section section-info">
          <div className="container">
            <div className="row">
              <div className="col-left">
                <h2>Student debt is a serious issue</h2>
              </div>
              <div className="col-right">
                <p>
                  Over 46 million Americans are holding over $1.7 trillion in
                  student loan debt. That's an average of $37,000 per borrower.
                  Increasingly, Americans must delay life milestones like
                  getting married, buying a home, and saving for retirement
                  while they repay their loans. Employees are increasingly
                  looking for student loan benefits. Savi is a simple, scalable,
                  and impact-driven technology designed to save people time and
                  money on their student loans.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section section-facts">
          <div className="container">
            <div className="row fader">
              <h2>Did you know?</h2>
              <div className="slides">
                {facts.map((fact, i) => {
                  return (
                    <div
                      className={i == 0 ? 'slide active' : 'slide'}
                      data-id={i}
                      key={i}
                    >
                      <p>{fact.text}</p>
                    </div>
                  )
                })}
              </div>
              <ul className="pagination">
                {facts.map((fact, i) => {
                  return (
                    <li
                      className={i == 0 ? 'dot active' : 'dot'}
                      data-id={i}
                      key={i}
                    ></li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="section section-app">
          <div className="container">
            <div className="intro">
              <h2 className="heading-underline">
                Don't Let Employees Tackle Student Debt Alone
              </h2>
              <p className="pt-16">
                <img
                  className="anim-scroll mx-auto"
                  src="/images/icons/caret-vert.svg"
                  alt="caret vertical"
                ></img>
              </p>
            </div>
            <AppFlow slides={appSlides} />
          </div>
        </div>

        <div className="section section-quotes">
          <div className="container">
            <div className="col-left">
              <h2>
                What Our
                <br /> Partners
                <br /> Say
              </h2>
            </div>
            <div className="col-right">
              <QuotesSlider slides={quotes} />
            </div>
          </div>
        </div>

        <div className="section section-convert">
          <div className="container">
            <div className="col-image">
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet="/images/graphics/park.svg"
                />
                <img
                  className="fadeBox"
                  src="/images/graphics/park-mobile.png"
                  alt="park mobile"
                ></img>
              </picture>
            </div>
            <div className="content">
              <h2>Work with Savi</h2>
              <p>
                Are you ready to provide a real student loan solution?
                <br />
                Try Savi and make a difference for your employees and members.
              </p>
              <p>
                <a
                  className="typeform-share button button-orange"
                  href="https://bysavi.typeform.com/to/BEJFDL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request a Demo
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
