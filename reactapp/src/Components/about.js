import expresslogo from "../images/expressjs.svg"
import React, { useEffect } from 'react'
import Reactlogo from '../images/reactlogo.svg'
import { Row, Col } from 'react-bootstrap'
import Nodejslogo from "../images/nodejs.svg";
import Reduxlogo from "../images/reduxlogo.svg";
import Mongodblogo from "../images/mongodb.svg";
import Codethink from "../images/codethinkingsvg.svg"

import AOS from 'aos';
import './about.css'
export default function About() {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div>
            <div className="header_styles" >
                    <p className="headertext_styles">Technologies Used</p>
            </div>
        <br />
         <Row style={{ "width": "100%","overflow": "hidden","padding-top": "5%","padding-bottom": "5%"}}>
            <Col sm={6}>
                <p className="react_text">ReactJs</p>
                <ol>
                <div data-aos="fade-right">
                <li className="reason_text">It ensures faster rendering</li>
        <li className="reason_text"> It facilitates the overall process of writing components</li>
                </div>
                </ol>
            </Col>
            <Col sm={6}>
                <div data-aos="fade-left">
                    <img src={Reactlogo} className="react_logo" />
                </div>
            </Col>
        </Row>
        
         <Row  style={{ "width": "100%","overflow": "hidden","padding-top": "5%","padding-bottom": "5%"}} className="nodejs_row">
            <Col sm={6}>
                <div data-aos="fade-right">
                    <img src={Nodejslogo} className="nodejs_logo" />
                </div>
            </Col>
            <Col sm={6}>
                <p className="nodejs_text">NodeJs</p>
                <ol>
                <div data-aos="fade-left">
                <li className="reason_text">Node.js offers an Easy Scalability</li>
                <li className="reason_text"> NodeJs provides High Performance</li>
                </div>
                </ol>
            </Col>

        </Row>
       <Row style={{ "width": "100%","overflow": "hidden","padding-top": "5%","padding-bottom": "5%" }}>
            <Col sm={6}>
            <p className="nodejs_text">ExpressJs</p>
            <div data-aos="fade-right">
            <ol>
            <li className="reason_text">Makes Node.js web application development fast and easy</li>
            <li className="reason_text">Easy to connect with databases such as MongoDB, Redis, MySQL</li>
            </ol>
            </div>
            </Col>
            <Col sm={6}>
                <div data-aos="fade-left">
                <img src={expresslogo} className="express_logo" />
                </div>
            </Col>
        </Row>
        <Row  style={{ "width": "100%","overflow": "hidden","padding-top": "5%","padding-bottom": "5%" }} className="expressjs_row">
            <Col sm={6}>
                <div data-aos="fade-right">
                <img src={Reduxlogo} className="redux_logo" />
                </div>
            </Col>
            <Col sm={6}>
            <p className="redux_text">Redux and React-Redux</p>
            <div data-aos="fade-left">
            <ol>
            <li className="redux_reason_text">Developer can easily manage these state of the application easily by the help of global accessing feature.</li>
            <li className="redux_reason_text">Redux helps in these tricky scenarios where multiple components want to share some or all of the same data, but are not closely related to one another.</li>
            </ol>
            </div>
               
            </Col>
        </Row>
        <Row style={{ "width": "100%","overflow": "hidden","padding-top": "5%","padding-bottom": "5%" }}>
            <Col sm={6}>
            <p className="mongodb_text">MongoDb</p>
            <div data-aos="fade-right">
            <ol>
            <li className="redux_reason_text">MongoDB is a document database in which one collection holds different documents. Number of fields, content and size of the document can differ from one document to another.</li>
            <li className="redux_reason_text">Due to the structuring (BSON format - key value pair) way of the data in MongoDB, no complex joins are needed.
</li>
            </ol>
            </div>
            </Col>
            <Col sm={6}>
                <div data-aos="fade-left">
                <img src={Mongodblogo} className="mongodb_logo" />
                </div>
            </Col>
        </Row>
             
        </div >
    )
}
