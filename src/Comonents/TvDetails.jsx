import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Details from './Details';
import Cast from './Cast';
import Row from '../Row';
import Seasons from './Seasons';



function TvDetails() {
  const imgsrc="https://image.tmdb.org/t/p/original";
    const {id}=useParams();
    const obj= useLocation();
    const mediatype=obj.state.mtype;
    const details=obj.state.data;
    const recommandationsUrl=`/${mediatype}/${details.id}/similar?api_key=e3ac0b161ed609f338ee40d5c30ed768`;
  return (
    <>
    <Details details={details}/>
    <Cast mtype={mediatype} mid={details.id}/>
    <Seasons  mid={details.id}/>
    <Row title={"Recommandations"} fetchUrl={recommandationsUrl} 
        mediatype={"tv"} isrecommandations={true} />
    </>
  )
}

export default TvDetails
