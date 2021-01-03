import Layout from '../layouts/default.js'

const meta = {
  title: 'Savi In The News',
  description:
    'Savi is a social impact technology startup leading the field in tech-driven solutions to the student loan debt crisis across America.',
  image: '/images/meta/press.png',
  url: 'https://www.bysavi.com/press',
}

const articles = [
  {
    source: 'Wall Street Journal',
    title: 'Mistakes to Avoid When Refinancing Student Loans',
    image: '/images/logos/vendors/wsj.svg',
    url:
      'https://www.wsj.com/articles/mistakes-to-avoid-when-refinancing-student-loans-11588364571',
  },
  {
    source: 'HuffPost',
    title:
      'Guide To Financial Resources And Relief For Those Affected By COVID-19',
    image: '/images/logos/vendors/huffpost.svg',
    url:
      'https://www.huffpost.com/entry/guide-financial-resources-relief-covid-19_l_5ea3256fc5b669fd89246387',
  },
  {
    source: 'The Nation',
    title: 'Here’s How the CARES Act Impacts Your Student Loans',
    image: '/images/logos/vendors/thenation.svg',
    url:
      'https://www.thenation.com/article/economy/heres-how-the-cares-act-impacts-your-student-loans/',
  },
  {
    source: 'Technical.ly',
    title: 'Fintech startup Savi Solutions just raised $6M in Series A funding',
    image: '/images/logos/vendors/technically.png',
    url:
      'https://technical.ly/dc/2020/04/16/fintech-startup-savi-solutions-raised-6-million-series-a-funding/',
  },
  {
    source: 'TechCrunch',
    title:
      'College isn’t free yet, but Savi raises a $6M Series A to assist student loan borrowers find loan forgiveness',
    image: '/images/logos/vendors/techcrunch.svg',
    url:
      'https://techcrunch.com/2020/04/14/college-isnt-free-yet-but-savi-raises-a-6m-series-a-to-assist-student-loan-borrowers-find-loan-forgiveness/',
  },
  {
    source: 'Crunchbase News',
    title: 'COVID-19 Pandemic: Startups Giving Back In A Time Of Crisis',
    image: '/images/logos/vendors/crunchbase.svg',
    url:
      'https://news.crunchbase.com/news/covid-19-pandemic-startups-giving-back-in-a-time-of-crisis/',
  },
  {
    source: 'Emerson Collective',
    title: 'Supporting Students During COVID-19',
    image: '/images/logos/vendors/emerson.svg',
    url:
      'https://www.emersoncollective.com/covid19-resources-for-remote-learning/',
  },
  {
    source: 'Fortune',
    title:
      'Why the Democratic candidates need to keep talking about student loans',
    image: '/images/logos/vendors/fortune.svg',
    url:
      'https://fortune.com/2020/03/31/student-loans-coronavirus-stimulus-package-cares-act-biden-sanders-democrats/',
  },
  {
    source: 'Fox News',
    title: 'How to get financial help amid coronavirus outbreak',
    image: '/images/logos/vendors/foxnews.svg',
    url:
      'https://www.foxnews.com/us/how-to-get-financial-help-coronavirus-outbreak',
  },
  {
    source: 'Yahoo! Finance',
    title:
      'How one startup is helping student loan borrowers navigate the coronavirus',
    image: '/images/logos/vendors/yahoomoney.svg',
    url:
      'https://money.yahoo.com/startup-help-student-loan-borrowers-coronavirus-160112505.html',
  },
  {
    source: 'The New York Times',
    title: 'Tips for College Graduates Making Their First Loan Payments',
    image: '/images/logos/vendors/nytimes.svg',
    url:
      'https://www.nytimes.com/2019/11/01/your-money/college-graduates-loans.html',
  },
  {
    source: 'Inc.',
    title: '50 World-Changing Startups to Watch in 2019',
    image: '/images/logos/vendors/inc.svg',
    url:
      'https://www.inc.com/anna-meyer/top-emerging-companies-2018-global-affordability.html',
  },
  {
    source: 'The Simple Dollar',
    title:
      'Public Service Loan Forgiveness: How to Qualify (and Why So Few People Do)',
    image: '/images/logos/vendors/thesimpledollar.svg',
    url:
      'https://www.thesimpledollar.com/loans/blog/how-to-qualify-for-public-service-loan-forgiveness/',
  },
  {
    source: 'Bank Rate',
    title:
      'Considering Public Service Loan Forgiveness? Read this first or weep later',
    image: '/images/logos/vendors/bankrate.svg',
    url:
      'https://www.bankrate.com/loans/student-loans/pslf-public-service-loan-forgiveness-tips-advice/',
  },
  {
    source: 'TIME',
    title: "Could You Get Your Student Loans Forgiven? Here's How to Find Out",
    image: '/images/logos/vendors/time.svg',
    url: 'https://time.com/5000625/student-loan-forgiveness/',
  },
]

