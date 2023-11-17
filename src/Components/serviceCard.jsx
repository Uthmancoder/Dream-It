const ServiceCard = ({ icon, Title, Text, className }) => {
    return (
        <div className={className} >
            <div className={`flex items-center w-fit gap-5 `}>
                <img className="w-[80px]" src={icon} alt="" />
                <div>
                    <h1 className="text-[3xl] font-bold">{Title}</h1>
                    <p>{Text}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
