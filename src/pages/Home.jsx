import Brands from "@/components/Brands/Brands";
import Features from "@/components/Features/Features";
import Footer from "@/components/Footer/Footer";
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
            <Footer/>
        </div>
    );
};

export default Home;