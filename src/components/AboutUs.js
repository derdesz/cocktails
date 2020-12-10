import React from 'react';
import bartender from '../bartender.jpg';

const AboutUs = (props) => {


    return (
        <div>
            <div className="ui raised segment" id="about-us-text">
                <h2 className="ui header">About Us</h2>
            <p id="about-text">SodaLicious.com is dedicated to good drinking and great living. We inspire, entertain and educate anyone—and everyone—interested in what happens in the glass and out of it. Cocktail recipes; home bar know-how; bottle recommendations; industry intel and job advice for the bar professional; profiles of the people who matter; the bars and cities to visit—if it centers on the act of drinking and how to relatedly live life to the fullest, SodaLicious.com will tell its story. Our readership is diverse. Everyone from a curious drinker seeking a recipe to a top-tier bar professional researching how to reduce their business’ overhead relies on Liquor.com as a valued resource.
                We create entertaining and educational content and experiences that inspire good drinking and great living, as well as educational content and industry experiences that help working bartenders and other trade professionals develop their skills, advance their careers and achieve greater work-life balance.</p>
            </div>
            <div className="ui segment" id="about-us-text-2">
                <img className="ui large left floated image"src={bartender}/>
                <h4>Editorial Guidelines</h4>
                <p>We take our stories, readers and drinking, well, very seriously. All of our articles and recipes are carefully chosen by our editorial team. SodaLicious.com does not accept payment or any form of kickback for anything we write about. No one can pay to be featured in an article written by SodaLicious.com. That’s what advertising is for.</p>
                <h4>Diversity & Inclusion</h4>
                <p>We are committed to helping all people, regardless of race, gender identity, sexual orientation, age, religion, culture, geography, body type, ability or experience. 
                We are invested in working with diverse writers, recipe developers, expert sources, illustrators, photographers on-screen talent and more to create, edit and enhance our content—not just on isolated topics of race but across our brands’ coverage. </p>
                <h3>Contact Us</h3>
                <p>Thanks for dropping by! Whether you have a comment or suggestion to share, we look forward to hearing from you. For more general feedback, feel free to reach out by emailing contact@sodalicious.com , as well.<br/>
                For press inquiries, email us at press@sodalicious.com .<br/>
                If you would rather call us or send us a letter, you can reach us at 1500 Broadway, New York, NY 10036 | 212-204-4000.
                </p>
            </div>
        </div>
    );
}

export default AboutUs;