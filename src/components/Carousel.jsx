import React from 'react'
import CarouselSlider from "react-carousel-slider";


const Carousel = () => {

    let data = [
        {
            id: "1",
            imgSrc: "https://as1.ftcdn.net/v2/jpg/05/43/33/36/1000_F_543333631_3gUNnCB4KsdXd6qRmH91LzGmyXe5JpEk.jpg"
        },
        {
            id: "2",
            imgSrc: "https://img.freepik.com/free-vector/modern-sale-banner-template-with-fluid-shapes_1361-1389.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710374400&semt=ais"
        },
        {
            id: "3",
            imgSrc: "https://img.freepik.com/premium-vector/shopping-online-special-offer-summer-super-saleorangeyellow-background-mobile_196604-88.jpg"
        },
        {
            id: "4",
            imgSrc: "https://5.imimg.com/data5/YR/GV/UG/SELLER-9561275/interactive-graphic-design-service.jpg"
        },
        {
            id: "5",
            imgSrc: "https://marketplace.canva.com/EAFGKRRskMs/1/0/1600w/canva-brown-and-beige-minimalist-fashion-banner-lYcbGpUSVGo.jpg"
        }
    ];
    let manner = {
        autoSliding: { interval: "2s" },
    };
    let buttonSetting = {
        placeOn: "bottom-beneath",
        //hoverEvent: true,
        style: {
            left: {
                margin: "20px 20px 20px 20px"
            },
            right: {
                margin: "20px 20px 20px 20px"
            }
        }
    };
    let itemsStyle = {
        margin: "0px 0px",
        padding: "0px",

    };

    return (
        <div style={{marginTop: 20}}>
            <CarouselSlider
                slideItems={data}
                manner={manner}
                buttonSetting={buttonSetting}
                itemsStyle={itemsStyle}
            />
        </div>
    )
}

export default Carousel
