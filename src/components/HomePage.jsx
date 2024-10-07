import SocialMedia from "./SocialMedia";
import { useNavigate } from 'react-router-dom';

export default function ContainerHome(){
    const navigate = useNavigate();
    return (
        <div className="items-center flex justify-around bg-black h-full">
            <div className="m-24 items-center flex flex-col gap-4">
                <h1 className="text-3xl text-blue-700 font-bold">Hello, I'm Maria Clara!</h1>
                <p>I'm a software engineer! I'm specializing at FIAP and I work at PAN Bank. I started studying technology in 2018 and since then I've built a career in various programming languages. Check out some of my projects!</p>
                <button 
                    onClick={() => {navigate('/projects');}}
                    className="bg-blue-600 hover:bg-blue-900 h-12 w-24 mb-4 rounded-lg">Projects
                </button>
                <SocialMedia/>
            </div>
            <img className="max-h-[500px] rounded-full" src="/public/portfolio.jpg"/>
        </div>
    )
}