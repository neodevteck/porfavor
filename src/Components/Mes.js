import React ,{useContext} from "react";
import Dia from "./Dia";
export default function Month({ currenMonth,data }) {  
  // console.log('WTF')
  // console.log(currenMonth)
  // console.log('WTF')


  // data.d.map( (x) =>{
  //   console.log(x.Actividades)
  // })
  
  // if (data){
  //   if (data.d !== undefined){
  //       let json = JSON.parse(data.d.Actividades)
  //       console.log(json)
  //   }
  // }

  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5 h-100vw">      
      {/* {mes.map((row, i) => (               
        <React.Fragment key={i}>
          {row.map((day, idx) => (      
          <Dia day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))} */}
      {data.d.map((x) =>(
        //{console.log(x)}
        <div> {x.Fecha} </div>
      ))}
    </div>
  );
}