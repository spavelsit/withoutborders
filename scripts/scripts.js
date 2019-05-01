const pdfSize = () => {
	const pdf = document.getElementById('pdf');
	const wrapSidenav = document.getElementById('wrap_sidenav');

	pdf.style.width = (window.innerWidth - 250) + 'px';
	pdf.style.height = (window.innerHeight - 6) + 'px';
	wrapSidenav.style.height = (window.innerHeight - 110) + 'px';

}

pdfSize();
window.addEventListener('resize', pdfSize);

$('#wrap_sidenav > li').click(function () {
	if (!$(this).hasClass('active')) {
		$('#wrap_sidenav > li').removeClass('active');
		$(this).addClass('active');
		$('.listActive').slideUp();
		if ($(this).children().hasClass('list')) {
			$(this).children('.listActive').slideToggle();
		}
	}
})


function showContent(number) {

	var cont = document.getElementById('contentBody');
	
	cont.innerHTML = `<object><embed id="pdf" src="../pdf/${number}.pdf"/></object>`;
	pdfSize();
		
}

// создание ajax объекта  
function createRequestObject() {
	try {
		return new XMLHttpRequest()
	} catch (e) {
		try {
			return new ActiveXObject('Msxml2.XMLHTTP')
		} catch (e) {
			try {
				return new ActiveXObject('Microsoft.XMLHTTP')
			} catch (e) {
				return null;
			}
		}
	}
}