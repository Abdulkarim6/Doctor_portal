
const Testimonial = ({ testimonialData }) => {
    const { img, name, Country, description } = testimonialData;
    return (
        <div className="card card-compact lg:w-96 w-[344px] m-2 bg-base-100 shadow-xl p-6">
            <p className="text-left">{description}</p>
            <div className="flex mt-4">
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} />
                    </div>
                </div>
                <div className="text-left pl-3">
                    <h2 className="card-title">{name}</h2>
                    <p>{Country}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;