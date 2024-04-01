document.querySelectorAll('.link-secao').forEach((anchor) => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const sectionId = this.getAttribute('href')
		const section = document.querySelector(sectionId)

		window.scrollTo({
			top: section.offsetTop - document.querySelector('header').offsetHeight,
			behavior: 'smooth',
		})
	})
})
