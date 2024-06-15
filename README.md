# car-leasing-calculator

index.html
The HTML file sets up the structure of the form and results display.
Form inputs include car type, car value, lease period, and down payment.
The results section shows the leasing cost, down payment, monthly installment, and interest rate.

styles.css
The CSS file styles the form and results sections to ensure they are visually appealing and responsive. Flexbox is used for layout, and media queries adjust the layout for smaller screens.

script.js
The JavaScript file contains the logic to update the leasing calculation dynamically as the user changes the input values.
Event listeners are used to trigger the calculation when inputs change.

Variables are initialized to reference specific form elements and result display elements in the DOM. This is done using document.getElementById().

updateValues function:
carValueNum, leasePeriodNum, and downPaymentPercentNum are fetched and parsed from the input fields.
The interest rate is set based on the selected car type (2.99% for new cars and 3.7% for used cars).
The down payment amount is calculated as a percentage of the car value.
The loan amount is determined by subtracting the down payment from the car value.
The annual interest rate is divided by 100 to get a decimal and then divided by 12 to get the monthly interest rate.
The monthly installment is calculated using the loan amortization formula :
M=P*r(1+r)^n/(1+r)^n-1
The total leasing cost is the sum of the down payment and the total of all monthly installments.
The calculated values are updated in the DOM by setting the textContent of the respective elements.

Event listeners are set up to call the updateValues function whenever the input values change.
Finally, updateValues is called initially to set the default calculated values when the page is first loaded.
