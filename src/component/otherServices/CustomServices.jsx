
const CustomServices = ({Icon,title,description}) => {
    return (
        <div className="flex  gap-5 bg-bgColor p-6">
        {/* icon  */}
        <div className="">
           <div className="p-2 rounded-md bg-designColor"> <Icon className=" text-2xl text-white "/></div>

        </div>
        {/* text  */}
        <div className="max-w-[300px] space-y-4">
        <h1 className="text-[24px] font-bodyFont font-semibold">{title}</h1>
        <p className="font-bodyFont text-gray-600">{description}</p>
        </div>
    </div>
    );
};

export default CustomServices;