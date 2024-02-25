import Brands from "@/components/Brands/Brands";
import Features from "@/components/Features/Features";
import Header from "@/components/Header/Header";
import HowWorks from "@/components/HowWorks/HowWorks";
import WhyChoose from "@/components/WhyChoose/WhyChoose";

const Home = () => {
    return (
        <div>
            <Header/>
            <Brands />
            <Features/>
            <HowWorks/>
            <WhyChoose/>
        </div>
    );
};

export default Home;