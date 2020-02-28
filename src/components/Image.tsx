import { IonText } 
from '@ionic/react';
import React from 'react';
import "./Image.css";

interface ImageProps {
    imageArray: Array<any>
}

const Image: React.FC<ImageProps> = (props) => {
    if(props.imageArray.length === 0) {
        return (
            <div className="beforeDrinkText">
                <IonText><h3>After you select your drink options, click the "Randomize!" button above to get your random drink!</h3></IonText>
            </div>
        )
    } else {
        return (
            <div className="drinkTextAndImage">
                <img src={props.imageArray[0]} alt="alt"/>
                <IonText><h3> {props.imageArray[1]} </h3></IonText>
            </div>
        )
    }
}

export default Image;