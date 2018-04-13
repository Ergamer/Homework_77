import React from 'react';
import {apiURL} from "../../constants";
import {Image} from "reac";
import imageNotAvailable from '../';

const styles = {
    width: '100px',
    height: '100px',
    marginRight: '10px'
};

const ProductThumbnail = props => {
    let image = imageNotAvailable;

    if (props.image) {
        image = apiURL + '/uploads/' + props.image;
    }

    return <Image src={image} style={styles} thumbnail />
};

export default ProductThumbnail;
