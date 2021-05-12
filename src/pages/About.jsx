import React from 'react'
import Appbar from '../reuseableComponent/Appbar'
import '../pages/style.css'
import Image from '../Images/about-2.jpg';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function AboutPage() {
    return (
        <div>
            <Appbar></Appbar>
            <div className='home-outer-div'> <div className="image">
                    <img src={Image} width='800px' height='700px' />
                </div>
                <div className='text-div'>
                    <h1><span style={{ color: "#1d3557", fontFamily: 'dancing-script', marginRight: '110px', fontSize: 70, fontWeight: 'bold' }}> About Us</span> </h1>
                    <p style={{ fontSize: 20,textAlign:'left' }}>Extreme multi-label classification (XMC) is the problem of finding the relevant labels for an input, from a very large universe of possible labels. We consider XMC in the setting where labels are available only for groups of samples - but not for individual ones. Current XMC approaches are not built for such multi-instance multi-label (MIML) training data, and MIML approaches do not scale to XMC sizes.</p>
                    <p style={{ fontSize: 20 ,textAlign:'left'}}>  We develop a new and scalable algorithm to impute individual-sample labels from the group labels; this can be paired with any existing XMC method to solve the aggregated label problem. We characterize the statistical properties of our algorithm under mild assumptions, and provide a new end-to-end framework for MIML as an extension. Experiments on both aggregated label XMC and MIML tasks show the advantages over existing approaches.</p>
                   
                    <br></br><br></br>
                    <div className="contact">
                        <MailOutlineIcon id='mailIcon' />
                        <FacebookIcon id='facebookIcon'/>
                        < InstagramIcon id='instaIcon'/>
                    </div>
                </div>
               
            </div>


        </div>

    )
}




<p>Extreme multi-label classification (XMC) is the problem of finding the relevant labels for an input, from a very large universe of possible labels. We consider XMC in the setting where labels are available only for groups of samples - but not for individual ones. Current XMC approaches are not built for such multi-instance multi-label (MIML) training data, and MIML approaches do not scale to XMC sizes. We develop a new and scalable algorithm to impute individual-sample labels from the group labels; this can be paired with any existing XMC method to solve the aggregated label problem. We characterize the statistical properties of our algorithm under mild assumptions, and provide a new end-to-end framework for MIML as an extension. Experiments on both aggregated label XMC and MIML tasks show the advantages over existing approaches.
</p>