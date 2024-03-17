import { useParams, useLocation, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { employeeUrl } from "@/Utilies/Url";
import Loader from "@/components/Loader/Loader";

const EmployeeEdit = () => {
    const navigate = useNavigate();
    const { employeeId } = useParams();
    const location = useLocation();
    if (!location.state) {
        return <Loader />;
    }

    const { employee } = location.state;
    const accessToken = localStorage.getItem("accessToken");

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formData, setFormData] = useState({
        ...employee,
        company: employee.company.id
    });


    const handleEditSubmit = (e) => {
        e.preventDefault();
        fetch(employeeUrl + `${employeeId}/`, {
            method: "PUT",
            headers: {
                "Authorization": `JWT ${accessToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }).then(res => {
            if (res.status == 200) {
                Swal.fire("Employee Detail Updated Successfully", "", "success");
                navigate(`/profile/employees/${employeeId}`);
            }
        }).catch(error => {
            Swal.fire("An Error Occured", `${error}`, 'error');
            navigate(`/profile/employees/${employeeId}`);
        })
    }
    return (
        <div className="mt-10 w-1/2 mx-auto pb-10">
            <h1 className="text-center font-semibold text-4xl">Edit Employee Details</h1>
            <p className="text-xs my-2 text-center text-gray-500">Enter the details of your employee which you want to update.</p>

            <form onSubmit={handleEditSubmit} >
                <div className='mt-5'>
                    <Label htmlFor="name">Employee Name</Label>
                    <Input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter employee name here"
                    />
                </div>
                <div className='mt-2'>
                    <Label htmlFor="designation">Designation</Label>
                    <Input
                        type="text"
                        id="designation"
                        value={formData.designation}
                        onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                        placeholder="Enter employee's designation"
                    />
                </div>
                <div className='mt-2'>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                        type="text"
                        id="descripton"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Enter employee's description"
                    />
                </div>
                

                <div className="mt-2 flex justify-between items-center">
                    <div>
                        <Label htmlFor="join-date">Join Date</Label>
                        <Input
                            id="join-date"
                            placeholder="Enter Buy Date"
                            value={formData.join_date}
                            onChange={(e) => setFormData({ ...formData, join_date: e.target.value })}
                            className="p-2 w-full rounded-md border"
                            type="date"
                        />
                    </div>
                    <div className="w-full ml-3" >
                        <Label htmlFor="salary">Salary</Label>
                        <Input
                            type="number"
                            min={0}
                            id="salary"
                            value={formData.salary}
                            onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                            placeholder="Enter employee salary here"
                        />
                    </div>
                    
                </div>
                <Button className="mt-2 w-full bg-[#6558F5] hover:bg-[#372DA6] text-white" type="submit">Update Employee Details</Button>
            </form>
        </div>
)};

export default EmployeeEdit;