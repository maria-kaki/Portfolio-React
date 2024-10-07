export default function Projects() {
    return (
        <div className="bg-black text-blue-200 items-center justify-center flex flex-col gap-8">
            <div className="flex gap-8">
                <div className="bg-gray-800 w-80 h-40 rounded-lg p-8 items-center justify-center flex text-2xl cursor-pointer">
                    <a target="_blank" href="https://github.com/maria-kaki/Portfolio-React">Portfólio React</a>
                </div>

                <div className="bg-gray-800 w-80 h-40 rounded-lg p-8 items-center justify-center flex text-2xl cursor-pointer">
                    <a target="_blank" href="https://github.com/maria-kaki/EcoRace-Python">Eco Race - Python</a>
                </div>

                <div className="bg-gray-800 w-80 h-40 rounded-lg p-8 items-center justify-center flex text-2xl cursor-pointer">
                    <a target="_blank" href="https://github.com/maria-kaki/kong-gateway">Kong Gateway</a>
                </div>            
            </div>

            <div className="flex gap-8 p-16">
                <div className="bg-gray-800 w-80 h-40 rounded-lg p-8 items-center justify-center flex text-2xl cursor-pointer">
                    <a target="_blank" href="https://github.com/maria-kaki/kong-gateway-dbless">Kong Gateway dbless</a>
                </div>

                <div className="bg-gray-800 w-80 h-40 rounded-lg p-8 items-center justify-center flex text-2xl cursor-pointer">
                    <a target="_blank" href="https://github.com/maria-kaki/front-end-design">Front End</a>
                </div>

                <div className="bg-gray-800 w-80 h-40 rounded-lg p-8 items-center justify-center flex text-2xl cursor-pointer">
                    <a target="_blank" href="https://github.com/maria-kaki/web-dev">Web Dev</a>
                </div>
            </div>
        </div>
    )
}