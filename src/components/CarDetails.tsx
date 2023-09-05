import React, {FC, PropsWithChildren} from 'react';

import {ICar} from "../interfaces/carInterface";

interface IProps extends PropsWithChildren {
    car: ICar
}
const CarDetails: FC<IProps> = ({car: {id, brand, price, year}}) => {
    return (
        <div>
            <div>id:{id}, brand:{brand}, price:{price}, year:{year}</div>
        </div>
    );
};

export {CarDetails};