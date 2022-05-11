import { useQuery } from 'react-query';
import axios from 'axios';

export const fetchActividades = (
  FechaInicial,
  FechaFinal,
  ArrIds,
  OpcionVista
) =>
  axios
    .post(
      'frmCalendarioV2.aspx/ObtenerActividadesxTerceIdxFechaInixFechaFin',
      {
        FechaInicial: FechaInicial,
        FechaFinal: FechaFinal,
        ArrIds: ArrIds,
        Tipo: OpcionVista,
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )
    // .get('http://localhost:3003/actividades')
    .then((res) => res.data);

export default function useActividades(FechaInicial,FechaFinal,ArrIds,OpcionVista) {
  return useQuery(['actividades'],() => fetchActividades(FechaInicial,FechaFinal,ArrIds,OpcionVista));
}
