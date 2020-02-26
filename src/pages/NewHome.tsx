import {IonContent,
        IonHeader, 
        IonPage, 
        IonTitle, 
        IonToolbar,
        IonSelect,
        IonLabel,
        IonSelectOption,
        IonItem,
        IonButton,
        } 
from '@ionic/react';
import React from 'react';
import './NewHome.css'
import Image from '../components/Image';
import DrinkArray from '../ImageLinks.js';

interface MyProps {};
interface MyState { 
    valuesList: Array<any>,
    imageArray: Array<any>
};

class NewHome extends React.Component<MyProps, MyState>{
    constructor(props: any) {
        super(props);
        this.state = {
            valuesList: [],
            imageArray: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e: any) {
        this.setState({
            valuesList: e.target.value
        });
    }
    
    // Create image link for onClick for the button, then this can be passed to the Image component
    handleClick() {
        this.CreateImageLink();
    }

    CreateImageLink() {
        if(this.state.valuesList.length === 0)
        {
            this.setState({
                imageArray: []
            })
        } else {
            var randomDrinkType;
            if(this.state.valuesList.length > 1) {
                randomDrinkType = Math.floor(Math.random() * this.state.valuesList.length);
                randomDrinkType = this.state.valuesList[randomDrinkType];
            } else {
                randomDrinkType = this.state.valuesList[0];
            }
            var drinkArray = DrinkArray[randomDrinkType]
            var randomDrink = Math.floor(Math.random() * drinkArray.length);
            console.log("Random Drink Type Value: " + randomDrinkType);
            console.log("Random Drink Value: " + randomDrink);
            console.log("\n");
            this.setState({
                imageArray: DrinkArray[randomDrinkType][randomDrink]
            })
        }
        console.log(this.state.valuesList);
    }

    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>DUTCH BROS.</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <IonItem>
                        <IonLabel>Pick your drink type(s)</IonLabel>
                        <IonSelect onIonChange={this.handleChange} multiple={true} cancelText="Cancel" okText="Ok!">
                            <IonSelectOption value={0}>Americanos</IonSelectOption>
                            <IonSelectOption value={1}>Breves</IonSelectOption>
                            <IonSelectOption value={2}>Chais</IonSelectOption>
                            <IonSelectOption value={3}>Cold Brew</IonSelectOption>
                            <IonSelectOption value={4}>Freezes</IonSelectOption>
                            <IonSelectOption value={5}>Frosts</IonSelectOption>
                            <IonSelectOption value={6}>Hot Cocoa</IonSelectOption>
                            <IonSelectOption value={7}>Kids Drinks</IonSelectOption>
                            <IonSelectOption value={8}>Latte</IonSelectOption>
                            <IonSelectOption value={9}>Lemonades</IonSelectOption>
                            <IonSelectOption value={10}>Mochas</IonSelectOption>
                            <IonSelectOption value={11}>Rebels</IonSelectOption>
                            <IonSelectOption value={12}>Smoothies</IonSelectOption>
                            <IonSelectOption value={13}>Sodas</IonSelectOption>
                            <IonSelectOption value={14}>Tea</IonSelectOption>
                        </IonSelect>
                    </IonItem>

                    <div className="button">
                        <IonButton onClick={this.handleClick}>Randomize!</IonButton>
                    </div>

                    <Image imageArray={this.state.imageArray} />
                </IonContent>
            </IonPage>
        );
    }
}

export default NewHome;