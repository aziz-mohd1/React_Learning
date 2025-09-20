import "./App.css";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";


function App() {
  let styles = {width: "100", height: "100"};
  return (
    <div style={styles}>
      {/* <MsgBox userName="Aziz" textColor="yellow"/>
      <MsgBox userName="Logisthan" textColor="violet"/>
      <ProductTab/> */}
      
      <h3 className="head">Blockbuster Deals on Computer Accessories | Shop Now!</h3>
      <ProductTab/>
    </div>
  );
}

export default App;
