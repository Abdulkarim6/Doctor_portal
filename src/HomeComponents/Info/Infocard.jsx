
const Infocard = ({ infocard }) => {
    const { icon, name, description, bgColour } = infocard;
    return (
        <div className={`rounded-md ${bgColour}`}>
            <div className="card shadow text-left text-white flex flex-row p-2">
                <figure className="pl-2">
                    <img src={icon} alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div >
    );
};

export default Infocard;