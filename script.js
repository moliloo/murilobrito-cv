// como estou utilizando um header com posição fixa, quando clicava numa âncora numa sessão,
// o título ficava atrás do header, a função desse scrip serve apenas para faça uma pequena
// animação para ir a sessão clicada e que ele fique abaixo do header, não embaixo

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
