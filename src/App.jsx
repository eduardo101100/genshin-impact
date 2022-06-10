 import { useEffect, useState } from "react";
import {fetchHelper} from "./helpers/fetchHelper";

const tipos = {
  artifacts:"artefactos",
  boss:"jefes",
  characters:"personajes",
  consumables:"consumibles",
  domains:"dominios",
  elements:"elementos",
  enemies:"enemigos",
  materials:"materiales",
  nations: "naciones",
  weapons: "armas",
};

const App = ()  => { 

  const [selects, setSelectets] = useState({
    types: [],

  });
//se hara la siguiente funcion generica para cualquier llamada
const fetchTypes = async (url, item) => {
  const respuestaJson = await fetchHelper(url);
  const respuesta = await respuestaJson.json();

  if (item === "types"){

    setSelectets({...selects, [item]: respuesta[item] });
  }else{
    setSelectets({...selects, [item]: respuesta});
  };
  
  console.log (selects);
  
};

useEffect(() => {
  
      fetchTypes("https://api.genshin.dev/", "types").catch(console.error);
    
    }, []);
  
    
  
  const handleChangeType =({target}) => {
    fetchTypes(`https://api.genshin.dev/${target.value}`,target.value);
  };
  

  return (

  <div className="container">
    <h1> Genshin impact dev</h1>  
  <hr/>
  <select onChange={handleChangeType}>
    <option value="">
      seleccione el tipo de informacion</option>
   {
     selects.types.map((type) => (
<option value={type} key={type}>
   {tipos[type]}
   </option>
     ))}
  </select>
  
  {
    selects.artifacts && (
      <select name="artifacts">
        {
          selects.artifacts.map((artefacts)=>(
            <option value={artefacts} key= {artefacts}>
              {artefacts}
            </option>
          )
          )
        }

      </select>
    )
  }
  {
    selects.boss && (
      <select name="boss">
        {
          selects.boss.map((jefe)=>(
            <option value={jefe} key= {jefe}>
              {jefe}
            </option>
          )
          )
        }

      </select>
    )
  }
  {
    selects.characters && (
      <select name="characters">
        {
          selects.characters.map((personaje)=>(
            <option value={personaje} key= {personaje}>
              {personaje}
            </option>
          )
          )
        }

      </select>
    )
  }
  {
    selects.materials && (
      <select name="materials">
        {
          selects.materials.map((material)=>(
            <option value={material} key= {material}>
              {material}
            </option>
          )
          )
        }

      </select>
    )
  }
  </div>
  );
};

export default App;
