import { get } from 'lodash'

export default function QuotesSlider({ slides }) {
  return (
    <div className="fader-quotes fader">
      <div className="slides-wrap">
        <div className="controls">
          <div className="control prev" data-action="prev">
            <img src="images/icons/caret-left.svg" alt="previous" />
          </div>
          <div className="control next" data-action="next">
            <img src="images/icons/caret-right.svg" alt="next" />
          </div>
        </div>
        <div className="slides">
          {slides.map((slide, i) => {
            return (
              <div
                className={i == 0 ? 'slide active' : 'slide'}
                data-id={i}
                data-term={get(slide, 'term', null)}
                key={i}
              >
                <div className="wrapper">
                  <div className="avatar">
                    <img
                      className={get(slide, 'profile', null) ? 'profile' : null}
                      src={get(slide, 'avatar', null)}
                      alt="avatar"
                    />
                  </div>
                  <div className="quote">
                    <p>{slide.quote}</p>
                  </div>
                  <div className="user-info">
                    <p className="name">{slide.name}</p>
                    <p className="details">{slide.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <ul className="pagination">
        {slides.map((slide, i) => {
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
  )
}
