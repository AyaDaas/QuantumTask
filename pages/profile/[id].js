import axios from 'axios';
export default function Profile({ userData }) {
    return (
        <div>
            <>
                <div className="max-w-2xl  mx-4   xl:max-w-xl sm:mx-auto md:mx-auto lg:mx-auto xl:mx -auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
                    <div className="mx-auto w-32 h-32 relative mt-16 border-4 border-white rounded-full overflow-hidden">
                        <img
                            className="object-cover object-center h-32"
                            src="https://media.istockphoto.com/id/1397556857/vector/avatar-13.jpg?s=612x612&w=0&k=20&c=n4kOY_OEVVIMkiCNOnFbCxM0yQBiKVea-ylQG62JErI="
                        />
                    </div>
                    <div className="text-center mt-2">
                        <h2 className="font-semibold">{userData.name} <strong className='text-sm font-normal text-gray-600'>({userData.username})</strong> </h2>
                        <p className="text-gray-500 text-sm">{userData.email}</p>
                    </div>
                    <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
                        <li className="flex flex-col items-center justify-around">
                            <svg className="w-4 m-3 fill-current text-blue-900"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                            <div>{userData.phone}</div>
                        </li>

                        <li className="flex flex-col items-center justify-around">
                            <svg className="w-4 m-3 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"> <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                            <div>{userData.address.street}</div>
                        </li>
                        <li className="flex flex-col items-center justify-around">
                            <svg className="w-4 m-3 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" /></svg>
                            <div>{userData.website}</div>
                        </li>
                    </ul>

                    <div className="bg-white      ">

                        <div className="border-t text-center border-gray-200 px-4 py-5 sm:p-0">
                            <dl className="sm:divide-y sm:divide-gray-200">
                                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Address Details</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {userData.address.suite}
                                        <br />
                                        {userData.address.city}
                                        (Zip Code {userData.address.zipcode})

                                    </dd>

                                </div>
                                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Company</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {userData.company.name}                                        <br />
                                        {userData.company.catchPhrase}
                                        <br />
                                        (bs {userData.company.bs})

                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>


                </div>
            </>
            {/* <p>ID: {userData.id}</p> */}
        </div>
    );
}


export async function getServerSideProps({ params }) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    try {
        const response = await axios.get(`${apiUrl}/users/${params.id}`);
        const userData = response.data;

        return {
            props: { userData },
        };
    } catch (error) {
        console.error('Error fetching user data:', error);
        return {
            props: { userData: null },
        };
    }
}

