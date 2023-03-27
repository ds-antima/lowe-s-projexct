import * as React from "react";
export default function About(props:any){
  return(
    <>
    
    <div className="flex">
    <div style={{padding:"56px",lineHeight:"2.5rem",fontSize:"1.3rem"}}>{props.c_about.description}</div>
    <div style={{padding:"61px",}}><h2> {props.c_about.heading}</h2>
    <div style={{fontSize:"1.3rem"}}>{props.c_about.cta.map((res:any)=>{
  return(
    <>
    <div>{res.label}</div>
    </>
  )
})}</div> </div></div>
    </>
  )
}
 