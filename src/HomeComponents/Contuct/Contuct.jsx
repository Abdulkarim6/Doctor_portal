import bgimg from '../../assets/images/appointment.png'
import Button from '../../ShareComponents/Button/Button';
const Contuct = () => {
    return (
        <section style={{ backgroundImage: `url(${bgimg})`, backgroundPosition: 'center' }} className="flex flex-col items-center mt-6 mb-6 rounded">
            <div className='mt-6'>
                <h2 className='text-sky-500 font-lg text-lg'>Contuct Us</h2>
                <h2 className='text-white font-medium text-xl'>Stay Connected With Us</h2>
            </div>
            <div className="card-body lg:w-[450px] w-64 p-0 mb-12">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Email</span>
                    </label>
                    <input type="text" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Subject</span>
                    </label>
                    <input type="text" placeholder="Subject" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Your Message</span>
                    </label>
                    <textarea className="textarea textarea-info" placeholder="Your Message"></textarea>
                </div>
                <div className="form-control mt-6">
                    <Button>Submit</Button>
                </div>
            </div>
        </section>
    );
};

export default Contuct;