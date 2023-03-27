// Copy Buttons
const buttons = document.querySelectorAll(".copy-btn");
const copyTexts = document.querySelectorAll(".copy-text");

buttons.forEach((button, index) => {
	button.addEventListener("click", () => {
		const copiedText = copyTexts[index].innerText;
		navigator.clipboard.writeText(copiedText);
		button.innerText = "copied";
		setTimeout(function () {
			button.innerText = "copy";
		}, 1000);
	});
});

// Display Try Response
function displayTryResponse(event) {
	const tryInput = document.querySelector(".try input[type=text]");
	const tryResponse = document.querySelector(".try__response");
	const tryResponseCode = tryResponse.querySelector("code");
	const baseURL = "https://www.csscolorsapi.com/api/";

	event.preventDefault();
	const color = tryInput.value;
	const url = baseURL + color;

	fetch(url)
		.then((response) => response.json())
		.then(
			(data) =>
				(tryResponseCode.innerHTML = Prism.highlight(
					JSON.stringify(data, null, 4),
					Prism.languages.json,
					"json"
				))
		);

	tryResponse.style.display = "block";
}

// Try Button
const tryBtn = document.querySelector(".try button[type=submit]");
tryBtn.addEventListener("click", displayTryResponse);

// Hints
const hints = document.querySelectorAll(".try__buttons button");
hints.forEach((hint) => {
	hint.addEventListener("click", function () {
		const tryInput = document.querySelector(".try input[type=text]");
		const hintText = this.innerText;
		tryInput.value = hintText;

		displayTryResponse(event);
	});
});
