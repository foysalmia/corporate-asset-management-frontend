import { assetUrl } from "@/Utilies/Url";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import {useNavigate} from "react-router-dom";

const AssetDelete = ({assetId}) => {
    const accessToken = localStorage.getItem('accessToken');
    const navigate = useNavigate();

    const handleDelete = () =>{
        Swal.fire({
            title: "Are you sure to delete this asset?",
            showCancelButton: true,
            confirmButtonText: "Yes",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(assetUrl+assetId,{
                    method:"DELETE",
                    headers:{
                        "Authorization": `JWT ${accessToken}`,
                        "Content-Type": "application/json"
                    }
                }).then(res =>{
                    if(res.status == 204){
                        Swal.fire("Successfully Deleted","","success");
                        navigate("/profile/assets");
                    }
                } )
            } 
        });
    }

    return (
        <button onClick={handleDelete} className="bg-red-600 rounded-md text-white py-2 px-3 flex justify-between items-center hover:drop-shadow-md">
            <MdDelete size={20} /> Delete
        </button>
    );
};

export default AssetDelete;