const Batch = ({children}) => {
    return (
        <div className="w-40 h-[180px] bg-[#6558F5] rounded-b-[100%] flex justify-center items-center">
            <h1 className="text-white text-6xl font-bold">{children} </h1>
        </div>
    );
};

export default Batch;