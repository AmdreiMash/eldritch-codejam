export function getEvent() {
	document.body.addEventListener('click', () => {
		if (event.target.classList.contains('difficulties')) {
			document.querySelectorAll('.difficulties').forEach(e => {
				e.classList.remove('active')
			})
			event.target.classList.add('active')
		}
		if (event.target.classList.contains('ancient')) {
			document.querySelectorAll('.ancient').forEach(e => {
				e.classList.remove('active')
			})
			event.target.classList.add('active')
		}
		if (event.target.classList.contains('mixCard')) {
			alert('ку')
		}
	})
}
