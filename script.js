document.addEventListener('DOMContentLoaded', () => {
    const carType = document.getElementById('car-type');
    const carValue = document.getElementById('car-value');
    const carValueText = document.getElementById('car-value-text');
    const leasePeriod = document.getElementById('lease-period');
    const downPayment = document.getElementById('down-payment');
    const downPaymentText = document.getElementById('down-payment-text');
    const leasingCostEl = document.getElementById('leasing-cost');
    const downPaymentAmountEl = document.getElementById('down-payment-amount');
    const monthlyInstallmentEl = document.getElementById('monthly-installment');
    const interestRateEl = document.getElementById('interest-rate');

    const updateValues = () => {
        let carValueNum = parseFloat(carValue.value);
        const leasePeriodNum = parseFloat(leasePeriod.value);
        const downPaymentPercentNum = parseInt(downPayment.value);
        const interestRate = carType.value === 'new' ? 2.99 : 3.7;
        const downPaymentAmount = (carValueNum * downPaymentPercentNum) / 100;
        const loanAmount = carValueNum - downPaymentAmount;
        const annualInterestRate = interestRate / 100;
        const monthlyInterestRate = annualInterestRate / 12;
        const numPayments = leasePeriodNum;

        const monthlyInstallment = (loanAmount * monthlyInterestRate) / (1 - Math.pow((1 + monthlyInterestRate), -numPayments));
        const totalLeasingCost = downPaymentAmount + (monthlyInstallment * numPayments);
        
        leasingCostEl.textContent = totalLeasingCost.toFixed(2);
        downPaymentAmountEl.textContent = downPaymentAmount.toFixed(2);
        monthlyInstallmentEl.textContent = monthlyInstallment.toFixed(2);
        interestRateEl.textContent = interestRate.toFixed(2);
    };

    carValue.addEventListener('input', () => {
        carValueText.value = carValue.value;
        updateValues();
    });

    carValueText.addEventListener('input', () => {
        let value = parseFloat(carValueText.value);
        value = Math.min(200000, Math.max(10000, value));
        carValue.value = value;
        updateValues();
    });

    carValueText.addEventListener('change', () => {
        let value = parseFloat(carValueText.value);
        value = Math.min(200000, Math.max(10000, value));
        carValue.value = value;
        carValueText.value = value;
        updateValues();
    });

    downPayment.addEventListener('input', () => {
        downPaymentText.value = downPayment.value;
        updateValues();
    });

    downPaymentText.addEventListener('input', () => {
        let value = parseFloat(downPaymentText.value);
        value = Math.round(value / 5) * 5;
        value = Math.min(50, Math.max(10, value));
        downPayment.value = value;
        updateValues();
    });

    downPaymentText.addEventListener('change', () => {
        let value = parseFloat(downPaymentText.value);
        value = Math.round(value / 5) * 5;
        value = Math.min(50, Math.max(10, value));
        downPayment.value = value;
        downPaymentText.value = value;
        updateValues();
    });

    carType.addEventListener('change', updateValues);
    leasePeriod.addEventListener('change', updateValues);

    updateValues();
});
