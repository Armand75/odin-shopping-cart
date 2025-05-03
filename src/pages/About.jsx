import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function About(){
    return (
        <div className="about">
            <h1>About Us</h1>
            <p>At WorldsWear, our mission is to provide stylish, high-quality clothing that empowers individuals to express their unique personalities. We believe that fashion should be accessible, sustainable, and fun!</p>
            <p>Founded in 2025, WorldsWear started as a small venture driven by a passion for fashion and a desire to make a difference. From humble beginnings, we have grown into a vibrant community of fashion enthusiasts who value quality and style.</p>
            <div>
                <p>Contact us</p>
                <p><FaTwitter /> <FaInstagram /> <FaLinkedin />  </p>
            </div>
        </div>
    )
}