export default function Press() {
  return (
    <Layout meta={meta}>
      <div id="page-press" className="page">
        <div className="section section-banner">
          <div className="container">
            <div className="content">
              <h1>Press &amp; News</h1>
              <p className="text-lg">
                Savi is leading the field in tech-driven solutions to the
                student loan debt crisis across America.
              </p>
              <p>
                <a className="button button-green" href="#Contact">
                  Get in Touch
                </a>
              </p>
            </div>
            <div className="col-image">
              <img src="/images/graphics/press-banner.svg" alt="press banner" />
            </div>
          </div>
        </div>

        <div className="section section-info">
          <div className="container">
            <div className="row">
              <div className="col-left">
                <h2>Student Debt is Growing Rapidly</h2>
              </div>
              <div className="col-right">
                <p>
                  Over 46 million Americans have outstanding student loans. When
                  you add them all up, they total more than $1.7 trillion. On an
                  individual level, those debts are changing the way people
                  live. Increasingly, they must delay life milestones like
                  getting married, having kids, buying a home, and saving for
                  retirement. Student loans are a burdensome weight for all
                  borrowers, and especially heavy for marginalized communities
                  coast to coast.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section section-story">
          <div className="container">
            <div className="content">
              <h2>About Savi</h2>
              <p>
                Savi is a social impact technology startup in Washington, D.C.
                working to solve the student debt crisis through simple,
                scalable, and impact-driven technology designed to save people
                time and money on their student loans. With Savi, borrowers
                discover new repayment and loan forgiveness options. Founded by
                long-time student loan experts and advocates, Savi is a public
                benefit corporation that works with employers, membership
                organizations, and financial institutions to provide our service
                as a unique student loan benefit.
              </p>
            </div>
          </div>
        </div>

        <div className="section section-press">
          <div className="container">
            <h2 className="heading-underline-l">Savi in the Press</h2>
            <div className="tiles">
              {articles.map((article, i) => {
                return (
                  <div className="tile" key={i}>
                    <a
                      className="content hover-zoom"
                      href={article.url}
                      style={{ backgroundImage: 'url(' + article.image + ')' }}
                      target="_blank"
                    >
                      <div className="title">
                        <p className="source">{article.source}</p>
                        <h3>{article.title}</h3>
                      </div>
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="section section-subscribe">
          <div className="container">
            <div className="col-left">
              <h2>Student Loan Policy</h2>
            </div>
            <div className="col-right">
              <div className="content">
                <p>
                  As longtime student loan policy experts and advocates, Savi
                  has intimate knowledge of the public landscape. We regularly
                  compose a tip sheet to keep media and leaders in the know.
                </p>
                <a
                  className="button button-pink"
                  href="https://bysavi.us19.list-manage.com/subscribe?u=09c37e7f91aaf131d30e1e14b&id=6cd7f5e015"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stay Updated
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="Contact" className="section section-convert bg-flooring">
          <div className="container">
            <div className="col-image">
              <img
                className="easeBox fadeBox"
                src="/images/graphics/collaboration.svg"
                alt="collaboration"
              />
            </div>
            <div className="content">
              <h2>Get in Touch</h2>
              <p>
                Savi is available to speak at events or trade shows, on webinars
                or to members of the media. Reach out to us at{' '}
                <img
                  className="inline-block h-4 md:h-5"
                  src="/images/content/email-press.svg"
                  alt="email press"
                />
              </p>
              <p>
                <a
                  className="button button-orange"
                  href="mailto:press@bysavi.com"
                >
                  Email Us
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
