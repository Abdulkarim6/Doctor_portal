
const Service = ({ serviceData }) => {
    const { name, icon, description } = serviceData;
    return (
        <div>
            <div className="card shadow-md">
                <figure className="">
                    <img src={icon} alt="" />
                </figure>
                <div className="card-body items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;