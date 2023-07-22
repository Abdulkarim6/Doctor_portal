/* eslint-disable react/no-unescaped-entities */
import chair from '../../assets/images/chair.png'
import bgimg from '../../assets/images/bg.png'
// import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    // let footer = <p>Please pick a day.</p>;
    // if (selectedDate) {
    //     footer = <p>You picked {format(selectedDate, 'PP')}.</p>;
    // }

    return (
        <section style={{ background: `url(${bgimg})`, backgroundSize: "cover", backgroundPosition: 'center' }}>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="lg:w-1/3 rounded-lg shadow-2xl" />
                    <div className=''>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            // footer={footer}
                        ></DayPicker>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;