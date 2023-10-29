import React, { useState } from 'react'
import Layout from '../../layout'
import './style.css'
import axios from 'axios'
const ContactPage = () => {

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')


    const formData = {
        title: fname,
        body: lname,
    }

    const submitData = () => {
        if (fname != '' && lname != '') {
            axios.post('https://jsonplaceholder.typicode.com/posts', formData)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            setError("Please Filled All Input field")
        }

    }

    return (
        <div>
            <Layout>

                <div className="contect_page">
                    <h2>Contact US</h2>
                    <p>{error && error}</p>
                    <div className="form">
                        <div className="">
                            <input type="text" placeholder='First Name' value={fname} onChange={(e) => setFname(e.target.value)} />
                        </div>
                        <div className="">
                            <input type="text" placeholder='Last Name' value={lname} onChange={(e) => setLname(e.target.value)} />
                        </div>
                        <div className="">
                            <input type="text" placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <div className="">
                            <input type="text" placeholder='Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className="">
                            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>

                    <div className="">
                        <button onClick={submitData} >Send</button>
                    </div>
                </div>

            </Layout>
        </div>
    )
}

export default ContactPage