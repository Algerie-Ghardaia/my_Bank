import "../App.css";

export default function Acounts(propos) {
  return (
    <>
      <div className="section_container">
        <div className="name_montant" style={{ background: propos.color }}>
          <div className="model_courant">
            <h1>{propos.name}</h1>
          </div>
          <div>
            <p style={{ marginBottom: "3px" }}>{propos.balance} €</p>
          </div>
        </div>
        {propos.operations.map((detail, index) => {
          return (
            <div key={index} className="model_operations">
              <div className="operations" style={{marginTop:'10px'}}>
                <div className="date_soci">
                  <div>{detail.date}</div>
                  <div className="description">{detail.description}</div>
                </div>
                <div style={{ marginRight: "30px" }}>{detail.amount}</div>
              </div>
            </div>
          );
        })}
        <button>See More</button>
      </div>
    </>
  );
}
