import client1 from '../../assets/images/people1.png'
import client2 from '../../assets/images/people2.png'
import client3 from '../../assets/images/people3.png'
import Quote from '../../assets/icons/quote.svg'
import Testimonial from './Testimonial';
const Testimonials = () => {
    const TestimonialsData = [
        {
            id: 1,
            img: client1,
            name: 'Fluoride Treatment',
            Country: 'California',
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            id: 2,
            img: client2,
            name: 'Cavity Filling',
            Country: 'California',
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            id: 3,
            img: client3,
            name: 'Teeth Whitening',
            Country: 'California',
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        }
    ]
    return (
        <section className='mt-10'>
            <div className='flex justify-between p-2'>
                <div className='text-left'>
                    <h2 className='text-3xl font-medium text-sky-500 mt-2'>Testimonial</h2>
                    <h2 className='lg:text-2xl text-xl font-medium mt-4'>What Our Patients Says</h2>
                </div>
                <img src={Quote} className="lg:w-44 w-28 rounded-lg shadow-xl" />
            </div>
            <div className='flex justify-center'>
                <div className='grid gap-0 md:grid-cols-2 lg:grid-cols-3 mt-6 w-[1260px]'>
                    {
                        TestimonialsData.map(testimonialData => <Testimonial
                            key={testimonialData.id}
                            testimonialData={testimonialData}
                        ></Testimonial>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;