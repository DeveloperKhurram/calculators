// let yoName = prompt("Enter your name!");
// let monthlyRent = Number(
//   prompt(`${yoName.toUpperCase()}, What is your monthly rent!`)
// );
// let annualRent = monthlyRent * 12;

// if (annualRent > 2000000) {
//   let taxableRent = annualRent - 2000000;
//   let annualTax = (taxableRent * 25) / 100 + 155000;
//   let monthlyTax = annualTax / 12;
//   alert(`${yoName.toUpperCase()}, here is your tax on rent schedule\n
//     Rent: \n
//     Monthly = ${monthlyRent}, Annual = ${annualRent}\n
//     Your Taxable Rent = ${taxableRent}\n
//     Tax Payable to FBR:\n
//     Annual = ${annualTax}, Monthly = ${monthlyTax}\n
//     Net Rent Payable = ${rentPayable}
//     `);
// } else if (annualRent > 600000) {
//   let taxableRent = annualRent - 600000;
//   let annualTax = (taxableRent * 10) / 100 + 15000;
//   let monthlyTax = annualTax / 12;
//   let rentPayable = monthlyRent - monthlyTax;
//   alert(`${yoName.toUpperCase()}, here is your tax on rent schedule\n
//     Rent: \n
//     Monthly = ${monthlyRent}, Annual = ${annualRent}\n
//     Your Taxable Rent = ${taxableRent}\n
//     Tax Payable to FBR:\n
//     Annual = ${annualTax}, Monthly = ${monthlyTax}\n
//     Net Rent Payable = ${rentPayable}
//     `);
// } else if (annualRent > 300000) {
//   let taxableRent = annualRent - 300000;
//   let annualTax = (taxableRent * 5) / 100;
//   let monthlyTax = annualTax / 12;
//   alert(`${yoName.toUpperCase()}, here is your tax on rent schedule\n
//     Rent: \n
//     Monthly = ${monthlyRent}, Annual = ${annualRent}\n
//     Your Taxable Rent = ${taxableRent}\n
//     Tax Payable to FBR:\n
//     Annual = ${annualTax}, Monthly = ${monthlyTax}\n
//     Net Rent Payable = ${rentPayable}
//     `);
// } else {
//   alert(`${yoName.toUpperCase()}, here is your tax on rent schedule\n
//     Rent: \n
//     Monthly = ${monthlyRent}, Annual = ${annualRent}
//     `);
// }

let monthlyRent = prompt("Enter your monthly rent");
let annualRent = monthlyRent * 12;
let taxableRent;
let annualTax;
let monthlyTax;
let rentPayable;

if (annualRent > 2000000) {
  // alert(`annualRent: ${annualRent} > 2,000,000`);
  taxableRent = annualRent - 2000000;
  annualTax = (taxableRent * 25) / 100 + 155000;
  monthlyTax = annualTax / 12;
  rentPayable = monthlyRent - monthlyTax;
} else if (annualRent > 600000) {
  // alert(`annualRent: ${annualRent} > 600,000`);
  taxableRent = annualRent - 600000;
  annualTax = (taxableRent * 10) / 100 + 15000;
  monthlyTax = annualTax / 12;
  rentPayable = monthlyRent - monthlyTax;
} else if (annualRent > 300000) {
  // alert(`annualRent: ${annualRent} > 300,000`);
  taxableRent = annualRent - 300000;
  annualTax = (taxableRent * 5) / 100;
  monthlyTax = annualTax / 12;
  rentPayable = monthlyRent - monthlyTax;
} else {
  taxableRent = 0;
}

if (taxableRent == 0) {
  alert(`You're exempt from tax`);
} else {
  alert(`here is your tax on rent schedule\n
//     Rent: \n
//     Monthly = ${monthlyRent}, Annual = ${annualRent}\n
//     Your Taxable Rent = ${taxableRent}\n
//     Tax Payable to FBR:\n
//     Annual = ${annualTax}, Monthly = ${monthlyTax}\n
//     Net Rent Payable = ${rentPayable}
//     `);
}
