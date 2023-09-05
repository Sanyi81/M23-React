import React, {Dispatch, FC, PropsWithChildren, SetStateAction} from 'react';
import {ICar} from "../interfaces/carInterface";
import {SubmitHandler, useForm} from "react-hook-form";
import {carService} from "../services";

interface IProps extends PropsWithChildren {
    setTrigger: Dispatch<SetStateAction<boolean>>,
    setCarForUpdate: Dispatch<SetStateAction<ICar>>,
    carForUpdate: ICar
};

const CarForm: FC<IProps> = ({setTrigger, carForUpdate, setCarForUpdate}) => {
    const {reset, register, handleSubmit,setValue} = useForm<ICar>()

    if (carForUpdate) {
        setValue('brand', carForUpdate.brand)
        setValue('price', carForUpdate.price)
        setValue('year', carForUpdate.year)
    };

    const save: SubmitHandler<ICar> = async (car) => {
        await carService.create(car)
        setTrigger(prev => !prev)
        reset()
    };

    const update: SubmitHandler<ICar> = async (car) => {
        await carService.update(carForUpdate.id, car)
        setCarForUpdate(null)
        setTrigger(prev => !prev)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
                <button>{carForUpdate ? 'Update' : 'Save'}</button>
        </form>
    );
};

export {CarForm};