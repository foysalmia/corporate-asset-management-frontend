/* eslint-disable react-hooks/exhaustive-deps */
import { usedAssetHistUrl } from "@/Utilies/Url";
import { useEffect, useState } from "react";
import UsedAssetHistRow from "./UsedAssetHistRow";

const UsedAssetHist = ({employeeId}) => {
    const [histories,setHistories] = useState([]);

    useEffect(()=>{
        fetch(usedAssetHistUrl+employeeId,{
            method: 'GET',
            headers: {
                "Authorization": `JWT ${localStorage.getItem("accessToken")}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(data => setHistories(data))
    },[]);

    return (
        <div className='mt-3'>
            <h2 className="font-bold text-xm">Used Devices</h2>
            <div className="mt-3">
                {
                    histories.length ? histories.map(history => <UsedAssetHistRow key={history.id} data={history} />)
                        : <h1 className="mt-5 text-xs">This employee did not used any asset yet.</h1>
                }
            </div>
        </div>
    );
};

export default UsedAssetHist;