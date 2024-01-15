const priceingSite = [
	{ id: 1, productprice: ".com $9.25 "},
	{ id: 2, productprice: ".sg $7.91" },
	{ id: 3, productprice: ".space $12.98" },
	{ id: 4, productprice: ".info $14.15" },
	{ id: 5, productprice: ".net $16.15" },
	{ id: 6, productprice: ".com %10.14" },
	{ id: 7, productprice: "More"},
  ];

const priceGroup = () => {
	const price = document.getElementById('webhosting-group');
    //   console.log(price);

	for(priceing of priceingSite) {
		const li =document.createElement("li");
		const a = document.createElement("a");

		a.href = "#";
		a.textContent = priceing.productprice;

		li.appendChild(a);
		price.appendChild(li);
	}
};

priceGroup();