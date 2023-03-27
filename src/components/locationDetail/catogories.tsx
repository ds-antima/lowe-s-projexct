import * as React from "react"
export default function Catogories(props:any){
    return(
      <>
      <h1 style={{margin:"28px"}}>Your Store's Top Categories</h1>
      <div style={{display:"flex" ,gap:"136px" , height:"130px"}}>{props.c_cat1.map((res:any)=>{
        return(
            <>
            <div style={{width:"60px",height:"60px"}}><img src={res.photo.url} alt="" />
            <div>{res.text}</div></div>
            </>
        )
      })}</div>
      
      </>
    )
}