import CountUp from 'react-countup';

const CustomCountSecont = ({number,title,Icon}) => {
    return (
        <div>
              <div className="w-[280px] bg-[#ECF5FF] p-4 rounded-xl space-y-3">
            <h1 className="text-4xl text-primaryColor font-bodyFont font-semibold"><CountUp end={number} />K+</h1>
            <p className="font-bodyFont">{title}</p>
            <div className="flex justify-between items-center">
                <button className="btn-link text-primaryColor">View All</button>
                <Icon className="text-xl text-primaryColor"/>
            </div>
            </div>
        </div>
    );
};

export default CustomCountSecont;