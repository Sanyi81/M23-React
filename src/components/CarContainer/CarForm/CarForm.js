import React from 'react';

const CarForm = () => {

    return (
        <div>
            <lable><input type="text" name="brand"/></lable>
            <lable><input type="text" name="year"/></lable>
            <lable><input type="text" name="price"/></lable>
            <button>Save</button>
        </div>
    );
};

export default CarForm;