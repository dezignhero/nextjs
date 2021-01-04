import { get } from 'lodash'

export default function AppFlow({ slides }) {
  const numSlides = slides.length

  return (
    <div className="appflows">
      {slides.map((slide, i) => {
        return (
          <div className="appflow" key={i}>
            <div className="left-col">
              <div className="content">
                <div className="accent fadeBox">
                  <h3 className="title">{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
                <div className="text-center">
                  <div className="page-indicator inline-block">
                    {i + 1} of {numSlides}
                  </div>
                </div>
              </div>
            </div>
            <div className="right-col">
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet={get(slide, 'images.desktop', null)}
                />
                <img
                  className="easeBox fadeBox"
                  src={get(slide, 'images.default', null)}
                  alt="slides"
                />
              </picture>
            </div>
          </div>
        )
      })}
    </div>
  )
}
