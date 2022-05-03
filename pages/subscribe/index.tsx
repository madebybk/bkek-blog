import axios from "axios";

import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import subscribeStyles from '../../styles/Subscribe.module.css';

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
                    Sign up for the newsletter, so you don&apos;t miss our latest blogs and updates!
                </p>
            </label>
            <div className={subscribeStyles.email}>
                <input
                    onChange={(e) => {
                        setMail(e.target.value);
                    }}
                    type='email'
                    placeholder='Your email'
                    className={subscribeStyles.inputEmail}
                    >
                </input>
                <button
                    onClick={subscribe}
                    className={`${subscribeStyles.inputBtn} ${loading ? "btn-disabled loading" : "btn-primary"}`}>
                    Send!
                </button>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Subscribe