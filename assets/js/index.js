const words = ["Quality", "Class", "caliber", "Style", "value"];

const productOpts = [
	{
		product_id: "1",
		product_title: "Unveiling the Timeless Elegance",
		product_subtitle: "The Oyo Navy Blue Lunch Cap with Subtle Grey Accents",
		product_text: `
			Step into a world of refined style with our expertly crafted Oyo Navy Blue Lunch Cap with Tip. This distinctive headpiece seamlessly marries cultural heritage with contemporary sophistication, presenting a fresh take on tradition. The rich navy blue hue, adorned with subtle grey accents, adds a modern touch to this traditional Yoruba Cap.

			Immerse yourself in the artistry of premium craftsmanship as this cap is meticulously fashioned from top-tier materials, ensuring a perfect blend of tradition and refined style. The intricate grey designs on the cap serve as a subtle nod to the richness of Yoruba culture, making it a distinctive accessory that captures attention with understated elegance.

		`,
	},
	{
		product_id: "2",
		product_title: " Embrace Elegance in Every Meeting",
		product_subtitle: "The Lagos Sky Blue Business Cap with Distinguished Tip",
		product_text: `
			Elevate your business attire with our meticulously crafted Lagos Sky Blue Business Cap with Tip, designed to exude sophistication and style for official meetings and formal occasions. This cap, traditionally handcrafted in Lagos, pays homage to the city's rich heritage of artisanal craftsmanship. <br />
			Immerse yourself in the refined charm of light blue, a color synonymous with professionalism and confidence. The sleek, tailored design of this cap, complete with a distinguished tip, adds a touch of class to your ensemble, making it the perfect accessory for the discerning businessman.
			`,
	},
	{
		product_id: "3",
		product_title: "Radiate Authority and Style",
		product_subtitle: "Unleashing Elegance at Classy Chief Events",
		product_text: `Step into the realm of authority and sophistication with our Black Chief Vibes Cap, meticulously crafted to stand out and impart the regal touch of a chief. This cap is more than an accessory; it's a symbol of prestige designed for those distinguished occasions that demand a statement of class and leadership. <br /> Draped in commanding black, this cap exudes an air of authority and timeless style. Tailored to perfection, it seamlessly blends tradition with contemporary aesthetics, making it the epitome of refined elegance for chief events.`,
	},
	{
		product_id: "4",
		product_title: "Indulge in Opulence",
		product_subtitle: "The Rich Senator Handcrafted Red Cap – A Symphony of Romantic Luxury and Classic Elegance",
		product_text: `Immerse yourself in the epitome of romantic luxury with our Rich Senator Handcrafted Red Cap, a sartorial masterpiece that defines sophistication and fine class. Meticulously crafted for grand occasions, this cap embodies the distinguished senatorial vibe while adding a touch of opulence to your ensemble. <br />
		The deep, rich red hue speaks volumes of passion and grandeur, making it the ideal choice for those who seek to make a statement at significant events. Handcrafted with precision and care, this cap is a testament to the artisanal mastery that goes into creating a piece of wearable art. <br />
		Elevate your presence with the Rich Senator Handcrafted Red Cap, as it effortlessly blends the romantic allure of red with the timeless elegance befitting a senator. The intricate detailing and craftsmanship ensure that this cap is not merely an accessory but a symbol of refined taste and affluence.
`,
	},
	{
		product_id: "5",
		product_title: "Discover Your Signature Style",
		product_subtitle: "A Kaleidoscope of Caps for Every Occasion",
		product_text: `Step into the realm of authority and sophistication with our Black Chief Vibes Cap, meticulously crafted to stand out and impart the regal touch of a chief. This cap is more than an accessory; it's a symbol of prestige designed for those distinguished occasions that demand a statement of class and leadership. <br /> Draped in commanding black, this cap exudes an air of authority and timeless style. Tailored to perfection, it seamlessly blends tradition with contemporary aesthetics, making it the epitome of refined elegance for chief events.`,
	},
];

const dir = "./assets/images/products/";
const params = new URLSearchParams(window.location.search);
const check = params.has("id");
const productImage = document.getElementById("v-specific-image-product");
const goBacktoggle = document.querySelector("#v-product-main .go-back");
const textContainer = document.querySelector(".v-main-title .v-clr");
const productTitle = document.querySelector(".v-product-content .v-product-title");
const aboutProduct = document.querySelector(".v-product-content .v-text");
const productSubtitle = document.querySelector(".v-product-content .v-subtitle");
const copyButton = document.querySelector(".v-acct-details .v-copy");
const accountNumber = document.querySelector(".v-acct-details .v-acct-num");
const sendReceipt = document.querySelector(".v-send-receipt");

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
<path
	fill="currentColor"
	d="M14 8H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V10c0-1.103-.897-2-2-2z" />
<path fill="currentColor" d="M20 2H10a2 2 0 0 0-2 2v2h8a2 2 0 0 1 2 2v8h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
</svg>
`;

const success = `
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M19.495 3.133a1 1 0 0 1 1.352.308l.99 1.51a1 1 0 0 1-.155 1.28l-.003.004l-.014.013l-.057.053l-.225.215a83.86 83.86 0 0 0-3.62 3.736c-2.197 2.416-4.806 5.578-6.562 8.646c-.49.856-1.687 1.04-2.397.301l-6.485-6.738a1 1 0 0 1 .051-1.436l1.96-1.768A1 1 0 0 1 5.6 9.2l3.309 2.481c5.168-5.097 8.1-7.053 10.586-8.548Z"/></g></svg>
`;

if (copyButton) {
	copyButton.addEventListener("click", async function () {
		if ("clipboard" in navigator) {
			const textToCopy = accountNumber.textContent.trim();
			navigator.clipboard.writeText(textToCopy);
			const copiedText = await navigator.clipboard.readText();
			if (copiedText) {
				copyButton.innerHTML = success;
				copyButton.disabled = true;
				setTimeout(() => {
					copyButton.innerHTML = svg;
					copyButton.disabled = false;
				}, 2000);
			}
		}
	});
}

if (window.location.pathname.includes("product.html")) {
	if (!check || !params.has("ext")) {
		window.history.back();
	} else {
		let id = params.get("id");
		const extension = params.get("ext");
		productImage.src = `${dir}${id}.${extension}`;
		id = id.split("-")[1];
		const currentProduct = productOpts.find((product) => {
			return product.product_id == id;
		});
		productTitle.innerHTML = currentProduct.product_title;
		aboutProduct.innerHTML = currentProduct.product_text;
		productSubtitle.innerHTML = currentProduct.product_subtitle;
	}
}

if (goBacktoggle) {
	goBacktoggle.addEventListener("click", function () {
		window.history.back();
	});
}

if (textContainer) {
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
}
function sendMessage() {
	const phoneNumber = "2348057704001";
	const message = "Hello, I've just made a payment for my recent purchase/order. Could you kindly confirm receipt on your end? Thank you";
	const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

	window.open(url, "_blank");
}

if (sendReceipt) {
	sendReceipt.addEventListener("click", sendMessage);
}
