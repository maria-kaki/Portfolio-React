import SocialMedia from "./SocialMedia";

export default function ContainerHome(){
    return (
        <div className="items-center flex justify-around bg-black">
            <div className="m-24 items-center flex flex-col">
                <h1 className="text-3xl text-blue-700">Hello, I'm Maria Clara!</h1>
                <p>I'm a software engineer! I'm specializing at FIAP and I work at PAN Bank. I started studying technology in 2018 and since then I've built a career in various programming languages. Check out some of my projects!</p>
                <button className="bg-blue-600 h-12 w-24 rounded-lg">Projects</button>
            </div>
            <img className="max-h-[500px] rounded-full" src="/public/portfolio.jpg"/>
            <SocialMedia/>
        </div>
    )
}