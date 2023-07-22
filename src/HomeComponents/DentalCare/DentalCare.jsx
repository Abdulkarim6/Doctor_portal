/* eslint-disable react/no-unescaped-entities */
import teethTreatment from '../../assets/images/treatment.jpg'
import Button from '../../ShareComponents/Button/Button';
const DentalCare = () => {
    return (
        <section>
            <div className="hero mt-8">
                <div className="hero-content flex-col lg:flex-row gap-6">
                    <img src={teethTreatment} className="lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className='text-left'>
                        <h1 className="text-3xl lg:text-4xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Button>Get Started</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DentalCare;