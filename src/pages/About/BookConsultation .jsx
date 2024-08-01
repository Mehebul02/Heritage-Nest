import { bookNow } from "../../assets/images";
import Container from "../../component/Container";
import SectionTitle from "../../component/SectionTitle";

const BookConsultation  = () => {
    return (
        <Container>
            
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:my-16">
                {/* text section  */}
                <div className="space-y-6">
                <SectionTitle title='Meet the Team For Book Consultation'/>
                    <h1 className="lg:w-[660px] text-xl lg:text-[40px] text-black font-montserrat font-bold lg:leading-[50px]">Meet the stewards of your heritage journey</h1>
                    <p className="text-[#6B7280]">each member an embodiment of expertise and warmth, dedicated to guiding you <br /> home, every step of the way.</p>
                    <button className="bg-primaryColor text-[18px] text-white font-bodyFont font-semibold px-4 py-2 rounded-lg">Book Consultation Now</button>

                </div>
                {/* image section  */}
                <div>
                    <img className="w-[384px] h-[304px] rounded-md" src={bookNow} alt="bookNow" />

                </div>
            </div>
        </Container>
    );
};

export default BookConsultation ;