import React, { useState, useEffect } from "react";
import "./AboutPage.css";
import NavbarRegistered from "../NavbarRegistered/NavbarRegistered";
import FooterNew from "../Footer/FooterNew";

function AboutPage() {
    const [imageUrl, setImageUrl] = useState('');
    const [imageIndex, setImageIndex] = useState(0); 

    const imageUrls = [
        'https://www.pakissan.com/wp-content/uploads/2017/10/hybrid-rice.jpg',
        //'https://www.ips.lk/talkingeconomics/wp-content/uploads/2021/10/wilsan-u-BCATbA86WAw-unsplash-640x416.jpg',
        'https://eos.com/wp-content/uploads/2023/04/rice-field.jpg',
        'https://s3.amazonaws.com/organicnet.etondigital.com/beta/social/0001/35/thumb_34512_social_default_big.jpeg'
    ];

    const missionImageUrls = [
        //'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQZfC3bfgmDYPObFMATCQ0mqQL0iLtvids-o2yEE3YrLwUJhET-AyxMX94NaID4nCA-wA&usqp=CAU',
        'https://blog.soin-et-nature.com/app/uploads/2023/03/plantes-depolluer-les-sols.png',
        //'https://geneticliteracyproject.org/wp-content/uploads/2016/06/predlog-za-velinu-slikuu.jpg',
        'https://www.hars.com.tr/upload/organiktarim-1162x700.jpg'
    ];

    const focusImageUrls = [
        'https://i0.wp.com/igrownews.com/wp-content/uploads/2023/11/jan-kopriva-LTMaAwxanGk-unsplash.jpg?resize=1296%2C700&ssl=1',
        //'https://dfeqe5chycsxe.cloudfront.net/images/Picture_21.2e16d0ba.fill-1200x650.format-webp.webp',
        'https://cdn-images-1.medium.com/max/1000/0*zI9JMJfYM6odSheN'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex(prevIndex => (prevIndex + 1) % imageUrls.length); 
        }, 5000);

        return () => clearInterval(interval); 
    }, [imageUrls]); 

    useEffect(() => {
        setImageUrl(imageUrls[imageIndex]); 
    }, [imageIndex, imageUrls]); 

    const [missionImageUrl, setMissionImageUrl] = useState('');
    const [missionImageIndex, setMissionImageIndex] = useState(0); 

    useEffect(() => {
        const interval = setInterval(() => {
            setMissionImageIndex(prevIndex => (prevIndex + 1) % missionImageUrls.length); 
        }, 5000);

        return () => clearInterval(interval); 
    }, [missionImageUrls]); 

    useEffect(() => {
        setMissionImageUrl(missionImageUrls[missionImageIndex]); 
    }, [missionImageIndex, missionImageUrls]); 

    const [focusImageUrl, setFocusImageUrl] = useState('');
    const [focusImageIndex, setFocusImageIndex] = useState(0); 

    useEffect(() => {
        const interval = setInterval(() => {
            setFocusImageIndex(prevIndex => (prevIndex + 1) % focusImageUrls.length); 
        }, 5000);

        return () => clearInterval(interval); 
    }, [focusImageUrls]); 

    useEffect(() => {
        setFocusImageUrl(focusImageUrls[focusImageIndex]); 
    }, [focusImageIndex, focusImageUrls]); 

    return (
        <div>
            <NavbarRegistered />

            <div className="our-vision">
                <span className="text1">Our</span>{" "}
                <span className="text2">Vision</span>
            </div>
            <div className="our-vision-paragraph">
                <p>
                    CropXchange’s vision is to become the largest agricultural fair-trade platform, connecting farmers and sellers to industrial all around the world.
                </p>
            </div>

            <div className="changing-image-container">
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt="Changing Image"
                        className="changing-image"
                    />
                )}
            </div>
            <hr className="green-black-line"/>

            <div className="our-mission">
                <span className="text1">Our</span>{" "}
                <span className="text2">Mission</span>
            </div>
            <div className="our-mission-paragraph">
                <p>
                    CropXchange’s mission is to become THE global reference for DIGITAL agricultural food crop transactions through a complete PLATFORM solution.
                </p>
            </div>

            <div className="changing-mission-image-container">
                {missionImageUrl && (
                    <img
                        src={missionImageUrl}
                        alt="Changing Mission Image"
                        className="changing-image"
                    />
                )}
            </div>
            <hr className="green-black-line"/>

            <div className="our-focus">
                <span className="text1">Our Focus</span>{" "}
                <span className="text2">& Experience</span>
            </div>
            <div className="our-focus-paragraph">
                <p>
                    CropXchange’s is a group of experts who leverage their knowledge & experience in Farming, Industry Procurement, Digital Business, and Disruptive Innovation at all times. We aim at redistributing value through the agriculture supply chain, to do so requires us to be agile, reliable and transparent. We promote these values throughout all of our actions, operations and services.
                </p>
            </div>

            <div className="changing-focus-image-container">
                {focusImageUrl && (
                    <img
                        src={focusImageUrl}
                        alt="Changing Focus Image"
                        className="changing-image"
                    />
                )}
            </div>

            <FooterNew />
        </div>
    );
}

export default AboutPage;



    /*
    <div className="nothing"></div>
        <div className="crop-container">
            <img
            src="https://organicbiz.ca/wp-content/uploads/2019/05/vegetables-farmers-870915532-alle12-iStock-GettyImages.jpg"
            alt=""
            className="crop-image"
            />
        </div>

        <div className="type-writer-container">
            <TypeWriter
            text="CropXchange"
            loop={false}
            className="writer"
            textStyle={{
                fontFamily: "Gill Sans",
                fontSize: "60px",
            }}
            />
        </div>
         */