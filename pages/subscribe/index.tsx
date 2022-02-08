import axios from "axios";

import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from "react";

const Subscribe: React.FC<{}> = () => {
    const [mail, setMail] = useState(null);
    const [loading, setLoading] = useState(false);

    const subscribe = () => {
        setLoading(true);
        axios
            .put("api/mailingList", {
                mail,
            })
            .then((result) => {
                if (result.status === 200) {
                    toast.success(result.data.message);
                    setLoading(false);
                }
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    return (
        <div>
            <hr className='my-5' />
            <h2 className=''>
                Stay Tuned!
            </h2>
            <label className='label'>
                <p className='text-lg max-w-xl text-center m-auto leading-9'>
                    Sign up for the newsletter, so you don't miss our latest blogs and updates!
                </p>
            </label>
            <div className='mt-5'>
                <input
                    onChange={(e) => {
                        setMail(e.target.value);
                    }}
                    type='email'
                    placeholder='Your email'
                    className='input input-primary input-bordered'></input>
                <button
                    onClick={subscribe}
                    className={`btn ml-3 ${loading ? "btn-disabled loading" : "btn-primary"}`}>
                    I'm in!
                </button>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Subscribe