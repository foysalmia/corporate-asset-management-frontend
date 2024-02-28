import AssetTable from "@/components/AssetTable/AssetTable";
import Category from "@/components/Category/Category";
import RoundChart from "@/components/Charts/RoundChart";

const AssetHome = () => {
    return (
        <div className="mt-5">
            <div className="grid grid-cols-5 gap-8">
                <Category/>
                <RoundChart/>
            </div>
            <AssetTable/>
        </div>
    );
};

export default AssetHome;