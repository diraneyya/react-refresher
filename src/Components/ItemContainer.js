import React from "react";
import { PictureContainer,BoxPicture,} from "./App.styled";
import one from '../Assets/one.jpg';

const ItemContainer =()=>{
    return(
<PictureContainer>
<BoxPicture>  
    <img src={one}/>
</BoxPicture>
</PictureContainer>
    )
};

export default ItemContainer;