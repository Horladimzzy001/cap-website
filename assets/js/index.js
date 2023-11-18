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
