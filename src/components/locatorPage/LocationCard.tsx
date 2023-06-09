import * as React from "react";
import { useEffect, useRef, useState } from 'react';
import { CardComponent } from "@yext/search-ui-react";
import { Location } from "../../types/search/locations";
import GetDirection from "../commons/GetDirection";
import redmapimage from "../../images/red-map.svg";
import timesvg from "../../images/watch-icn.svg"
import Address from "../commons/Address";
import OpenClose from "../commons/openClose";
import { StaticData } from "../../../sites-global/staticData";
import { Link } from "@yext/pages/components";
import Hours from "../commons/hours";
import { Openclose, mobilesvg, View_Store } from "../../../sites-global/global";
import Phonesvg from "../../images/phone.svg";
import email from "../../images/email.png";
import Model from "../locationDetail/Model";
import holiday from "../../images/holiday.jpg";

const metersToMiles = (meters: number) => {
  const miles = meters * 0.000621371;
  return miles.toFixed(2);
}
let array = [];



const LocationCard: CardComponent<Location> = ({result}) => {
  const [timeStatus, setTimeStatus] = useState("");
  const onOpenHide = () => {
    if (timeStatus == "") {
      setTimeStatus("active");
    } else {
      setTimeStatus("");
    }
  }

  let url = "";
  const[hoursopen,setHoursopen]=React.useState(false);

function opentime(e: any) {
  //console.log(e.target);
  var closethis = e.target.closest(".lp-param-results");
  if (closethis.querySelector('.storelocation-openCloseTime').classList.contains("hidden")) {
    closethis.querySelector('.storelocation-openCloseTime').classList.remove("hidden")
    setHoursopen(true);
  }
  else {
    closethis.querySelector('.storelocation-openCloseTime').classList.add("hidden")
    setHoursopen(false);
  }
}

const { address, hours, additionalHoursText, timezone } = result.rawData;
    var name: any = result.rawData.name?.toLowerCase();
    var country: any =result.rawData.address.countryCode?.toLocaleLowerCase();
    var initialcountry: any = country.toString();
    var finalcountry: any = initialcountry.replaceAll(" ", "-");
    var region: any = result.rawData.address.region?.toLowerCase();
    var initialregion: any = region.toString();
    var finalregion: any = initialregion.replaceAll(" ", "-");
    var city: any = result.rawData.address.city?.toLowerCase();
    var initialrcity: any = city.toString();
    var finalcity: any = initialrcity.replaceAll(" ", "-");
    var string: any = name.toString();
    let result1: any = string.replaceAll(" ", "-");
  
    let url1:any = finalcountry+"/"+finalregion+"/"+finalcity+"/"+result.rawData.slug+".html";
  
    if (!result.rawData.slug) {
      url= `${url1}`;
    } else {
      url= `${url1}`;
    }
  
  return (
    <div className={`location result-list-inner-${result.id} result`} id={`result-${result.id}`} key={`result-${result.rawData.id}`}>
      <div className="result-inner ">
        <div className="center-column">
          <div className="lp-param-results lp-subparam-hours">
            <div className="location-name-miles icon-row">
              <div className="icon text-black relative" > <img className=" " src={redmapimage} width="20" height="20"
                alt={''} /><span className="map-count">D</span></div>
              <h2><Link className="inline-block notHighlight"
               data-ya-track={`viewDetail -${result.rawData.name}`}
               eventName={`viewDetail -${result.rawData.name}`}
               rel="noopener noreferrer"
               href={`${url}`}>{result.rawData.name}
              </Link></h2>
              {typeof result.distance != "undefined" ?
                <div className="distance">
                  {metersToMiles(result.distance)} <span>{StaticData.miles}</span>
                </div>
                : ''}
            </div>

            
            <div className="icon-row content-col address-with-availablity notHighlight">
              <Address address={address} />
             


                   <div>
                    {/* this section is holiday house in loaction card */}
                    {/* <Model name={StaticData.Holdiay}
                    holidayHours={result.rawData.hours?.holidayHours}/> */}
                      <div className="open-close ">
                
                <div className="hours-sec onhighLight">
                  <div className="OpenCloseStatus ">
                    <div className="hours-labels">
                      <span className="icon"></span>
                      <div className="flex" >
                        
                        <OpenClose
                          timezone={timezone}
                          hours={hours}
                          deliveryHours={hours}
                        ></OpenClose>
                        <button> <svg onClick={onOpenHide} className="openclose" xmlns="http://www.w3.org/2000/svg" width="19.585" height="7.793" viewBox="0 0 9.585 4.793">
                          <path id="hrd-drop" d="M9,13.5l4.793,4.793L18.585,13.5Z" transform="translate(-9 -13.5)" fill="#02a6db"></path>
                        </svg></button>
                      </div>

                    </div>
                    <div className={timeStatus + " daylist"} >
                    
                      <Hours key={result.rawData.id} hours={hours} additionalHoursText={additionalHoursText} /></div>
                  </div>

                </div>
              </div>

                   </div>

            </div>

            </div>
         
             <div className="button-bx" >
              <Link  type="button" href={`${url}`} className=" btn notHighlight "
              data-ya-track={`viewStore -${result.rawData.name}`}
              eventName={`viewStore -${result.rawData.name}`}
              rel="noopener noreferrer" style={{backgroundColor:"#000080"}}
              >
                {/* <div dangerouslySetInnerHTML={{__html: View_Store}}/> */}
                {StaticData.StoreDetailbtn}
              </Link>
              {result.rawData.displayCoordinate ?
                <GetDirection buttonText={StaticData.getDirection} address={address} latitude={result.rawData.displayCoordinate?.latitude} longitude={result.rawData.displayCoordinate?.longitude} />
                : <GetDirection buttonText={StaticData.getDirection} address={address} latitude={result.rawData.yextDisplayCoordinate?.latitude} longitude={result.rawData.yextDisplayCoordinate?.longitude} />}
            </div>
          
         

          </div>

        </div>
      </div>
    // </div>

  );

}

export default LocationCard;