import "../App.css";
import Acounts from "./Acounts";
import data from "../assets/data.json";

export default function Section() {
  return (
    <>
      {data.map((info, index) => {
        return (
          <div key={index}>
            <Acounts name={info.name} balance={info.balance} color={info.color} operations={info.operations}/>
          </div>
        );
      })}
    </>
  );
}
