import React, { useState, useEffect } from 'react'
import Layout from '../../layout'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './style.css'

const Home = () => {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                setPosts(response?.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });

    }, [])

    console.log("Post Data", posts)

    return (
        <>
            <Layout>
                <div className="main">
                    <div className='section'>
                        <img src={require('../../images/Image.png')} alt="" />
                        <div className="card">
                            <h5>Technology</h5>
                            <p className='cardp'>The Impact of Technology on the Workplace: How Technology is Changing</p>
                            <div className='cardf'>
                                <img src={require('../../images/hello.png')} alt="" />
                                <p>Jason Francisco</p>
                                <p>August 20, 2022</p>
                            </div>
                        </div>
                        <center>
                            <div className="car2">
                                <h4>Advertisement</h4>
                                <h4>You can place ads</h4>
                                <h4>750x100</h4>
                            </div>
                        </center>
                    </div>
                    <div className="section2">
                        <h5>Latest Post</h5>
                        <div className='cards'>

                            {
                                posts?.slice(0, 15).map((item, index) => {
                                    return (
                                        <Link to={`/blog/${item?.id}`} className="Card2" key={index} >
                                            <img className='images' src={require('../../images/Rectangle 38.jpg')} alt="" />
                                            <h3>{item.title.slice(0, 8)}...</h3>
                                            <p className='cardp2'> {item.body.slice(0, 50)}... </p>
                                            <div className='cardf'>
                                                <img src={require('../../images/Image (1).png')} alt="" />
                                                <p>Jason Francisco</p>
                                                <p>August 20, 2022</p>
                                            </div>
                                        </Link>
                                    )
                                })
                            }


                        </div>
                        <center>
                            <button>View All Posts</button>
                        </center>
                        <center>
                            <div className="card2" id='card2' >
                                <h4>Advertisement</h4>
                                <h4>You can place ads</h4>
                                <h4>750x100</h4>
                            </div>
                        </center>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Home