
const CustomOverview = ({Icon,title,}) => {
    return (
        <div>
            <h1 className="text-xl font-bodyFont font-medium flex items-center gap-3"><Icon/>{title}</h1>
            
        </div>
    );
};

export default CustomOverview;