import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NewFormControl,ColorCard} from './styles'
import {Container,ButtonGroup,ToggleButton} from 'react-bootstrap';
let colors= ["black","blue","red","green","yellow"];

function App() {
  const [theme  ,setTheme]=useState([{bold:false,underline:false,italic:false,color:"black"}])

  const changeTheme = (key) => e => {
    const temp = theme[0];
    temp[key]=e.currentTarget.checked
    setTheme([temp])
  }
  const theme2 = {
    "textDecoration" : theme[0].underline?"underline":"",
    "fontWeight" : theme[0].bold?"bold":"",
    "fontStyle" : theme[0].italic?"italic":"",
    "color" : theme[0].color
  };
  let buttons = [];
  for(const key in theme[0]){
    if(key!=="color")
    buttons.push(<ToggleButton key={key} type="checkbox" variant="primary" checked={theme[0][key]} onChange={changeTheme(key)}>{key}</ToggleButton>)
  }
  let colorBox=colors.map(a=><ColorCard checked={a} key={a} onClick={changeTheme("color")} background={a}/>
  );
  return (
  <Container>
    <ButtonGroup toggle className="mb-2">{buttons}</ButtonGroup>
    <NewFormControl theme={theme2} />
    {colorBox}
  </Container>
  );
}
export default App;
