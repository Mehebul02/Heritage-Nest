import { FaCartFlatbedSuitcase } from "react-icons/fa6";

const OverView = () => {
    return (
        <div className="lg:w-[800px] lg:h-[356px] bg-[#E5E7EB] my-10 rounded-md p-6">
            <h1 className="text-2xl text-darkText font-bodyFont font-semibold">Overview</h1>
            <div className="bg-[#E5E7EB] shadow-lg border-2 my-4 p-2 rounded-md">
           <div className="flex overflow-auto justify-between">
           <h1 className="text-xl font-bodyFont font-medium flex items-center gap-3"><FaCartFlatbedSuitcase/> 2 Bath</h1>
           <h1 className="text-xl font-bodyFont font-medium flex items-center gap-3"><FaCartFlatbedSuitcase/> 2 Bath</h1>
           <h1 className="text-xl font-bodyFont font-medium flex items-center gap-3"><FaCartFlatbedSuitcase/> 2 Bath</h1>
           <h1 className="text-xl font-bodyFont font-medium flex items-center gap-3"><FaCartFlatbedSuitcase/> 2 Bath</h1>
           </div>
            </div>
        </div>
    );
};

export default OverView;