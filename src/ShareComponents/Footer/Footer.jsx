/* eslint-disable react/no-unknown-property */
import bgimg from '../../assets/images/footer.png'
import teeth from '../../assets/images/fluoride.png'

const Footer = () => {
    return (
        <footer style={{ backgroundImage: `url(${bgimg})`, backgroundPosition: 'center' }} className="footer mt-8 pt-10 pb-10 pl-16 pr-16 bg-base-200 text-base-content justify-items-center items-center">
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            <div className='grid justify-items-center'>
                <img className='w-32 rounded' src={teeth} />
                <p>Copyright 2022 All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;