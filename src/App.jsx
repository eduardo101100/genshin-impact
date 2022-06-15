import { useEffect, useState } from "react";
import CustomSelect from "./components/CustomSelect";
import { fetchHelper } from "./helpers/fetchHelper";

const tipos = {
  artifacts: "Artefactos",
  boss: "Jefes",
  characters: "Personajes",
  consumables: "Consumibles",
  domains: "Dominios",
  elements: "Elementos",
  enemies: "Enemigos",
  materials: "Materiales",
  nations: "Naciones",
  weapons: "Armas",
};

const App = () => {
  const initialSelected = {
    artifacts: false,
    boss: false,
    characters: false,
    consumables: false,
    domains: false,
    elements: false,
    enemies: false,
    materials: false,
    nations: false,
    weapons: false,
  };
  const [selects, setSelects] = useState({
    types: [],
    isSelected: {
      ...initialSelected,
    },
    selected: {},
  });

  const fetchTypes = async (item, subItem) => {
    let url = "https://api.genshin.dev/";
    if (item !== "types"){
      url = `https://api.genshin.dev/${item}`;
     }
     if (subItem){
       url = `https://api.genshin.dev/${item}/${subItem}`;
     }

<<<<<<< HEAD
    const respuestaJson = await fetchHelper(url);
    const respuesta = await respuestaJson.json();
    
     if(subItem) {
       setSelects({...selects, selected: respuesta})
     }else{
      if (item === "types") {
        setSelects({ ...selects, [item]: respuesta[item] });
      } else {
        setSelects({
          ...selects,
          [item]: respuesta,
          isSelected: { ...initialSelected, [item]: true },
        });
      }
     }

   
    console.log(selects);
=======
    setSelectets({types: respuesta[item] });
  }else{
    setSelectets({types: selects.types, [item]: respuesta});
>>>>>>> fc3ed89551951cb42d2895a6730f3e3b934b8fa8
  };

  useEffect(() => {
    fetchTypes("types").catch(console.error);
  }, []);

  const handleChangeType = ({ target }) => {
    fetchTypes (target.value).catch(console.error);
  };

 
  return (
<<<<<<< HEAD
    <div className="container">
      <h1>Genshin Impact Dex</h1> 
      <hr />
      <select name="types" onChange={handleChangeType}>
        <option value="">Seleccione el tipo de informacion</option>
        {selects.types.map((type) => (
          <option value={type} key={type}>
            {tipos[type]}
          </option>
        ))}
=======

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
>>>>>>> fc3ed89551951cb42d2895a6730f3e3b934b8fa8
      </select>
      {selects.isSelected.artifacts && (
        <CustomSelect
          name="artifacts"
          label="Seleccione un set de artefactos"
          itemArray={selects.artifacts}
          fetchTypes={fetchTypes}
        />
      )}
      {selects.isSelected.boss && (
        <CustomSelect
          name="boss"
          label="Seleccione un jefe"
          itemArray={selects.boss}
          fetchTypes={fetchTypes}
        />
      )}
      {selects.isSelected.characters && (
        <CustomSelect
          name="characters"
          label="Seleccione un personaje"
          itemArray={selects.characters}
          fetchTypes={fetchTypes}
        />
      )}
      {selects.isSelected.consumables && (
        <CustomSelect
          name="consumables"
          label="Seleccione un consumible"
          itemArray={selects.consumables}
          fetchTypes={fetchTypes}
        />
      )}
      {selects.isSelected.domains && (
        <CustomSelect
          name="domains"
          label="Seleccione un dominio"
          itemArray={selects.domains}
          fetchTypes={fetchTypes}
        />
      )}
        {selects.isSelected.elements && (
        <CustomSelect
          name="elements"
          label="Seleccione un elemento"
          itemArray={selects.elements}
          fetchTypes={fetchTypes}
        />
      )}
        {selects.isSelected.enemies && (
        <CustomSelect
          name="enemies"
          label="Seleccione un enemigo"
          itemArray={selects.enemies}
          fetchTypes={fetchTypes}
        />
      )}
        {selects.isSelected.materials && (
        <CustomSelect
          name="materials"
          label="Seleccione un material"
          itemArray={selects.materials}
          fetchTypes={fetchTypes}
        />
      )}
       {selects.isSelected.nations && (
        <CustomSelect
          name="nations"
          label="Seleccione una nacion"
          itemArray={selects.nations}
          fetchTypes={fetchTypes}
        />
      )}
       {selects.isSelected.weapons && (
        <CustomSelect
          name="weapons"
          label="Seleccione una arma"
          itemArray={selects.weapons}
          fetchTypes={fetchTypes}
        />
      )}
      <hr/>
      <div>
       
        {Object.entries(selects.selected).length !== 0 && 
         Object.entries(selects.selected).map((item) => (
          <h4>{`${item[0]}: ${item[1]}`}</h4>
        ))}
      </div>
    </div>
  );
};

export default App;
