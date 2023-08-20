import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [cost, setCost] = useState(0);
  const [interest, setInterest] = useState(10);
  const [fee, setFee] = useState(1);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);
  const tenureData = [12, 24, 36, 48, 60];

  const calculateEMI = (downpayment) => {
    if (!cost) return;
    const loanAmt = cost - downpayment;
    const rateOfInterest = interest / 100;
    const numOfYears = tenure / 12;
    const EMI =
      (loanAmt * rateOfInterest * (1 + rateOfInterest) ** numOfYears) /
      ((1 + rateOfInterest) ** numOfYears - 1);
    return Number(EMI / 12).toFixed(0);
  };

  const calculateDownPayment = (emi) => {
    if (!cost) return;
    const dpPercent = 100 - (emi / calculateEMI(0)) * 100;
    return Number((dpPercent / 100) * cost).toFixed(0);
  };

  const updateEMI = (e) => {
    if (!cost) return;
    const dp = Number(e.target.value);
    setDownPayment(dp.toFixed(0));
    const emi = calculateEMI(dp);
    setEmi(emi);
  };

  const updateDownPayment = () => {
    if (!cost) return;
    const em = Number(e.target.value);
    setEmi(em.toFixed(0));
    const dp = calculateDownPayment(em);
    setDownPayment(dp);
  };

  useEffect(() => {
    if (!(cost > 0)) {
      setDownPayment(0);
      setEmi(0);
    }
    const emi = calculateEMI(downPayment);
    setEmi(emi);
  }, [tenure, cost]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <span>EMI Calculator</span>
      <span>Total Cost of Asset</span>
      <input
        type="number"
        value={cost}
        onChange={(e) => {
          setCost(e.target.value);
        }}
        placeholder="Total Cost of Assets"
      />

      <span>Interest Rate (in %)</span>
      <input
        type="number"
        value={interest}
        onChange={(e) => {
          setInterest(e.target.value);
        }}
        placeholder="Interest Rate (in %)"
      />

      <span>Processing Fee (in %)</span>
      <input
        type="number"
        value={fee}
        onChange={(e) => {
          setFee(e.target.value);
        }}
        placeholder="Processing Fee (in %)"
      />

      <span>Down Payment</span>
      <span>
        Total Down Payment -
        {Number(downPayment + (cost - downPayment) * (fee / 100)).toFixed(0)}
      </span>
      <div>
        <input
          type="range"
          min={0}
          max={cost}
          value={downPayment}
          onChange={updateEMI}
          style={{ width: "100%" }}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label>0%</label>
          <b>{downPayment}</b>
          <label>100%</label>
        </div>
      </div>

      <span>Loan Per Month</span>
      <span>Total Loan Amount - {(emi * tenure).toFixed(0)}</span>
      <div>
        <input
          type="range"
          min={calculateEMI(cost)}
          max={calculateEMI(0)}
          value={emi}
          onChange={updateDownPayment}
          style={{ width: "100%" }}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label>{calculateEMI(cost)}</label>
          <b>{emi}</b>
          <label>{calculateEMI(0)}</label>
        </div>
      </div>

      <span>Tenure</span>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {tenureData.map((t) => {
          return (
            <button
              style={{
                background: t === tenure ? "blue" : "black",
              }}
              onClick={() => {
                setTenure(t);
              }}
            >
              {t}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
