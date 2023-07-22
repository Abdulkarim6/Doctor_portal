import clock from '../../assets/icons/clock.svg'
import location from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import Infocard from './infocard';

const InfoCards = () => {
    const infocards = [
        {
            id: 1,
            icon: clock,
            name: 'Clock',
            description: "Lorem Ipsum is simply dummy text of the pri",
            bgColour: "bg-primary bg-gradient-to-r from-primary to-secondary"

        },
        {
            id: 2,
            icon: location,
            name: 'Our Location',
            description: "Cumilla, Bangladesh",
            bgColour: "bg-accent"

        },
        {
            id: 3,
            icon: phone,
            name: 'Contuct us now',
            description: "017********",
            bgColour: "bg-primary bg-gradient-to-r from-primary to-secondary"

        }
    ]

    return (
        <section className='mt-5'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
                {infocards.map(infocard => <Infocard
                    key={infocard.id}
                    infocard={infocard}
                >
                </Infocard>)
                }
            </div>
        </section>
    );
};

export default InfoCards;