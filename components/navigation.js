export default function Navigation() {
  return (
    <nav id="navigation">
      <div className="nav-desktop">
        <div className="container">
          <a className="logo" href="/">
            <img alt="brand" src="/images/logos/savi/savi-default.svg"></img>
          </a>
          <div className="menu-desktop">
            <ul className="menu-links">
              <li><a className="active" href="/about">About</a></li>
              <li><a className="active" href="/partner">Partner</a></li>
              <li><a className="active" href="/borrowers">Borrowers</a></li>
              <li><a className="active" href="/press">Press</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="nav-mobile">
        <div className="menu-header">
          <a className="logo" href="/">
            <img alt="brand" src="/images/logos/savi/savi-default.svg"></img>
          </a>
          <button className="button-menu">
            <svg className="fill-current h-6 w-6" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
        </div>
        <div className="menu-mobile">
          <button className="button-close">
            <title>Close</title>
            <svg className="h-8 w-8" viewBox="0 0 20 20">
              <path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z" />
            </svg>
          </button>
          <ul className="menu-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/partner">Partner</a></li>
            <li><a href="/borrowers">Borrowers</a></li>
            <li><a href="/press">Press</a></li>
          </ul>
          <div className="request-invite">
            <p>
              Want to try Savi? - <a className="inline-block" href="https://bysavi.typeform.com/to/iIUJpT">Request an invite</a>
            </p>
          </div>
        </div>
      </div>
    </nav>
  )
}
