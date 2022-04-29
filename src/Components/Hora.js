import React,{useContext} from "react";
import GlobalContext from "../Context/GlobalContext";
import ReactTooltip from 'react-tooltip';

function Hora({hora,jornada,eventos,idUsuDia}) {
    const {
        idUsuario       
      } = useContext(GlobalContext); 

    function ObtenerClaseColor(evt){  
        let claseColor = 'colorAzul'
        if (evt.ESTADO_FLUJOTRABAJO === 3){
          claseColor = 'colorVerde'
        }
        else if(evt.USUARIOSID_FLUJOTRABAJO != idUsuario && evt.ESTADO_FLUJOTRABAJO === 1){
          claseColor = 'colorAzulClaro'
        }
        else if(evt.USUARIOSID_FLUJOTRABAJO === idUsuario && evt.ESTADO_FLUJOTRABAJO === 1){
          claseColor = 'colorAzul'
        }
        return claseColor
      }

  return (
    // <div>{hora } {jornada}</div>
    
    <div className=" border border-gray-200 flex flex-col ">
      <div>{hora } {jornada}</div>
      <div
        className="flex-1 cursor-pointer"       
      >
        {eventos.map((evt, idx) => (      
          
          <div     
              data-for="custom-color"
              data-tip={evt.ASUNTO_FLUJOTRABAJO }
            key={idx}
            // onClick={() => (window.open('../../FlujodeTrabajo/Formularios/frmCrearActividades.aspx?Formulario=frmCreaActividades&ID='+ evt.FLUJOTRABAJOID_FLUJOTRABAJO, '_blank'))}
            onClick={() => (window.location.href = `../../FlujodeTrabajo/Formularios/frmCrearActividades.aspx?Formulario=frmCreaActividades&ID=${evt.FLUJOTRABAJOID_FLUJOTRABAJO}` , '_blank')}
            
            className={`${ObtenerClaseColor(evt)} p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate border-2 border-white-500 w-80 `}
            style={{zIndex:idx,position:"absolute",left:350 + idx*20,height:(idx+1) * 80}}
            
          >       
           <ReactTooltip
                  id="custom-color"
                  className="custom-color"
                  place="right"
                  border
                  textColor="#5F4B8BFF"
                  backgroundColor="#E69A8DFF"
                  borderColor="darkgreen"
                  arrowColor="red"
                />
              { evt.FLUJOTRABAJOID_FLUJOTRABAJO.toLocaleString()} - {
              
              }
          </div>
         
        ))}
      </div>
    </div>
    
  )
}

export default Hora