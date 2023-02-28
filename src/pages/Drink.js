import Navber from "../components/home/Navber";
import Table from "../components/drink/Table";

function Drink() {
  return (
    <>
      <div style={{ marginBottom: "40px" }}>
        <Navber />
      </div>
      <div style={{ padding: "40px" }}>
        <Table />
      </div>
    </>
  );
}

export default Drink;
