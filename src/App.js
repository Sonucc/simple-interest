import { Button } from '@mui/material';
import { Stack } from '@mui/material';
import { TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {

        const [interest,setInterest] = useState(0)
        const [principle,setPrinciple] = useState(0)
        const [rate,setRate] = useState(0)
        const [year,setYear] = useState(0)
        const [isPrinciple,setIsPrinciple] = useState(true)
        const [isRate, setIsRate] = useState(true)
        const [isYear, setIsYear] = useState(true)

        const getValidate = (e)=>{
          const {name,value} = e.target
          // console.log(name, value);
          // setPrinciple(value)

          if(!!value.match(/^[0-9]*.?[0-9]+$/)){

            if(name==='principle'){
              setPrinciple(value)
              setIsPrinciple(true)
            }
            else if(name==='rate'){
              setRate(value)
              setIsRate(true)
            }
            else{
              setYear(value)
              setIsYear(true)
            }
          }
          else{
            if(name==='principle'){
            setPrinciple(value)
            setIsPrinciple(false)
          }
          else if(name==='rate'){
            setRate(value)
            setIsRate(false)
          }
          else{
            setYear(value)
            setIsYear(false)
          }
          }

        }

        const handleCalculate = (e)=>{
          e.preventDefault()
          if(!principle || !rate || !year){
            alert('Please fill the form')

          }
          else{
            setInterest(principle*rate*year/100)

          }

        }

        const handleReset = (e)=>{
          setInterest(0)
          setPrinciple(0)
          setRate(0)
          setYear(0)
          setIsPrinciple(true)
          setIsRate(true)
          setIsYear(true)
        }


  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
      <div className='bg-light p-5 rounded' style={{width:"500px"}}>
        <h1>Simple interest app</h1>
        <p>Calculate simple interest easily</p>
        <div className='d-flex justify-content-center align-items-center bg-warning rounded w-100 flex-column p-4'>
          <h1>₹ {' '}{interest}</h1>
          <p>Total simple-interest</p>
        </div>

        <form className='mt-5' onSubmit={handleCalculate}> 
              <div className='mb-3'>
                <TextField className='w-100' name='principle' value={principle || ""} onChange={(e)=>getValidate(e)} id="outlined-basic" label="₹ Principle Amount" variant="outlined" />
              </div>

              { !isPrinciple &&
                <div className='text-danger'>
                  <p>Invalid Input</p>
                  </div>}
                
              <div className='mb-3'>
                <TextField className='w-100' name='rate' value={rate || ""} id="outlined-basic" label="Rate of interest (p.a) %" variant="outlined" onChange={(e)=>getValidate(e)}/>
              </div>

              {!isRate &&
              <div className='text-danger'>
              <p>Invalid Input</p>
              </div>}


              <div className='mb-3'>
                <TextField className='w-100' name='year' value={year || ""} id="outlined-basic" label="Year (yr)" variant="outlined" onChange={(e)=>getValidate(e)} />
              </div>

              {!isYear &&
              <div className='text-danger'>
              <p>Invalid Input</p>
              </div>}

              <Stack direction="row" spacing={2} className='mt-5'>

                  <Button type='submit' className='bg-success' disabled={isPrinciple && isRate && isYear?false : true} style={{width:'200px', height:'50px'}} variant="contained">Calculate</Button>
                  <Button onClick={handleReset} style={{width:'200px', height:'50px'}} variant="outlined">Reset</Button>
  
              </Stack>
            
              
        </form>

        </div>
    </div>
  );
}

export default App;
