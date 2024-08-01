import CustomButton from "../CustomButton";
import SectionTitle from "../SectionTitle";

const CustomProperty = ({image_1,image_2,Icon,title,description}) => {
    return (
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-center  my-10">
        {/* images  */}
        <div>
           <div className="relative">
           <img className=" w-[458px] rounded-md" src={image_1} alt="house" />
          <div className="relative">
          <img className="absolute -bottom-14 lg:-right-28 w-[400px] rounded-md" src={image_2} alt="house" />
         <div className="absolute   right-28 lg:-right-6 -top-12 lg:-top-40 "> <Icon className="  text-4xl text-white rounded-full bg-primaryColor " /></div>
          </div>
           </div>

        </div>
        {/* text section  */}
        <div className="max-w-[552px] space-y-10">
            <SectionTitle title='Property buying'/>
            <h1 className="text-3xl text-darkText font-bodyFont font-semibold">{title}</h1>
        <p className="font-bodyFont">{description}</p>
      <CustomButton/>
        </div>

    </div>
    );
};

export default CustomProperty;