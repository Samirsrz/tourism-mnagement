import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { AuthContext } from './provider/AuthProvider';



const SocialLogin = () => {
    
    const {googleLogin, githubLogin} = useContext(AuthContext);

    return (
        <div className='p-4 space-y-3 mb-6'>
        <h2 className="text-3xl"> Login With </h2>
   <button onClick={() => googleLogin()} className="btn btn-outline w-full"><FaGoogle></FaGoogle> Login with Google </button>
   <button onClick={() => githubLogin()} className="btn btn-outline w-full"><FaGithub></FaGithub> Login with Github </button>

    </div>
    );
};

export default SocialLogin;