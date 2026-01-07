import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

function App() {

  const [text,setText] = useState("");

  const Converter_Text_UpperCase =()=>{
    setText(text.toUpperCase());

  }

  const Converter_Text_LowerCase =()=>{
    setText(text.toLowerCase());
  }


  return (
    <>
      <div>
        <h1>Basic Converter Web</h1>
        <p>Would you like to Convert??</p>
        <br/>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Normal Text</Form.Label>
            <Form.Control type="text" placeholder="name@example.com" value={text} onChange={(event)=>setText(event.target.value)} />
          </Form.Group>
          <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Converted Text</Form.Label>
            <Form.Control as="textarea" rows={3} value={text} readOnly />
          </Form.Group>
          <Button onClick={Converter_Text_LowerCase}>Lower Case</Button>&nbsp;&nbsp;
          <Button onClick={Converter_Text_UpperCase}>Upper Case</Button>
        </Form>
      </div>
    </>
  )
}

export default App
