import { useQuery } from 'react-query'
import axios from 'axios'

export const fetchActividades = (vFechaInicial,vFechaFinal,vArrIds,vOpcionVista) =>   
     axios
     .post('frmCalendarioV2.aspx/ObtenerActividadesxTerceIdxFechaInixFechaFin', {FechaInicial:vFechaInicial,FechaFinal:vFechaFinal,ArrIds:vArrIds,Tipo:vOpcionVista}, {
       headers: { 'Content-Type': 'application/json' }
     })
    // .get('http://localhost:3003/actividades')
    .then((res) => res.data)

export default function useActividades() {
  return useQuery(['actividades'], fetchActividades)
}
