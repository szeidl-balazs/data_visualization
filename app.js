function loader() {

	let weightLess90 = [];
	let weightLess95 = [];
	let weightLess100 = [];
	let weightLess105 = [];
	let weightLess110 = [];
	let weightLess115 = [];
	let weightLess120 = [];
	let weightLess125 = [];
	let weightLess130 = [];
	let weightLess135 = [];
	let weightLess140 = [];
	let weightLess145 = [];
	let weightLess150 = [];
	let weightLess155 = [];
	let weightLess160 = [];
	let weightLess165 = [];
	let weightOver165 = [];

	d3.csv("/hw_25000.csv").then(function (data) {

		for (let i = 0; i < data.length; i++) {
			if (data[i][' "Weight(Pounds)"'] <= 90) {
				weightLess90.push(data[i][' "Weight(Pounds)"']);
			} else if (data[i][' "Weight(Pounds)"'] <= 95) {
				weightLess95.push(data[i][' "Weight(Pounds)"']);
			} else if (data[i][' "Weight(Pounds)"'] <= 100) {
				weightLess100.push(data[i][' "Weight(Pounds)"']);
			} else if (data[i][' "Weight(Pounds)"'] <= 105) {
				weightLess105.push(data[i][' "Weight(Pounds)"']);
			} else if (data[i][' "Weight(Pounds)"'] <= 110) {
				weightLess110.push(data[i][' "Weight(Pounds)"']);
			} else if (data[i][' "Weight(Pounds)"'] <= 115) {
				weightLess115.push(data[i][' "Weight(Pounds)"']);
			} else if (data[i][' "Weight(Pounds)"'] <= 120) {
				weightLess120.push(data[i][' "Weight(Pounds)"']);
			} else if (data[i][' "Weight(Pounds)"'] <= 125) {
				weightLess125.push(data[i][' "Weight(Pounds)"']);
			} else if (data[i][' "Weight(Pounds)"'] <= 130) {
				weightLess130.push(data[i][' "Weight(Pounds)"']);
			} else if (data[i][' "Weight(Pounds)"'] <= 135) {
				weightLess135.push(data[i][' "Weight(Pounds)"']);
			} else if (data[i][' "Weight(Pounds)"'] <= 140) {
				weightLess140.push(data[i][' "Weight(Pounds)"']);
			} else if (data[i][' "Weight(Pounds)"'] <= 145) {
				weightLess145.push(data[i][' "Weight(Pounds)"']);
			} else if (data[i][' "Weight(Pounds)"'] <= 150) {
				weightLess150.push(data[i][' "Weight(Pounds)"']);
			} else if (data[i][' "Weight(Pounds)"'] <= 155) {
				weightLess155.push(data[i][' "Weight(Pounds)"']);
			} else if (data[i][' "Weight(Pounds)"'] <= 160) {
				weightLess160.push(data[i][' "Weight(Pounds)"']);
			} else if (data[i][' "Weight(Pounds)"'] <= 165) {
				weightLess165.push(data[i][' "Weight(Pounds)"']);
			} else if (data[i][' "Weight(Pounds)"'] > 165) {
				weightOver165.push(data[i][' "Weight(Pounds)"']);
			}

		}

		let finalArray = [
			{ countArrEl: Math.round(weightLess90.length / 5) },
			{ countArrEl: Math.round(weightLess95.length / 5) },
			{ countArrEl: Math.round(weightLess100.length / 5) },
			{ countArrEl: Math.round(weightLess105.length / 5) },
			{ countArrEl: Math.round(weightLess110.length / 5) },
			{ countArrEl: Math.round(weightLess115.length / 5) },
			{ countArrEl: Math.round(weightLess120.length / 5) },
			{ countArrEl: Math.round(weightLess125.length / 5) },
			{ countArrEl: Math.round(weightLess130.length / 5) },
			{ countArrEl: Math.round(weightLess135.length / 5) },
			{ countArrEl: Math.round(weightLess140.length / 5) },
			{ countArrEl: Math.round(weightLess145.length / 5) },
			{ countArrEl: Math.round(weightLess150.length / 5) },
			{ countArrEl: Math.round(weightLess155.length / 5) },
			{ countArrEl: Math.round(weightLess160.length / 5) },
			{ countArrEl: Math.round(weightLess165.length / 5) },
			{ countArrEl: Math.round(weightOver165.length / 5) }
		];

		data = finalArray;

		const xScale = d3.scaleBand().domain(finalArray.map((dataPoint) => dataPoint.countArrEl)).rangeRound([0, 900]).padding(0.1);

		const yScale = d3.scaleLinear().domain([0, 900]).range([900, 0]);

		const container = d3.select('svg').classed('container', true);

		const bars = container
			.selectAll('.bar')
			.data(finalArray)
			.enter()
			.append('rect')
			.classed('bar', true)
			.attr('width', xScale.bandwidth())
			.attr('height', (data) => 900 - Math.round(yScale(data.countArrEl)))
			.attr('x', data => xScale(data.countArrEl))
			.attr('y', data => Math.round(yScale(data.countArrEl)));

	});

	/*
	let _weightSeries = document.querySelector('#weightSeries');
	let _seriesValue = document.querySelector('#seriesValue');
	let _rectBar = document.querySelectorAll(".bar");
	console.log(_rectBar);
	_rectBar.addEventListener('mouseover', displaySeries);


	function displaySeries() {
		if (_rectBar.getAttribute("height") == 100) {
			console.log("100");
		}
	}
	*/
}
window.addEventListener('load', loader);