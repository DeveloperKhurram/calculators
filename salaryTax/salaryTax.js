let monthlySalary = prompt("Enter your monthly salary");
let annualSalary = monthlySalary * 12;
let basicSalary = annualSalary * 0.67;
let medicalAllowance = basicSalary * 0.1;
let taxableSalary = annualSalary - medicalAllowance;
let annualTax;
let monthlyTax;
let netSalary;

if (taxableSalary > 4100000) {
  annualTax = (taxableSalary - 4100000) * 0.35 + 616000;
} else if (taxableSalary > 3200000) {
  annualTax = (taxableSalary - 3200000) * 0.3 + 346000;
} else if (taxableSalary > 2200000) {
  annualTax = (taxableSalary - 2200000) * 0.23 + 116000;
} else if (taxableSalary > 1200000) {
  annualTax = (taxableSalary - 1200000) * 0.11 + 6000;
} else if (taxableSalary > 600000) {
  annualTax = (taxableSalary - 600000) * 0.01;
} else {
  annualTax = 0;
}

if (annualTax === 0) {
  alert("You are exempt from tax - Enjoy your salary!");
} else {
  monthlyTax = annualTax / 12;
  netSalary = monthlySalary - monthlyTax;
  alert(`here is your salary schedule:\n
    Current Salary: ${monthlySalary}\n
    Taxable Salary: ${taxableSalary}\n
    Tax on Salary: Annual - ${annualTax}, Monthly - ${monthlyTax}\n
    Net Salary Receivable = ${netSalary}
    `);
}
