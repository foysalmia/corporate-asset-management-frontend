import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { employeeUrl } from "@/Utilies/Url";
const EmployeeDelete = ({employeeId}) => {
    const accessToken = localStorage.getItem('accessToken');
    const navigate = useNavigate();

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure to delete this employee?",
            showCancelButton: true,
            confirmButtonText: "Yes",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(employeeUrl + employeeId, {
                    method: "DELETE",
                    headers: {
                        "Authorization": `JWT ${accessToken}`,
                        "Content-Type": "application/json"
                    }
                }).then(res => {
                    if (res.status == 204) {
                        Swal.fire("Successfully Deleted", "", "success");
                        navigate("/profile/employees");
                    }
                })
            }
        });
    };

    return (
        <button onClick={handleDelete} className="bg-red-600 rounded-md text-white py-2 px-3 flex justify-between items-center hover:drop-shadow-md">
            <MdDelete size={20} /> Delete
        </button>
    );
};

export default EmployeeDelete;