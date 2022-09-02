let intro = document.querySelector(".intro");
let details = document.querySelectorAll("details");
let upButton = document.querySelector(".up-button");

function showIntro() {
	intro.classList.add("intro-show");
}
setInterval(showIntro(), 1000);

for (i = 0; i < details.length; i++) {
	details[i].addEventListener("toggle", hideText);
}

function hideText(event) {
	if (!event.target.open) return;
	let details = event.target.parentNode.children;
	for (i = 0; i < details.length; i++) {
		if (
			details[i].tagName != "DETAILS" ||
			!details[i].hasAttribute("open") ||
			event.target == details[i]
		) {
			continue;
		}
		details[i].removeAttribute("open");
	}
}

$(".gallery-list").magnificPopup({
	delegate: "a",
	type: "image",
	gallery: {
		enabled: true,
	},
});

$('a[href^="#"]').click(function () {
	let navigation = $(this).attr("href");
	$("html, body").animate(
		{
			scrollTop: $(navigation).offset().top,
		},
		600
	);
});
