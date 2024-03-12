import { categoryUrl } from "@/Utilies/Url";
import AssetTable from "@/components/AssetTable/AssetTable";
import Category from "@/components/Category/Category";
import RoundChart from "@/components/Charts/RoundChart";
import { useEffect, useState } from "react";

const AssetHome = () => {
    const accessToken = localStorage.getItem('accessToken');
    const [category,setCategory] = useState({});

    useEffect(()=>{
        fetch(categoryUrl,{
            method:'GET',
            headers:{
                'Authorization':`JWT ${accessToken}`,
                'Content-Type':'application/json',
            }
        })
        .then(res => res.json())
        .then(data => setCategory(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const categoryNames = Object.keys(category);
    const categoryValues = Object.values(category);

    return (
        <div className="mt-5">
            <div className="grid grid-cols-5 gap-8">
                <Category data={category}/>
                <RoundChart name={categoryNames} count={categoryValues} />
            </div>
            <AssetTable/>
        </div>
    );
};

export default AssetHome;