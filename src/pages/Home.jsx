import React from 'react'
import Appbar from '../reuseableComponent/Appbar'
import '../pages/style.css'
import Image from '../Images/chatbot-1.jpg';

export default function Home() {
    return (
        <div>
            <Appbar />
            <div className='home-outer-div'>
            <div className="image">
                    <img src={Image} width='950px' height='650px' alt=""/>
                </div>
                <div className='text-div'>
                    <h1><span style={{ color: "#001d3d",fontFamily: 'dancing-script', marginRight: '300px', fontSize: 70, fontWeight: 'bold' }}> Multilable </span> </h1>
                    <h1><span style={{ color: "#001d3d",fontFamily: 'dancing-script', marginLeft: '130px', fontSize: 70,fontWeight: 'bold' }}>Classification</span> </h1>
                  <p style={{fontSize:20,textAlign:'left'}}>In machine learning, multi-label classification and the strongly related problem of multi-output classification are variants of the classification problem where multiple labels may be assigned to each instance. Multi-label classification is a generalization of multiclass classification, which is the single-label problem of categorizing instances into precisely one of more than two classes; in the multi-label problem there is no constraint on how many of the classes the instance can be assigned to.</p>
                <p style={{fontSize:20,textAlign:'left'}}> Based on learning paradigms, the existing multi-label classification techniques can be classified into batch learning and online machine learning. Batch learning algorithms require all the data samples to be available beforehand. It trains the model using the entire training data and then predicts the test sample using the found relationship. </p>
                <p style={{fontSize:20,textAlign:'left'}}>  The online learning algorithms, on the other hand, incrementally build their models in sequential iterations. In iteration t, an online algorithm receives a sample, xt and predicts its label(s) ŷt using the current model; the algorithm then receives yt, the true label(s) of xt and updates its model based on the sample-label pair: (xt, yt).</p>
                </div>
                
            </div>
        </div>


    )
}











