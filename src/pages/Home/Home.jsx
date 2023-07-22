import MakeAppointment from "../../HomeComponents/MakeAppointment/MakeAppointment";
import Banner from "../../HomeComponents/Banner/Banner";
import Contuct from "../../HomeComponents/Contuct/Contuct";
import DentalCare from "../../HomeComponents/DentalCare/DentalCare";
import InfoCards from "../../HomeComponents/Info/InfoCards";
import Services from "../../HomeComponents/Services/Services";
import Testimonials from "../../HomeComponents/Testimonial/Testimonials";

const Home = () => {
    return (
        <section>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Contuct></Contuct>
        </section>
    );
};

export default Home;