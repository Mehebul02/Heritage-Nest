import CountUp from 'react-countup';
const CustomCountUp = ({number,title,Icon}) => {
    return (
        <div className=''>
            <div className="w-[280px] bg-[#FDF0E7] p-4 rounded-xl space-y-3">
            <h1 className="text-4xl text-designColor font-bodyFont font-semibold"><CountUp end={number} />K+</h1>
            <p className="font-bodyFont">{title}</p>
            <div className="flex justify-between items-center">
                <button className="btn-link text-designColor">View All</button>
                <Icon className="text-xl text-designColor"/>
            </div>
            </div>
            
        </div>
    );
};

export default CustomCountUp;