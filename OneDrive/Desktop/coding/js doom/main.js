function tipCalc() {
    let cost = document.getElementById("input-cost").value;
    let split = document.getElementById("billSplit").value;
    let service = document.querySelector('input[name="service"]:checked').value;
    let tipValue = [
      0.0,
      0.10,
      0.15,
      0.20,
      0.30
    ];
  
    let totalBill = (cost * tipValue[service]).toFixed(2);
    let shareTip = (totalBill / split).toFixed(2);
    if (service >= 0) {
      document.getElementById("share").innerHTML = "Each person's tip is: $"+shareTip+"!"
    }
  };