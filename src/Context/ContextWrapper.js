import React, {
    useState,useEffect,useMemo
  } from "react";
  import GlobalContext from "./GlobalContext";
  import dayjs from "dayjs"; 
  import axios from 'axios'
  //let usuario = require('../Const/Usuario');

  export default function ContextWrapper(props) {
    const [monthIndex, setMonthIndex] = useState(dayjs().locale("es").month());
    const [dayIndex, setDayIndex] = useState(dayjs().locale("es").$D);
    const [opcionVista, setOpcionVista] = useState(1);

    const [idUsuario, setIdUsuario] = useState(null);
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
    const [daySelected, setDaySelected] = useState(dayjs());
    const [usuarios, setUsuarios] = useState(null);
    const [ActividadesMes, setActividadesMes] = useState([]); 
    const [colores, setColores] = useState(['pink-500','red-500','purple-600','deep-purple-600','indigo-600','blue-600','cyan-600','teal-600','green-600','lime-600',
    'yellow-600','orange-600','brown-500','grey-500','blue-grey-600']);   


    useEffect(() => {
    //console.log('USUARIO LOGIN')
    axios
    //.get('http://localhost:3003/usuario')    
    .post('frmCalendarioV2.aspx/ObtenerUsuario', {}, {
      headers: { 'Content-Type': 'application/json' }
    }).then((res) => {
        if (res.status === 200) {
          if (res.data.d !== undefined) {            
            setIdUsuario(res.data.d.id)
            setUsuarios([{id:res.data.d.id,nombre:res.data.d.nombre,checked:true,num:0}])
          }
        }
      }).catch(() => {
        alert('Ha ocurrido un error')
      })    
  }, []);

    //116246
//116356.

    useEffect(() => {
      if (smallCalendarMonth !== null) {
        setMonthIndex(smallCalendarMonth);      
      }
    }, [smallCalendarMonth]);   

    // const filtrarActividades = useMemo(() => {     
    //   //return ActividadesMes
    //   // console.log(ActividadesMes)
    //   return ActividadesMes ? ActividadesMes.filter((evt) =>
    //     usuarios
    //       .filter((lbl) => lbl.checked)
    //       .map((lbl) => lbl.id)
    //       .includes(evt.TERCERECURSOCTROLID )
    //   ):[]
    // }, [ActividadesMes, usuarios]);

    function updateUsuario(usu) {
      setUsuarios(
        usuarios.map((lbl) => (lbl.id === usu.id ? usu : lbl))
      );    
    }

    return (
      <GlobalContext.Provider value={{
        monthIndex,
        setMonthIndex,
        dayIndex,
        setDayIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
        idUsuario,
        setIdUsuario,
        usuarios,
        setUsuarios,
        updateUsuario,
        ActividadesMes,
        setActividadesMes,        
        setOpcionVista,
        opcionVista,
        colores
        }}>
        {props.children}
      </GlobalContext.Provider>
    );
  }
  