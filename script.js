const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const tbody = document.querySelector('table');
const getSum = () => {
//Add your code here
	let sum=0;
	const prices = document.querySelectorAll('.price');
	prices.forEach(td => {
		sum+=Number(td.textContent);
});
	const row = document.createElement('tr')
	row.innerHTML=`
	<td></td>
	<td>${sum}</td>
	`;
	
	
   tbody.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);

