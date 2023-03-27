import * as React from "react";


export default function Services(props:any){
    return(
        <>
        <h1 style={{margin:"28px"}}>Services Offered At This Store</h1>
       
        <div className="">{props.c_service1.map((res:any)=>{
            return(
                <>
                <div className="search-field"></div>
                
                <div style={{display:"block",minWidth:"33.33%",float:"left" ,padding:"15px 0px"}}>
                <div className="flex"><div style={{width:"80px" , height:"80px"}}><img src={res.photo.url} alt="" /></div>
                <div ><h2 style={{color:"#000080"}}>{res.cta.label}</h2>
                <div style={{width:"280px",lineHeight:"28px"}}>{res.text}</div></div></div>
                </div>
                </>
            )        })}</div>
        </>
    )
}