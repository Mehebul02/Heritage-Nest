
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialPage = () => {

  
      
    return (
        <>
          
                <div className='divider'>Continue With</div>
                <div >
                    <button  className='btn  btn-circle btn-outline'><FaGithub className='text-3xl'></FaGithub></button>
                    <button  className='btn ml-2 btn-circle btn-outline'><FaGoogle className='text-3xl'></FaGoogle></button>
                
                </div>
            
        </>
    );
};

export default SocialPage ;