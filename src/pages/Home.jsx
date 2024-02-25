import Brands from "@/components/Brands/Brands";
import Features from "@/components/Features/Features";
import Header from "@/components/Header/Header";
import HowWorks from "@/components/HowWorks/HowWorks";

const Home = () => {
    return (
        <div>
            <Header/>
            <Brands />
            <Features/>
            <HowWorks/>
        </div>
    );
};

export default Home;