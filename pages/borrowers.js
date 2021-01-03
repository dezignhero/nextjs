import Layout from '../layouts/default.js'
import AppFlow from '../components/app-flow.js'

const meta = {
  title: 'Learn How to Save with Savi',
  description:
    'Savi checks for student loan savings based on each borrower’s unique debt situation and automates the enrollment in over 150 programs. Borrowers save time, money and headaches on their student loan using Savi.',
  image: '/images/meta/borrowers.png',
  url: 'https://www.bysavi.com/borrowers',
}

const articles = [
  {
    title: 'Saving with Income-Driven Repayment Plans',
    url:
      'https://savi-app-prod.s3.amazonaws.com/manual-upload/learn-about-loans/IDR_Plans_Info_Flier.pdf',
  },
  {
    title: 'Understanding Private Loans',
    url:
      'https://savi-app-prod.s3.amazonaws.com/manual-upload/learn-about-loans/Private_Loans_Info_Flier.pdf',
  },
  {
    title: 'Qualifying for Public Service Loan Forgiveness',
    url:
      'https://savi-app-prod.s3.amazonaws.com/manual-upload/learn-about-loans/PSLF_Info_Flier.pdf',
  },
  {
    title: 'Navigating the COVID-19 CARES Act Updates',
    url:
      'https://savi-app-prod.s3.amazonaws.com/manual-upload/learn-about-loans/CARES_Act_Info_Flier.pdf',
  },
]

const appSlides = [
  {
    title: "What's Included",
    description:
      "Scroll to see what's included when choosing to partner with Savi.",
    images: {
      default: '/images/graphics/borrowers/whats-included.png',
      desktop: '/images/graphics/borrowers/whats-included-lg.svg',
    },
  },
  {
    title: '150+ Repayment and Forgiveness Options',
    description:
      'Detect eligibility for dozens of national and state repayment and forgiveness programs with our AI-driven algorithm and 1.5+ million employer database',
    images: {
      default: '/images/graphics/borrowers/repayment-options.png',
      desktop: '/images/graphics/borrowers/repayment-options-lg.svg',
    },
  },
  {
    title: 'Simple Loan Sync',
    description:
      'Sync federal and private loans across all loan servicers easily with industry standard security',
    images: {
      default: '/images/graphics/borrowers/loan-sync.png',
      desktop: '/images/graphics/borrowers/loan-sync-lg.svg',
    },
  },
  {
    title: '1:1 Support',
    description:
      'Contact student loan experts from our team at any time. Savi technology + human expertise = borrower success',
    images: {
      default: '/images/graphics/borrowers/support.png',
      desktop: '/images/graphics/borrowers/support-lg.svg',
    },
  },
  {
    title: 'Educational Resources',
    description:
      'Access a free, instant estimate of savings and broad student loan resources for financial health',
    images: {
      default: '/images/graphics/borrowers/educational-resources.png',
      desktop: '/images/graphics/borrowers/educational-resources-lg.svg',
    },
  },
]

export default function Borrowers() {
  return (
    <Layout meta={meta}>
      <div id="page-borrowers" className="page">
        <div class="section section-banner">
          <div class="container">
            <div class="content">
              <h1>For Borrowers</h1>
              <p>
                Savi provides our tools and resources through hundreds of
                employers, membership groups and financial institutions to
                provide a transformative student loan benefit.
              </p>
              <p>
                <a
                  class="typeform-share button button-green"
                  href="https://bysavi.typeform.com/to/iIUJpT"
                  data-mode="popup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request an Invite
                </a>
              </p>
            </div>
            <div class="col-image">
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet="/images/graphics/student.svg"
                />
                <img
                  class="fadeBox"
                  src="/images/graphics/student-mobile.png"
                  alt="student"
                />
              </picture>
            </div>
          </div>
        </div>

        <div class="section section-info">
          <div class="container">
            <div class="row">
              <div class="col-left">
                <h2>Save Time and Money On Your Student Loans</h2>
              </div>
              <div class="col-right">
                <p>
                  Savi puts loan borrowers first and is focused on delivering a
                  positive outcome for each user. Understanding and navigating
                  student loans alone can be overwhelming and confusing; we're
                  here to help. Savi is a public benefit corporation aimed at
                  helping America's 46 million borrowers find the best repayment
                  and forgiveness options.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="section section-app">
          <div class="container">
            <div class="intro">
              <h2 class="heading-underline">We Care About Loan Borrowers</h2>
              <p class="pt-16">
                <img
                  class="anim-scroll mx-auto"
                  src="/images/icons/caret-vert.svg"
                  alt="caret vertical"
                />
              </p>
            </div>
            <AppFlow slides={appSlides} />
          </div>
        </div>

        <div class="section section-more">
          <div class="container">
            <div class="content">
              <h2>Learn More About Loans</h2>
              <p>
                Partnering with Student Debt Crisis, the nation's largest
                student loan debt advocacy nonprofit, Savi has created brief,
                informational reports to help borrowers begin to understand the
                complex student loan system.
              </p>
            </div>
            <div class="articles">
              {articles.map((article, i) => {
                return (
                  <a
                    class="article"
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/images/icons/pdf.svg" alt={article.title} />
                    <h3>{article.title}</h3>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div class="section section-stats">
          <div class="container">
            <div class="stat">
              <h3>$200+ Million</h3>
              <p>Loan Forgiveness Found</p>
            </div>
            <div class="stat">
              <h3>$156</h3>
              <p>Average Payment Reduction</p>
            </div>
            <div class="stat">
              <h3>$28,308</h3>
              <p>Average Lifetime Savings</p>
            </div>
          </div>
        </div>

        <div class="section section-convert">
          <div class="container">
            <div class="col-image">
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet="/images/graphics/shuttle.svg"
                />
                <img
                  class="fadeBox"
                  src="/images/graphics/shuttle-mobile.png"
                  alt="shuttle"
                />
              </picture>
            </div>
            <div class="content">
              <h2>
                Employees and members, ask your HR leader to register for Savi
              </h2>
              <p>
                Savi works with hundreds of Fortune 500 employers, membership
                groups, financial institutions and nonprofit organizations.
                Bring Savi to your community by introducing us to your HR
                leader.
              </p>
              <p>
                <a
                  class="typeform-share button button-orange"
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
