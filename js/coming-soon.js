const language = {
	en: {
		select_label: "Choose another language",
		title: "Hi, I'm Huesitos",
		welcome: "Thank you for visiting my personal website! Content is still not quite ready, but... For now, please enjoy this video about cute and funny cats (^w^)"
	},
	es: {
		select_label: "Escoge otro idioma",
		title: "Hola, soy Huesitos",
		welcome: "¡Gracias por visitar mi sitio web personal! El contenido aún no está del todo listo, pero... Por ahora, por favor disfruta de este vídeo de gatitos divertidos y lindos (^w^)"
	}
};

const select = document.getElementById("language-select");

select.addEventListener("change", function(){
	const select_label_text = document.getElementById("language-label");
	const title_text = document.getElementById("site-title");
	const welcome_text = document.getElementById("welcome-message");
	let user_language = select.value;

	switch (user_language) {
		case "en":
			select_label_text.innerHTML = language.en.select_label;
			title_text.innerHTML = language.en.title;
			welcome_text.innerHTML = language.en.welcome;
			break;
		case "es":
			select_label_text.innerHTML = language.es.select_label;
			title_text.innerHTML = language.es.title;
			welcome_text.innerHTML = language.es.welcome;
			break;
		default:
			select_label_text.innerHTML = language.en.select_label;
			title_text.innerHTML = language.en.title;
			welcome_text.innerHTML = language.en.welcome;
			break;
	}
});