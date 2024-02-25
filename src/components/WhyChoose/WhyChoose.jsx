import WhyChooseImg from "../../assets/whychoose.png"
import Title from "../Title/Title";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const WhyChoose = () => {
    return (
        <div className="mt-11">
            <Title>Why Choose Us?</Title>
            <div className="container mt-8 grid grid-cols-2 gap-2">
                <div className="flex justify-center items-center">
                    <img src={WhyChooseImg} alt="why choose us image" />
                </div>
                <div className="my-auto">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Expert Support:</AccordionTrigger>
                            <AccordionContent>
                                Our dedicated support team is here to assist you every step of the way, ensuring a smooth implementation and ongoing success.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Scalable Solution:</AccordionTrigger>
                            <AccordionContent>
                                Whether you're a small startup or a large enterprise, our platform is designed to scale with your business needs.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Security & Compliance:</AccordionTrigger>
                            <AccordionContent>
                                Rest assured knowing that your data is protected with industry-leading security measures and compliance standards.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Innovative Technology:</AccordionTrigger>
                            <AccordionContent>
                                At AssetPulse, we're at the forefront of asset management technology. Our platform leverages cutting-edge innovations to provide you with the most advanced features and functionalities, ensuring you stay ahead of the curve in asset optimization.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>User-Centric Design: </AccordionTrigger>
                            <AccordionContent>
                                We understand the importance of a seamless user experience. That's why AssetPulse is built with a user-centric design approach, ensuring intuitive navigation and minimal learning curves for users of all skill levels. With us, managing your assets is not only efficient but also enjoyable.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>

            </div>
        </div>
    );
};

export default WhyChoose;