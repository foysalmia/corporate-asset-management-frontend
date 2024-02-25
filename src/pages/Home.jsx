import Brands from "@/components/Brands/Brands";
import Features from "@/components/Features/Features";
import Header from "@/components/Header/Header";

const Home = () => {
    return (
        <div>
            <Header/>
            <Brands />
            <Features/>
        </div>
    );
};

export default Home;