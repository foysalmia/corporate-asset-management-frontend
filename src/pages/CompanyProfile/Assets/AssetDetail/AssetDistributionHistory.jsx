/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import AssetDistHistRow from "./AssetDistHistRow";
import { assetDistHistUrl } from "@/Utilies/Url";

const AssetDistributionHistory = ({assetId}) => {
    const [history,setHistory] = useState([]);
    const accessToken = localStorage.getItem("accessToken");

    useEffect(()=>{
        fetch(assetDistHistUrl+assetId,{
            method:'GET',
            headers:{
                "Authorization":`JWT ${accessToken}`,
                "Content-Type":"application/json"
            }
        }).then(res => res.json())
        .then(data => setHistory(data))
    },[assetId])
    return (
        <div className="mt-5">
            <h1 className="font-semibold">Distribution History:</h1>
            <div className="mt-3 mb-5 pb-5">
                {
                    history.length ? history.map(data => <AssetDistHistRow data={data} key={data.id} />)
                    : "Asset does not used by any employee yet."
                }
            </div>
        </div>
    );
};

export default AssetDistributionHistory;