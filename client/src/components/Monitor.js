import './App.css';
import axios from "axios";

function Monitor(props) {
  const { setState, temperature, id, changeGradient } = props;

  function handleSubmit(e) {
    if (e.key === "Enter") {
      // e.preventDefault();
      let newTemperature = Number(e.target.value)
      if (Number(e.target.value) === 0) {
        changeGradient(250, 0, 0, 0, 0)
      }
      if (Number(e.target.value) > 0 && Number(e.target.value) <= 10) {
        changeGradient(0, 125, 0, 130, 225);

      }
      if (Number(e.target.value) > 10 && Number(e.target.value) <= 20) {
        changeGradient(0, 100, 125, 150, 225)
      }
      if (Number(e.target.value) > 20 && Number(e.target.value) <= 30) {
        changeGradient(0, 80, 100, 175, 225)
      }
      if (Number(e.target.value) > 30 && Number(e.target.value) <= 40) {
        changeGradient(0, 50, 80, 195, 250)
      }
      if (Number(e.target.value) > 40 && Number(e.target.value) <= 50) {
        changeGradient(0, 30, 215, 220, 250)
      }
      if (Number(e.target.value) > 50 && Number(e.target.value) < 60) {
        changeGradient(0, 10, 40, 240, 250)
      }
      if (Number(e.target.value) === 60) {
        changeGradient(0, 0, 250, 0, 0)
      }


      axios
        .post("/readings", { id: id, temperature: newTemperature })
        .then((result) => {
          let id = result.data[0].sensor_id;
          let temperature = result.data[0].temperature
          setState((prev) => ({ ...prev, id: temperature }));
        })
        .catch((err) => console.log(err));

    }
  };

  return (
    <div className="input-div">
      <input type="number" className='monitor' placeholder={temperature[temperature.length - 1]} onKeyDown={handleSubmit} />
    </div>
  )
}

export default Monitor;