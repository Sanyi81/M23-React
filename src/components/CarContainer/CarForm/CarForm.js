// import React, {useState} from 'react';
//
// const CarForm = ({setOnSave}) => {
//
//     const initialState = {
//         brand: '',
//         price: '',
//         year: ''
//     };
//
//     const [car, setCar] = useState(initialState);
//     const inputHandle = (e) => {
//       setCar(prev => ({...prev, [e.target.name]: e.target.value}))
//     };
//
//     const save = (e) => {
//         e.preventDefault();
//         fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
//             headers: {'content-type': 'application/json'},
//             method: 'POST',
//             body: JSON.stringify(car)
//         }).then(value => value.json()).then( () => {
//             setOnSave(prev => !prev)
//             setCar(initialState)
//         })
//     };
//
//     return (
//         <form onSubmit={save}>
//             <div><label>brand: <input type="text" value={car.brand} name={'brand'} onChange={inputHandle}/></label></div>
//             <div><label>price: <input type="text" value={car.price} name={'price'} onChange={inputHandle}/></label></div>
//             <div><label>year: <input type="text" value={car.year} name={'year'} onChange={inputHandle}/></label></div>
//             <button>Save</button>
//         </form>
//     );
// };
//
// export default CarForm;

import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/CarValidator";
const CarForm = ({setOnSave, carForUpdate, setCarForUpdate}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState:{errors, isValid},
        setValue
    } = useForm({
        mode: "all",
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate])
    const save = (car) => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
            headers: {'content-type':'application/json'},
            body: JSON.stringify(car),
            method: 'POST'
        }).then(value => {
            if (!value.ok) {
                throw Error('error')
            }
            return value.json()
        }).then(() => {
            setOnSave(prev => !prev)
            reset()
        })
            .catch(e => {
            console.log(e)
        })
    };

    const update = (car) => {
      fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${carForUpdate.id}`, {
          body: JSON.stringify(car),
          headers: {'content-type': 'application/json'},
          method: 'PUT'
      }).then(value => value.json())
          .then(() => {
              setOnSave(prev=>!prev)
              setCarForUpdate(null)
              reset()
          })

    };

    return (
        <div>
        <form onSubmit={handleSubmit(!carForUpdate ? save : update)}>
            <label><input type="text" placeholder={'brand'}
                          {...register('brand', {required: true})}/></label>
            {errors.brand && <span>{errors.brand.message}</span>}
            <label><input type="text" placeholder={'price'}
                          {...register('price', {valueAsNumber: true})}/></label>
            {errors.price && <span>{errors.price.message}</span>}
            <label><input type="text" placeholder={'year'}
                          {...register('year', {valueAsNumber: true})}/></label>
            {errors.year && errors.year.message}
            <button disabled={!isValid}>{!carForUpdate?'Save':'Update'}</button>
        </form>
        </div>
    );
};

export default CarForm;