import { Controller } from '@hotwired/stimulus'

class RatingController extends Controller {
  connect() {
    this.starTargets.forEach((target) => {
      target.addEventListener('click', this.handleRatingClick.bind(this))
    })
  }

  handleRatingClick(event) {
    this.ratingValue = event.target.dataset.rating
    this.starTargets.forEach((target) => {
      if (target.dataset.rating <= this.ratingValue) {
        target.classList.add('fa-solid')
        target.classList.remove('fa-regular')
      } else {
        target.classList.add('fa-regular')
        target.classList.remove('fa-solid')
      }
    })
    gtag('event', 'rating', {
      episode: this.episodeValue,
      rating: this.ratingValue,
    })
    this.thankyouTarget.classList.remove('hidden')
  }
}

RatingController.values = {
  episodeValue: String,
  rating: Number
}

RatingController.targets = [
  'star',
  'thankyou'
]

export { RatingController }
