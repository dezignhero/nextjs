import moment from 'moment'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="col-wrap">
          <div className="col-left">
            <a className="logo" href="/">
              <img alt="Savi" src="/images/logos/savi/savi-default.svg"></img>
            </a>
            <p className="text-sm">
              Savi is a social impact technology startup in Washington, D.C.
              founded by long-time student loan experts and advocates. We're
              working to solve the pressing student debt crisis affecting 46
              million borrowers by helping them discover new repayment and loan
              forgiveness options.
            </p>
            <p className="mt-4 text-xs font-medium">
              &copy; {moment().format('Y')} Savi Solutions PBC. All rights
              reserved.
            </p>
            <p className="text-xs md:hidden pt-2">
              <a href="/terms">Terms &amp; Conditions</a> |{' '}
              <a href="/privacy">Privacy Policy</a>
            </p>
          </div>
          <div className="col-right">
            <div className="menu">
              <div className="menu-group">
                <p className="menu-heading">Explore</p>
                <p>
                  <a href="/about">About</a>
                </p>
                <p>
                  <a href="/partner">Partner</a>
                </p>
                <p>
                  <a href="/borrowers">Borrowers</a>
                </p>
                <p>
                  <a href="/press">Press</a>
                </p>
              </div>
              <div className="menu-group">
                <p className="menu-heading">Legal</p>
                <p>
                  <a href="/terms">Terms &amp; Conditions</a>
                </p>
                <p>
                  <a href="/privacy">Privacy Policy</a>
                </p>
              </div>
            </div>
            <div className="social-row">
              <a
                href="https://twitter.com/BySavi"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/social/twitter.png" alt="Twitter"></img>
              </a>
              <a
                href="https://www.facebook.com/BySaviUSA/"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/social/facebook.png" alt="Facebook"></img>
              </a>
              <a
                href="https://www.linkedin.com/company/11247431"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/social/linkedin.png" alt="LinkedIn"></img>
              </a>
              <a
                href="https://www.instagram.com/bysaviusa/"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/social/instagram.png" alt="Instagram"></img>
              </a>
            </div>
          </div>
        </div>
        <div className="badge-row">
          <div className="badge">
            <img
              className="badge-icon"
              alt="cobalt-icon"
              src="/images/badges/cobalt.png"
            ></img>
            <p className="md:-ml-2">
              Cobalt Security
              <br />
              Tested
            </p>
          </div>
          <div className="badge">
            <a
              href="https://www.bbb.org/us/dc/washington/profile/financial-services/savi-0241-236042939/#sealclick"
              className="block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="badge-icon"
                src="/images/badges/bbb.png"
                alt="Savi BBB Business Review"
              ></img>
            </a>
            <p>
              BBB Rating: A+
              <br />
              As of {moment().format('MMM D, Y')}
            </p>
          </div>
          <div className="badge">
            <img
              className="badge-icon"
              src="/images/badges/heart.png"
              alt="Delaware Public Benefit Corporation"
            ></img>
            <p>
              Delaware Public
              <br />
              Benefit Corporation
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
