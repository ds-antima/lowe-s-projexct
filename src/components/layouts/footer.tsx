import * as React from "react";
// import "../../index.css";
// import logofooter from "../../images/logo-footer.svg";
// import facebook from "../../images/facebook.svg";
// import instagram from "../../images/instagram.svg";
// import twitter from "../../images/twitter.svg";
// import youtube from "../../images/youtube.svg";
// import printest from "../../images/printest.svg";
// import { cookieText, cookiesUrl } from "../../../sites-global/global"
// import CookieConsent from "react-cookie-consent";
// import { StaticData } from "../../../sites-global/staticData";
// import { useEffect, useState } from "react";
// import Link from "../commons/Link";

// const Footer = (props: any) => {
// 	const { footer } = props;
// 	// const [isNavVisible, setNavVisibility] =  useState(false);
// 	const [isSmallScreen, setIsSmallScreen] = useState(false);
// 	console.log(footer)
// 	useEffect(() => {
// 		const mediaQuery = window.matchMedia("(max-width: 1024px)");
// 		mediaQuery.addListener(handleMediaQueryChange);
// 		handleMediaQueryChange(mediaQuery);

// 		return () => {
// 			mediaQuery.removeListener(handleMediaQueryChange);
// 		};
// 	}, []);

// 	const handleMediaQueryChange = mediaQuery => {
// 		if (mediaQuery.matches) {
// 			setIsSmallScreen(true);
// 		} else {
// 			setIsSmallScreen(false);
// 		}
// 	};
// 	// if (typeof window !== "undefined") {
// 	// 	mediaQuery = window?.innerWidth;
// 	// }


// 	return (
// 		<>

// 			<footer className="site-footer">

// 				<div className="container">

// 					<div className="store-locator">
// 					<div className="company-logo mr-4">
// 							<img src={footer.c_matalan_footer_logo.url} alt="logo"/>
// 							</div>
// 						{footer.c_store_finder.map((storfinder: any) => {
// 							console.log(storfinder)
// 							return (
// 								<>
// 									<div className="store-inner">
// 										<img src={storfinder.icon.url} alt="store-finder" />
// 										<Link props={storfinder.cTA}/>

// 									</div>
// 								</>
// 							)
// 						})}


// 						<div className="store-inner flex flex-raw">
// 							<div>
// 							<img src={footer.c_fAQs.icon.url} alt="faq-icon" />

// 							<Link props={footer.c_fAQs.cTA} />
// 							</div>
// 							<div>

// 							<img src={footer.c_getAQuate.icon.url} alt="faq-icon" />

// 							<Link props={footer.c_getAQuate.cTA} />
// 							</div>
// 						</div>
						

						




// 					</div>
					

// 					<div className="link-sec-footer ">
// 					{footer.c_customer_services?
// 						<div className="footer-block">
// 							<h4 className="footer-block-title">{footer.c_customer_services.headerLinksHeading}</h4>
// 							<ul className="list-none">
// 								{footer.c_customer_services.headerLinks.map((customerService: any) => {
// 									return (<li>
// 											<Link props={customerService}/>
// 										</li>)
// 								})}
// 							</ul>
// 						</div>:''}
// 						{footer.c_about_matalan?
// 						<div className="footer-block">
// 							<h4 className="footer-block-title">{footer.c_about_matalan.headerLinksHeading}</h4>
// 							<ul className="list-none"><li>{footer.c_about_matalan.headerLinksHeading}</li>
// 								{footer.c_about_matalan.headerLinks.map((aboutMatalan: any) => {
// 									return (<li>
// 										<Link props={aboutMatalan}/>
// 										</li>)
// 								})}
// 							</ul>
// 						</div>:''}
// 						{footer.c_our_website?
// 						<div className="footer-block">
// 							<h4 className="footer-block-title">{footer.c_our_website.headerLinksHeading}</h4>
// 							<ul className="list-none">
// 								{footer.c_our_website.headerLinks.map((ourWebsite: any) => {
// 									return (<li>
// 										<Link props={ourWebsite}/>
// 									</li>)
// 								})}
// 							</ul>
// 						</div>:''}
// 						<div className="footer-block">
// 						<ul className="social-media-bx">
// 							{footer.c_socialIcons.map((icon: any) => {
// 								return (

// 									<>
// 										<li className=""> <a href={icon.cTA.link} target="_blank"><img src={icon.icon.url} height="20" alt="social" width="21" className="inline-block w-5 h-auto" /> </a> </li>
// 									</>
// 								)
// 							})}
// 						</ul>
// 						</div>

// 					</div>
// 					<div className="copyright-bx">
// 						<span className="text-xs flex-wrap" data-copyright="">
// 							{footer.c_footerDescription}</span>

						
// 					</div>

// 				</div>

// 			</footer>

// 			<CookieConsent
// 				buttonText={"Accept"}
// 				buttonStyle={{
// 					marginLeft: "100px",
// 				}}
// 			>
// 				<p>
// 					{cookieText}
// 					<a className="text-cookies-link" href={cookiesUrl}>
// 						{StaticData.cookie}
// 					</a>
// 					.
// 				</p>
// 			</CookieConsent>
// 		</>
// 	);
// };

// export default Footer;
// function handleMediaQueryChange(mediaQuery: MediaQueryList) {
// 	throw new Error("Function not implemented.");
// }
export default function Footer(props:any){
	return(
		<>
		
		<div className="flex" style={{width:"100%" ,gap:"200px" ,marginBottom:"115px" ,marginTop:"37px" , marginLeft:"20px" , padding:"30px"}}>{props._site.c_footer.map((res:any)=>{
			return(
				<>
				<div style={{width:"40px",height:"20px" }}><img style={{borderRadius:"70%"}} src={res.image.url} alt="" />
				<div style={{width:"111px"}}>{res.label.label}</div></div>
				</>
			)
		})}</div>
		<div style={{display:"flex"}}>
		<div style={{width: "45%" ,lineHeight:"27px" }}>{props._site.c_footer1?.heading}
		<div style={{color:"blue" }}>{props._site.c_footer1.title.map((res1:any)=>{
			return(
				<div> <a href={res1.link}>{res1.label}</a></div>
			)
		})}</div></div>
		<div style={{ width: "45%",lineHeight:"27px" }}>{props._site.c_footer2?.heading}
		<div style={{color:"blue" }}>{props._site.c_footer2.title.map((res2:any)=>{
			return(
				<div><div> <a href={res2.link}>{res2.label}</a></div></div>
			)
		})}</div></div>
		<div style={{ width: "45%",lineHeight:"27px" }}>{props._site.c_footer3?.heading}
		<div style={{color:"blue" }}>{props._site.c_footer3.title.map((res3:any)=>{
			return(
				<div><div> <a href={res3.link}>{res3.label}</a></div></div>
			)
		})}</div></div>
		<div>
		<div style={{ width: "45%"}}>{props._site.c_footer_4?.title}
		<div style={{display:"flex" }}>{props?._site?.c_footer_4.icon?.map((res4:any)=>{
			return(
				<div style={{width:"40px",height:"40px"}}><img src={res4.url} alt="" /></div>
			)
			
		})}</div></div>
		<div style={{ width: "45%",lineHeight:"27px" }}>{props._site.c_footer5?.heading}</div>
		<div style={{color:"blue" }}>{props?._site?.c_footer5.subtitle?.map((res5:any)=>{
			return(
				<div><div> <a href={res5.link}>{res5.label}</a></div></div>
				
			)
			
		})}</div>
       
		</div>

		</div>
		
		</>
	)
}

