import * as React from "react";
// 
export default function Banner(props:any){
  return(
    <>
    <div style={{width:"100%" }}><img src={props._site.c_banner.url} alt="" /></div>
    </>
  )
}