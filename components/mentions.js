export default function Mentions() {
  const mentions = [
    {
      source: 'New York Times',
      image: '/images/logos/vendors/white/nytimes.svg',
      url:
        'https://www.nytimes.com/2019/11/01/your-money/college-graduates-loans.html',
    },
    {
      source: 'Time',
      image: '/images/logos/vendors/white/time.svg',
      url: 'https://time.com/5000625/student-loan-forgiveness/',
    },
    {
      source: 'Inc',
      image: '/images/logos/vendors/white/inc.svg',
      url:
        'https://www.inc.com/anna-meyer/top-emerging-companies-2018-global-affordability.html',
    },
    {
      source: 'Wall Street Journal',
      image: '/images/logos/vendors/white/wsj.svg',
      url:
        'https://www.wsj.com/articles/mistakes-to-avoid-when-refinancing-student-loans-11588364571',
    },
    {
      source: 'Techcrunch',
      image: '/images/logos/vendors/white/techcrunch.svg',
      url:
        'https://techcrunch.com/2020/04/14/college-isnt-free-yet-but-savi-raises-a-6m-series-a-to-assist-student-loan-borrowers-find-loan-forgiveness/',
    },
    {
      source: 'The Nation',
      image: '/images/logos/vendors/white/thenation.svg',
      url:
        'https://www.thenation.com/article/economy/heres-how-the-cares-act-impacts-your-student-loans/',
    },
    {
      source: 'Yahoo Money',
      image: '/images/logos/vendors/white/yahoomoney.png',
      url:
        'https://money.yahoo.com/startup-help-student-loan-borrowers-coronavirus-160112505.html',
    },
  ]

  return (
    <>
      {mentions.map((mention, i) => {
        return (
          <div className="mention" key={i}>
            <a href={mention.url} className="mention-link" target="_blank">
              <img src={mention.image} alt={mention.source}></img>
            </a>
          </div>
        )
      })}
    </>
  )
}
