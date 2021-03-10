import React from 'react'
import {NavLink} from 'react-router-dom'
import '../css/flowers.scss'
import Checkout from './checkout'


class Flowers extends React.Component {


    clickHandler3 = () => {
        <Checkout cart='Cheqsanthemum'/>
    }
    render(){
        return(   
            <div class="flowers">
                <h1 class="flowers__title">Flowers</h1>
                <div class="flowers__inventory">
                    <div class="flowers__inventory-1">
                        <h3 class="flowers__inventory__title">Kylillies</h3>
                        <img src="https://i.ibb.co/qkhLT90/Sunflower-Kyle.jpg" alt="Sunflower-Kyle" border="0" class="flowers__inventory__picture" />
                        <p class="flowers__inventory__price">Price: $19.95</p>
                    </div>
                    <div class="flowers__inventory-2">
                        <h3 class="flowers__inventory__title">SIVTulip</h3>
                        <img src="https://miamiflowermarket.com/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/t/u/tulip_dutch_white_1.jpg" alt="Tulip" border="0" class="flowers__inventory__picture" />
                        <p class="flowers__inventory__price">Price: $12.95</p>
                    </div>
                    <div class="flowers__inventory-3">
                        <h3 class="flowers__inventory__title">Cheqsanthemum</h3>
                        <img src="https://www.almanac.com/sites/default/files/image_nodes/chrysanthemum-orange-4544730_1920.jpg" alt="Sunflower-Kyle" border="0" class="flowers__inventory__picture" />
                        <p class="flowers__inventory__price">Price: $19.95</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Flowers;