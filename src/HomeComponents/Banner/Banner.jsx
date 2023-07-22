/* eslint-disable react/no-unescaped-entities */
import chair from '../../assets/images/chair.png'
import bgimg from '../../assets/images/bg.png'
import Button from '../../ShareComponents/Button/Button';

const Banner = () => {
    return (
        <section style={{background : `url(${bgimg})`, backgroundSize : "cover", backgroundPosition : 'center'}}>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className='text-left'>
                        <h1 className="text-3xl font-bold">Your New Smile Starts Here</h1>
                        <p className="text-lg py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <Button>Get Started</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;