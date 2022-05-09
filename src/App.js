import React, { useState, useEffect, useContext } from 'react';
import { getDay, getMonth } from './Util/Util';
import Mes from './Components/Mes';
import Dia from './Components/Dia';
import Sidebar from './Components/Sidebar';
import EncabezadoCalendario from './Components/EncabezadoCalendario';
import GlobalContext from './Context/GlobalContext';
import axios from 'axios';
import dayjs from 'dayjs';
import useActividades from './query-hooks/useActividades';
import Spinner from './Components/Spinner';
// import DetalleDia from './Components/DetalleDia';
//  let actividades = require('./Const/Actividades');
//  let usuario = require('./Const/Usuario');

function App() {
  console.log('APP');
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  //console.log(currenMonth)
  const {
    dayIndex,
    monthIndex,
    setIdUsuario,
    setUsuarios,
    setActividadesMes,
    usuarios,
    opcionVista,
    daySelected,
    colores
  } = useContext(GlobalContext);  
  useEffect(() => {
    setCurrentMonth(monthIndex)
  }, [monthIndex])
  //let data = []
  //console.log(usuarios)
  let arrIds = usuarios.map(x => x.id)
  let fechaIni = dayjs(getMonth(monthIndex)[0][0]).format("DD-MM-YY").toString()
  let fechaFin = dayjs(getMonth(monthIndex)[4][6]).format("DD-MM-YY").toString()
  let opcVista = opcionVista

  console.log(arrIds)
  console.log(fechaIni)
  console.log(fechaFin)
  console.log(opcVista)


  const {data,status} = useActividades(fechaIni,fechaFin,arrIds ? arrIds : [],opcVista)

  if (status === 'loading'){
    return <Spinner />
  }
  else if(status === 'error'){
    return <div>Error</div>
  }
  console.log(data)
  
  // if (data !== null){
  //   console.log(data.Actividades)
  //   if (data.Actividades == null){
  //     console.log(JSON.parse(data.Actividades))
  //   }
  // }

  // useEffect(() => {
  //   //console.log('ACTIVIDADES QUERY');
  //   setCurrentMonth(getMonth(monthIndex));
  //   let arrIds = usuarios.map(x => x.id)
  //   axios.post('frmCalendarioV2.aspx/ObtenerActividadesxTerceIdxFechaInixFechaFin', {FechaInicial:dayjs(getMonth(monthIndex)[0][0]).format("DD-MM-YY").toString(),FechaFinal:dayjs(getMonth(monthIndex)[4][6]).format("DD-MM-YY").toString(),ArrIds: arrIds ? arrIds : [],Tipo:opcionVista}, {
  //     headers: { 'Content-Type': 'application/json' }
  //   })
  //     .then((res) => {
  //       if (res.status === 200) {
  //         if (res.data.d !== undefined) {
  //           console.log(res.data.d)
  //           setActividadesMes(res.data.d)
  //           console.log(res.data.d)
  //         }
  //       }
  //     })
  //     .catch((error) => {
  //     })

  //   //setActividadesMes(actividades);
  //   //setCurrentMonth(getMonth(monthIndex));
  //   //console.log(actividades)
  // }, [dayIndex, monthIndex, setActividadesMes, usuarios,opcionVista]);

  return (
    <React.Fragment>
      {/* <div className='h-screen flex flex-col'>
        <EncabezadoCalendario />
        <div className='flex flex-1'>
          <Sidebar />

          {opcionVista == 1 ? (
            <Mes mes={currenMonth}  />
          ) : (
            usuarios
              .filter((lbl) => lbl.checked)
              .map((x) => (
                <React.Fragment>
                 <div className={`bg-${colores[x.num]}`}>{x.nombre}</div>  
                <div className='flex-1 grid grid-cols-1 grid-rows-24'>
                
                  <Dia day={daySelected} key={1} rowIdx={1} idUsuDia={x.id} />
                </div>
                </React.Fragment>
                
              ))
          )}
        </div>
      </div> */}
    </React.Fragment>
  );
}
export default App;
