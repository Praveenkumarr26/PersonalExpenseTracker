import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Personal Expense Tracker</h1>
      <p>
        {" Description: "}
        <input type="text" name="" id="" className="" />
      </p>
      <p>
        {"Amount: "} <input type="text" />
      </p>
      <p>
        {"Date: "} <input type="text" />
      </p>
      <button className="button"> Add Expences </button>
 
    </div>
  );
}
