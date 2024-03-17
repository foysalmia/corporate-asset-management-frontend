/* eslint-disable react-hooks/exhaustive-deps */
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { format, formatDistanceToNow, isFuture } from "date-fns";
import { assetUrl } from "@/Utilies/Url";
import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom"
import Loader from "@/components/Loader/Loader";
import AssetDistributionHistory from "./AssetDistributionHistory";
import AssetDelete from "./AssetDelete";

const AssetDetail = () => {
    const {assetId} = useParams();
    const [asset,setAsset] = useState({});
    const accessToken = localStorage.getItem("accessToken");

    const BUY = "BUY";
    const WARRENTY = "WARRENTY";


    const dayCounter = (date,type) =>{
        if(date && type == BUY){
            const _date = date.split("-").map(date => parseInt(date));
            const result = formatDistanceToNow(new Date(_date[0], _date[1], _date[2])); 
            return `${result} old`;
        }else if(date && type == WARRENTY){
            const _date = date.split("-").map(date => parseInt(date));
            const hasWarrenty = isFuture(new Date(_date[0], _date[1], _date[2]));
            if(!hasWarrenty) return "No Warrenty";
            else{
                const result = formatDistanceToNow(new Date(_date[0], _date[1], _date[2]));
                return `${result} Warrenty`
            }
        }
        else{
            return "uncalculated";
        }
    }

    const dateFormater = (date) =>{
        if (date) {
            const _date = date.split("-").map(date => parseInt(date));
            return format(new Date(_date[0], _date[1], _date[2]), "PPP");
        } else {
            return "No date found";
        }
    }
    
    useEffect(()=>{
        fetch(assetUrl + `${assetId}`,{
            method:'GET',
            headers:{
                "Authorization":`JWT ${accessToken}`,
                "Content-Type":"application/json"
            }
        })
        .then(res => res.json())
        .then(data => setAsset(data))
    },[assetId])

    if(!asset.id){
        return <Loader/>;
    }

    return (
        <div className="mt-5">
            <h1 className="font-bold text-5xl text-gray-800">{asset?.name}</h1>
            <p className="mt-3 text-gray-600">{asset?.description}</p>

           <div className="flex justify-between items-center">
                <h1 className="my-2 font-semibold text-xl text-gray-600">Category: {asset.category?.name}</h1>
                <div className="flex justify-center items-center">
                    <AssetDelete assetId={asset.id} />
                    <Link to={`/profile/assets/edit/${assetId}`} state={{asset:asset}} className="ml-3 flex justify-around items-center px-3 py-2 bg-green-600 text-white rounded-md">
                        <FaRegEdit />Edit</Link>
                </div>
           </div>

            <div className="mt-5 grid grid-cols-3 gap-8">
                <div className="bg-gray-100 rounded-md border-2 px-8 py-5">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-[#6558F5]">Price</h3>
                        <RiMoneyDollarBoxFill size={30} color="#6558F5" />
                    </div>
                    <h1 className="font-bold text-3xl text-gray-700 mt-5">$ {asset.price}</h1>
                </div>
                <div className="bg-gray-100 rounded-md border-2 px-8 py-5">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-[#6558F5]">Buy Date</h3>
                        <BsCalendar2DateFill size={30} color="#6558F5" />
                    </div>
                    <h1 className="text-xs text-gray-700 ">{dateFormater(asset.buy_date)}</h1>
                    <h1 className="text-xl font-bold text-[#6558F5] mt-5 capitalize">{dayCounter(asset.buy_date,BUY)}</h1>
                </div>
                <div className="bg-gray-100 rounded-md border-2 px-8 py-5">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-[#6558F5]">Warrenty Date</h3>
                        <BsCalendar2DateFill size={30} color="#6558F5" />
                    </div>
                    <h1 className="text-xs text-gray-700 ">{dateFormater(asset.warranty)}</h1>
                    <h1 className="text-xl font-bold text-[#6558F5] mt-5 capitalize">{dayCounter(asset.warranty,WARRENTY)}</h1>
                </div>
            </div>
            <AssetDistributionHistory assetId={asset.id} />
        </div>
    );
};

export default AssetDetail;