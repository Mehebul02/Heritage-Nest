const SectionTitle = ({ title,  }) => {
    return (
     <div>
         <h2 className="text-2xl text-designColor font-semibold hidden md:inline-flex items-center">
        <span className="md:w-24 lg:w-14 h-[3px] bg-designColor ml-6 mr-4"></span>
        {title}
      </h2>
     </div>
    );
  };
  
  export default SectionTitle;