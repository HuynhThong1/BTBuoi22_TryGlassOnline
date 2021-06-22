import React, { Component } from 'react';
import './BTBuoi22.css';

export default class BTBuoi22 extends Component {

    bgImgSrc = './img/glassesImage/background.jpg';


    state = {
        glassImgSrc: './img/glassesImage/v1.png',
        productName: 'GUCCI G8850U',
        productDesc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.',
    }


    arrGlasses = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./img/glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./img/glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./img/glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./img/glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./img/glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./img/glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./img/glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./img/glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]

    handleChangeGlass = (url, name, desc) => {
        this.setState({
            glassImgSrc: `${url}`,
            productName: `${name}`,
            productDesc: `${desc}`
        });
    }

    renderGlassInfo = (id) => {
        let findProduct = this.arrGlasses.find((product => product.id === id));
        if (findProduct) {
            return <div className="glass__info">
                <h4>{findProduct.name}</h4>
                <p>{findProduct.desc}</p>
            </div>
        }
        else {
            return console.log('Error');
        }
    }

    renderGlass = () => {
        return this.arrGlasses.map((product, index) => {
            return <div className="col-2 w_glasses" onClick={() => {
                this.handleChangeGlass(product.url, product.name, product.desc)
            }} key={index} >
                <img className="w-100 g__img__height" src={product.url} alt="..." />
            </div>

        })
    }

    render() {
        return (
            <div className="container-fluid pl-0 pr-0 bg__img" style={{ background: `url("./img/glassesImage/background.jpg")` }}>

                {/* <img src={this.state.bgImgSrc} alt="..." /> */}
                <div className="header">
                    <h3 className="title">Try glasses app online</h3>
                </div>

                <div className="container">
                    <div className="model mt-3">
                        <div className="row">
                            <div className="col-6">
                                <div className="model__glass">
                                    <img src="./img/glassesImage/model.jpg" className="w-100" />
                                    <img src={this.state.glassImgSrc} className="glass__on__model" />
                                    <div className="glass__info">
                                        <h4>{this.state.productName}</h4>
                                        <p>{this.state.productDesc}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 text-center">
                                <img src="./img/glassesImage/model.jpg" className="w-50" />
                            </div>
                        </div>
                    </div>
                    <div className="glass mt-2">
                        <div className="row">
                            {this.renderGlass()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
