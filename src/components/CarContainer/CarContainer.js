import React from 'react';
import {CarForm} from "../CarForm";
import {Cars} from "../Cars";

const CarContainer = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarContainer};