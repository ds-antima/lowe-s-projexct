 import * as React from "react";
// import Cta from "../commons/cta";

//   type Link = {
//     label: string;
//     url: string;
//   };

//   const links: Link[] = [
//     {
//       label: "Home",
//       url: "/",
//     },
//     {
//       label: "About",
//       url: "/about",
//     },
//     {
//       label: "Menu",
//       url: "/menu.html",
//     },
//     {
//       label: "Locator",
//       url: "/locator",
//     }
//   ];

//   const Header = () => {
//     const linkDoms = links.map((link) => (
//       <div key={link.label}>
//         <a href={link.url} >
//           {link.label}
//         </a>
//       </div>
//     ));

//   return (
//     <>
//       <div className="centered-container">
//         <nav className="py-3 flex items-center justify-between">
//           <img
//               src="https://a.mktgcdn.com/p/8esDUBrhKJnkaVztLihLsC3quv_5BjLFG9L6MJ0adcs/150x150.png">
//             <div className="flex gap-x-10 text-lg font-semibold">{linkDoms}</div>
//           <div className="hidden space-x-5 sm:block">
//             <Cta buttonText="Order Pickup" url="#" style="primary-cta"></Cta>
//             <Cta buttonText="Order Delivery" url="#" style="secondary-cta"></Cta>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Header;

export default function Header1(props:any){
    return(
        <>
        <div style={{display:"flex",width:"100%"}}>
		
       <div style={{display:"flex",width:"80",marginRight:"373px",gap:"59px"}}>{props._site.c_header1.cta.map((res:any)=>{
        return(
            <>
            <div style={{display:"flex"}}>{res.label}</div>
            
            </>
           
        )
       })}</div>
        <div style={{width:"70px",height:"70px",marginRight:"376px"}}><img src={props._site.c_header1.logo.url} alt="" /></div>
        <div style={{display:"flex" ,gap:"59px"}}>{props._site.c_header1.cta1.map((res1:any)=>{
                return(
                    <>
                    <div >{res1.label}</div>
                    </>
                )
            })}</div> 

        </div>
        <div>
        </div>
        <br />
        <div style={{width:"100%",backgroundColor:"#000080",display:"flex",height:"100px"}}>
        <div style={{display:"flex" ,width:"50%", marginRight:"646px" ,padding:"40px"}}>{props?._site?.c_headr_le?.map((res2:any)=>{
            return(
                <div style={{display:"flex" , color:"white",width:"50%"}}>{res2.heading.label}</div>
            )
        })}</div>
        <div style={{display:"flex"}}> {props._site.c_header0.map((res4:any)=>{
            return(
                <div style={{display:"flex" , height:"20px" ,width:"20px"}}>
                <a>
                 
                 <img src={res4.photo.url}/> 
                 
                </a>
              </div>
            )
        })}</div>
        </div>


        </>


    )
   
}
