import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import {NewFormControl,ColorCard} from './styles'
import {Container,ButtonGroup,ToggleButton} from 'react-bootstrap';


function App() {
  const [checked1  ,setChecked1  ]= useState(false);
  const [checked2  ,setChecked2  ]= useState(false);
  const [checked3  ,setChecked3  ]= useState(false);
  const [color  ,setColor  ]= useState("black");
  const theme = {
    "textDecoration" : checked3?"underline":"",
    "fontWeight" : checked1?"bold":"",
    "fontStyle" : checked2?"italic":"",
    "color" : color
  };
  let array= ["black","blue","red","green","yellow"];
  array=array.map(a=><ColorCard key={a} onClick={()=>setColor(a)} background={a}></ColorCard>
  );
  return (<ThemeProvider theme={theme}><Container>
      <ButtonGroup toggle className="mb-2">
        <ToggleButton type="checkbox" variant="primary" checked={checked1} value="1" onChange={(e) => setChecked1(e.currentTarget.checked)}>
        Bold
        </ToggleButton>
        <ToggleButton type="checkbox" variant="primary" checked={checked2} value="1" onChange={(e) => setChecked2(e.currentTarget.checked)}>
        Italic
        </ToggleButton>
        <ToggleButton type="checkbox" variant="primary" checked={checked3} value="1" onChange={(e) => setChecked3(e.currentTarget.checked)}>
        underline
        </ToggleButton>        </ButtonGroup>
    <NewFormControl />
      {array}
  </Container>
  </ThemeProvider>
  );
}

export default App;
