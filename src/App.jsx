 import { useEffect, useState } from "react";
import {fetchHelper} from "./helpers/fetchHelper";

const App = ()  => { 

  const tipos = {
    artifacts:"artefactos",
    boss:"jefes",
    characters:"artefactos",
    consumables:"consumibles",
    domains:"dominios",
    elements:"elementos",
    enemies:"enemigos",
    materials:"materiales",
    nations: "naciones",
    weapons: "armas",
  };

  const [selects, setSelects] = useState({
    types: []

  });

const fetchTypes = async () => {
  const respuesta = await fetchHelper("https://api.genshin.dev/")
  const {types} = await respuesta.json()
  console.log({types})
  setSelects({...selects, types})
}



  useEffect(() => {
    fetchTypes().catch(console.error)
  
  }, []);
  

  return (

  <div className="container">
    <h1> Genshin impact dex</h1>  
  <hr/>
  <select>
    <option value="artifacts">seleccione el tipo de informacion</option>
   {
     selects.types.map((type) => (
<option value={type}> {tipos[type]}</option>
     
     )
     )
   }
  </select>
  </div>
  );
};

export default App;
