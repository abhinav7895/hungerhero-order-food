const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-[60px] mt-10 ">
            <div className="container mx-auto flex flex-wrap px-4 justify-between">
                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6 sm:mb-0">
                    <img src={"./public/assets/logo.svg"} alt="logo" className="w-14" />
                    <h4 className="text-2xl font-bold mb-4 mt-2 font-berkshire text-white select-none ">
                        Hunger Hero
                    </h4>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6 sm:mb-0">
                    <h4 className="text-xl font-bold mb-4">Company</h4>
                    <ul className="text-gray-400">
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Careers</a>
                        </li>
                        <li>
                            <a href="#">Team</a>
                        </li>
                        <li>
                            <a href="#">Hunger Hero One</a>
                        </li>
                        <li>
                            <a href="#">Hunger Hero Instamart</a>
                        </li>
                        <li>
                            <a href="#">Hunger Hero Genie</a>
                        </li>
                    </ul>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6 sm:mb-0">
                    <h4 className="text-xl font-bold mb-4">Contact us</h4>
                    <ul className="text-gray-400">
                        <li>
                            <a href="#">Help & Support</a>
                        </li>
                        <li>
                            <a href="#">Partner with us</a>
                        </li>
                        <li>
                            <a href="#">Ride with us</a>
                        </li>
                    </ul>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6 sm:mb-0">
                    <h4 className="text-xl font-bold mb-4">Legal</h4>
                    <ul className="text-gray-400">
                        <li>
                            <a href="#">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="#">Cookie Policy</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                    </ul>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6 sm:mb-0">
                    <h4 className="text-xl font-bold mb-4">We deliver to:</h4>
                    <div className="relative">
                        <select className="block w-full bg-slate-700 border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 appearance-none">
                            <option value="" disabled defaultValue={"Lucknow"}>
                                Select a city
                            </option>
                            <option value="Bangalore">Lucknow</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Gurgaon">Gurgaon</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Pune">Pune</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                            <svg
                                className="fill-current h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer