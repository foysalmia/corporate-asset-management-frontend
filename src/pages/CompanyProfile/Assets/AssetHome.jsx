/* eslint-disable react-hooks/exhaustive-deps */
import { categoryUrl } from "@/Utilies/Url";
import AssetTable from "@/components/AssetTable/AssetTable";
import Category from "@/components/Category/Category";
import RoundChart from "@/components/Charts/RoundChart";
import { getAuth } from "@/components/Context/GetContext";
import Loader from "@/components/Loader/Loader";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const AssetHome = () => {
    const accessToken = localStorage.getItem('accessToken');
    const [category,setCategory] = useState({});
    const navigate = useNavigate();
    const {setUser} = getAuth();

    useEffect(()=>{
        fetch(categoryUrl,{
            method:'GET',
            headers:{
                'Authorization':`JWT ${accessToken}`,
                'Content-Type':'application/json',
            }
        })
        .then(res => {
            if (res.status == 401) {
                setUser({});
                navigate('/login');
            }
            return res.json();
        })
        .then(data => setCategory(data))
    },[])

    const categoryNames = Object.keys(category);
    const categoryValues = Object.values(category);

    if(!category){
        return <Loader/>;
    }

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