import {useParams,useLocation,useNavigate} from "react-router-dom"
import Swal from 'sweetalert2';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { assetUrl } from "@/Utilies/Url";
import Loader from "@/components/Loader/Loader";

const AssetEdit = () => {
    const navigate = useNavigate();
    const {assetId} = useParams();
    const location = useLocation();
    if(!location.state){
        return <Loader/>;
    }

    const {asset} = location.state;
    const accessToken = localStorage.getItem("accessToken");

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formData,setFormData] = useState({
        ...asset,
        category: asset.category.id,
        company: asset.company.id
    });


    const handleEditSubmit = (e) =>{
        e.preventDefault();
        fetch(assetUrl + `${assetId}/`,{
            method:"PUT",
            headers:{
                "Authorization": `JWT ${accessToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }).then(res =>{
            if(res.status==200){
                Swal.fire("Asset Detail Updated Successfully","","success");
                navigate(`/profile/assets/${assetId}`);
            }
        }).catch(error =>{
            Swal.fire("An Error Occured",`${error}`,'error');
            navigate(`/profile/assets/${assetId}`);
        })
    }
    return (
        <div className="mt-10 w-1/2 mx-auto pb-10">
            <h1 className="text-center font-semibold text-4xl">Edit Asset Details</h1>
            <p className="text-xs my-2 text-center text-gray-500">Enter the details of your asset which you want to update.</p>

            <form onSubmit={handleEditSubmit} >
                <div className='mt-5'>
                    <Label htmlFor="name">Asset Name</Label>
                    <Input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name:e.target.value })}
                        placeholder="Enter asset name here"
                    />
                </div>
                <div className='mt-2'>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                        type="text"
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Enter asset's description"
                    />
                </div>
                <div className="mt-2">
                    <Label htmlFor="price">Price</Label>
                    <Input
                        type="number"
                        min={0}
                        id="price"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        placeholder="Enter asset Price here"
                    />
                </div>
                
                <div className="mt-2 flex justify-between items-center">
                    <div>
                        <Label htmlFor="buy-date">Buy Date</Label>
                        <Input
                            id="buy-date"
                            placeholder="Enter Buy Date"
                            value = {formData.buy_date}
                            onChange={(e) => setFormData({ ...formData, buy_date: e.target.value })}
                            className="p-2 w-full rounded-md border"
                            type="date"
                        />
                    </div>
                    <div>
                        <Label htmlFor="warrenty-date">Warrenty Date</Label>
                        <Input
                            id = "warrenty-date"
                            placeholder="Enter Warrenty Date"
                            value={formData.warranty}
                            onChange={(e) => setFormData({ ...formData, warranty: e.target.value })}
                            className="p-2 w-full border rounded-md ml-3"
                            type="date"
                        />
                    </div>
                </div>
                <Button className="mt-2 w-full bg-[#6558F5] hover:bg-[#372DA6] text-white" type="submit">Update Asset Details</Button>
            </form>
        </div>
    );
};

export default AssetEdit;