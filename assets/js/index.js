const words = ["Quality", "Class", "caliber", "Style", "value"];

const textContainer = document.querySelector(".v-main-title .v-clr");
let wordIndex = 0;
const removeAndReplace = () => {
	const div = document.createElement("div");
	div.classList.add("v-text");
	div.innerHTML = `${words[wordIndex]},`;
	textContainer.appendChild(div);
	wordIndex = (wordIndex + 1) % words.length;

	setTimeout(() => {
		div.remove();
	}, 2000);
};
removeAndReplace();

setInterval(removeAndReplace, 2000);
