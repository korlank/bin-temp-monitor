import { useState, useEffect } from 'react';
import './App.css';
import Monitor from './Monitor';
import axios from "axios";

function Bin() {
 const [state, setState] = useState({1: [], 2: [], 3: []});

 function formatState(input) {
  for (let eachReading of input) {
    if (state[eachReading.sensor_id]) {
      state[eachReading.sensor_id].push(eachReading.temperature)
    } else {
      state[eachReading.sensor_id] = []
    }
  }
  return state
}
  useEffect(() =>{

    axios
    .get("/readings")
    .then((result) => {
      
      let newState = formatState(result.data);
      setState((prev)=> ({...prev, ...newState}) )})
    .catch((err) => console.log(err));

    const firstColor = getComputedStyle(document.documentElement).getPropertyValue('--first1-color');
    const secondColor = getComputedStyle(document.documentElement).getPropertyValue('--second1-color');
    const thirdColor = getComputedStyle(document.documentElement).getPropertyValue('--third1-color');
    const forthColor = getComputedStyle(document.documentElement).getPropertyValue('--forth1-color');
    const fifthColor = getComputedStyle(document.documentElement).getPropertyValue('--fifth1-color');
    const firstColor2 = getComputedStyle(document.documentElement).getPropertyValue('--first2-color');
    const secondColor2 = getComputedStyle(document.documentElement).getPropertyValue('--second2-color');
    const thirdColor2 = getComputedStyle(document.documentElement).getPropertyValue('--third2-color');
    const forthColor2 = getComputedStyle(document.documentElement).getPropertyValue('--forth2-color');
    const fifthColor2 = getComputedStyle(document.documentElement).getPropertyValue('--fifth2-color');
    const firstColor3 = getComputedStyle(document.documentElement).getPropertyValue('--first3-color');
    const secondColor3 = getComputedStyle(document.documentElement).getPropertyValue('--second3-color');
    const thirdColor3 = getComputedStyle(document.documentElement).getPropertyValue('--third3-color');
    const forthColor3 = getComputedStyle(document.documentElement).getPropertyValue('--forth3-color');
    const fifthColor3 = getComputedStyle(document.documentElement).getPropertyValue('--fifth3-color');
  }, [])


  function changeGradient1(first, second, third, forth, fifth) {
    document.documentElement.style.setProperty('--first1-color', '#12ec12 ' + first + 'px');
    document.documentElement.style.setProperty('--second1-color', '#ffff00 ' + second + 'px');
    document.documentElement.style.setProperty('--third1-color', '#ff0606 ' + third + 'px');
    document.documentElement.style.setProperty('--forth1-color', '#ffff00 ' + forth + 'px');
    document.documentElement.style.setProperty('--fifth1-color', '#12ec12 ' + fifth + 'px');
  }
  function changeGradient2(first, second, third, forth, fifth) {
    document.documentElement.style.setProperty('--first2-color', '#12ec12 ' + first + 'px');
    document.documentElement.style.setProperty('--second2-color', '#ffff00 ' + second + 'px');
    document.documentElement.style.setProperty('--third2-color', '#ff0606 ' + third + 'px');
    document.documentElement.style.setProperty('--forth2-color', '#ffff00 ' + forth + 'px');
    document.documentElement.style.setProperty('--fifth2-color', '#12ec12 ' + fifth + 'px');
  }
  function changeGradient3(first, second, third, forth, fifth) {
    document.documentElement.style.setProperty('--first3-color', '#12ec12 ' + first + 'px');
    document.documentElement.style.setProperty('--second3-color', '#ffff00 ' + second + 'px');
    document.documentElement.style.setProperty('--third3-color', '#ff0606 ' + third + 'px');
    document.documentElement.style.setProperty('--forth3-color', '#ffff00 ' + forth + 'px');
    document.documentElement.style.setProperty('--fifth3-color', '#12ec12 ' + fifth + 'px');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Grain Bin Temperature Monitoring Demo</h3>
      </header>
      <div className='main'>
        <div className='monitors'>
          <div className='gradient1'>  <Monitor setState={setState} temperature={state[1]} id={1} changeGradient={changeGradient1} /></div>
          <div className='gradient2'>
            <Monitor setState={setState} temperature={state[2]} changeGradient={changeGradient2} id={2} /></div>
          <div className='gradient3'>
            <Monitor setState={setState} temperature={state[3]} changeGradient={changeGradient3} id={3} /></div>

        </div>

      </div>
    </div>
  );
}

export default Bin;
