$(document).ready(function() {
	var heroImage = (function() {
		function HeroImageSlider(containerSelector, slideSelector) {
			this.element = $(containerSelector),
			this.slides = this.element.find(slideSelector),
			this.totalSlides = this.slides.length,
			this.currentSlide = 0,
			this.dotNav = this.element.find('.nav')
		}
		HeroImageSlider.prototype.goTo = function(slideNumber) {
			this.currentSlide = slideNumber;
			this.markAsActive();
		}
		HeroImageSlider.prototype.markAsActive = function() {
			this.element.find('.active').removeClass('active');
			this.slides.eq(this.currentSlide).addClass('active');
			this.updateDotNav();
		}
		HeroImageSlider.prototype.updateDotNav = function() {
			this.dotNav.find('span').eq(this.currentSlide).addClass('active');
		}
		HeroImageSlider.prototype.next = function() {
			this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
			this.markAsActive();
		}
		HeroImageSlider.prototype.previous = function() {
			this.currentSlide = (this.currentSlide + this.totalSlides - 1) % this.totalSlides;
			this.markAsActive();
		}
		return {
			HeroImageSlider: HeroImageSlider
		}
	})();

	var slides = new heroImage.HeroImageSlider('.hero', '.hero__slide');

	slides.goTo(0);
	$('body').on('click', '.hero__nav--single-dot', function handleDotClick() {
		slides.goTo( $(this).data('slide') );
	});
	$('body').on('click', '.hero__nav-arrow.next', function handleNextClick() {
		slides.next();
	});
	$('body').on('click', '.hero__nav-arrow.previous', function handlePreviousClick() {
		slides.previous();
	});
});
