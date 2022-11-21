const element = document.querySelector('.map-point-animation');
		//const element1 = document.querySelector('.your-div1');
		// const className = 'Test';

		document.addEventListener('scroll', function () {
			addClassOnViewPort(element, 'show');
			//addClassOnViewPort(element1, 'Test2');
		}, {
			passive: true
		});

		function addClassOnViewPort(element, className) {
			isInViewport(element) ?
				$(element).addClass(className) :
				$(element).removeClass(className);
		}

		function isInViewport(el) {
			const currentElement = el.getBoundingClientRect();
			return (
				currentElement.top >= 0 &&
				currentElement.left >= 0 &&
				currentElement.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
				currentElement.right <= (window.innerWidth || document.documentElement.clientWidth)
			);
		}