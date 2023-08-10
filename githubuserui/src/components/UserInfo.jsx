import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


const UserInfo = () => {
    const location = useLocation();
    const inputData = location.state?.fetchedData || null;
    const navigate = useNavigate();
    const handleLogout = async () => {
        navigate('/');
    }

    return (
        <div className="max-w-xs">
            <div className="bg-white shadow-xl rounded-lg py-3">
                <div className="photo-wrapper p-2">
                    <img className="w-32 h-32 rounded-full mx-auto" src={inputData.avatar_url} alt="John Doe" />
                </div>
                <div className="p-2">
                    <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{inputData.name}</h3>
                    <div className="text-center text-gray-400 text-xs font-semibold">
                        <p>Web Developer</p>
                    </div>
                    <table className="text-xs my-3">
                        <tbody>
                            <tr>
                                <td className="px-2 py-2 text-gray-500 font-semibold">Username</td>
                                <td className="px-2 py-2">{inputData.login}</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 text-gray-500 font-semibold">No. of public Repositories</td>
                                <td className="px-2 py-2">{inputData.public_repos}</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 text-gray-500 font-semibold">No. of public Gists</td>
                                <td className="px-2 py-2">{inputData.public_gists}</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 text-gray-500 font-semibold">Profile created at</td>
                                <td className="px-2 py-2">{inputData.created_at}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleLogout}>
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;