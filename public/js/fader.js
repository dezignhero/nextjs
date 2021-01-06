$.fn.fader = function () {
  // jQuery handlers
  const $fader = this
  const $slides = $fader.find('.slide')
  const numSlides = $slides.length
  const $pagination = $fader.find('.pagination')
  const $pages = $fader.find('.dot')
  const $controls = $fader.find('.control')
  const $terms = $('.fader-term')

  // Declarations
  const activeClass = 'active'
  const touchActions = 'click touchstart'

  if (numSlides > 0) {
    let currentSlide = 0

    if (numSlides > 1) {
      $terms.addClass('transition-opacity duration-500 ease-linear')

      const goTo = function (slideId) {
        currentSlide = ((slideId % numSlides) + numSlides) % numSlides
        $slides.removeClass(activeClass)
        $pages.removeClass(activeClass)

        let $currentSlide = $fader.find('[data-id="' + currentSlide + '"]')
        $currentSlide.addClass(activeClass)

        // Update terms
        const nextTerm = $currentSlide.attr('data-term')
        const currentTerm = $terms.text()
        if (!!nextTerm && nextTerm != currentTerm) {
          $terms.addClass('opacity-0')
          setTimeout(function () {
            $terms.text(nextTerm).removeClass('opacity-0')
          }, 500)
        }
      }

      $controls.on(touchActions, function () {
        const action = $(this).attr('data-action')
        let nextSlide = currentSlide
        if (action === 'next') {
          nextSlide = currentSlide + 1
        } else if (action === 'prev') {
          nextSlide = currentSlide - 1
        }
        goTo(nextSlide)
        clearInterval(cycle)
      })

      $pages.on(touchActions, function () {
        const nextSlide = $(this).attr('data-id')
        goTo(nextSlide)
        clearInterval(cycle)
      })

      let cycle = setInterval(function () {
        goTo((currentSlide + 1) % numSlides)
      }, 10000)
    } else {
      $controls.hide()
      $pagination.hide()
    }
  }
}
