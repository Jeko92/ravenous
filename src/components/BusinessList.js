import React from "react";
import Business from "./Business";

export default function BusinessList(){
    //let businesList = [];
    return(
        <div className="BusinessList">{
            this.props.businesses.map(
                (business) => {
                    return <Business key={business.id} business={business}/>
                }
            )
        }</div>
    )
}