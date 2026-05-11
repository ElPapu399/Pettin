import { Link } from "react-router-dom";
import { IoNotifications } from "react-icons/io5";

function Navbar() {
    return (
        <div>
            <nav className="my-4 px-6">
                <div className="grid grid-cols-3 items-center">
                    <div className="flex justify-start">
                        <div href="/" className="flex items-center text-gray-900 no-underline">
                            <Link className="text-2xl font-bold text-purple-500" to="/">Pettin</Link>
                        </div>
                    </div>
                    <div class="flex justify-center gap-4">
                        <Link className="text-gray-700 hover:text-black" to="/explore">Explore</Link>
                        <Link className="text-gray-700 hover:text-black" to="/messages">Messages</Link>
                        <Link className="text-gray-700 hover:text-black" to="/matches">Matches</Link>
                        <Link className="text-gray-700 hover:text-black" to="/profile">Profile</Link>
                    </div>
                    <div className="flex justify-end">
                        <IoNotifications
                            size={28}
                            className="text-gray-600"
                        />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;