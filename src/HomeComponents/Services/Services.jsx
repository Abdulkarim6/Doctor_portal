import Fluoride from '../../assets/images/fluoride.png'
import Cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            icon: Fluoride,
            name: 'Fluoride Treatment',
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 2,
            icon: Cavity,
            name: 'Cavity Filling',
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 3,
            icon: whitening,
            name: 'Teeth Whitening',
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }
    ]

    return (
        <section className='mt-8'>
            <h2 className='text-2xl font-medium text-sky-500 mb-6'>Services We Provide</h2>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 m-2'>
            {
                servicesData.map(serviceData => <Service
                    key={serviceData.id}
                    serviceData={serviceData}
                ></Service>)
            }
            </div>
        </section>
    );
};

export default Services;