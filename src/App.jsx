import { useState } from 'react';
import './App.css'
import ButtonContainer from './Components/ButtonContainer';
import Display from './Components/Display';


function App() {
  const [calVal,setCalVal]=useState('');


  const onBtnClick=(BtnText)=>{
    if (BtnText==='C') {
      setCalVal('');
    }else if (BtnText==='=') {
      const result=eval(calVal);
      setCalVal(result);
    }else{
      const newDisplayValue=calVal + BtnText;
      setCalVal(newDisplayValue);
    }
  }


  return (
    <div className='container'>
      <Display displayVal={calVal}></Display>
      <ButtonContainer  onButtonClick={onBtnClick}></ButtonContainer>
    </div>

  )
}

export default App
