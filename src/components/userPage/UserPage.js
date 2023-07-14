import React, {useEffect, useRef} from 'react';

const UserPage = () => {


const idRef = useRef('');
    const nameRef = useRef('');
    const usernameRef = useRef('');
    const emailRef= useRef('');
    const streetRef = useRef('');
    const suiteRef= useRef('');
    const cityRef= useRef('');
    const zipcodeRef= useRef('');
    const latRef= useRef('');
    const lngRef= useRef('');
    const phoneRef= useRef('');
    const websiteRef= useRef('');
    const companyNameRef= useRef('');
    const catchPhraseRef= useRef('');
    const bsRef = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();

    console.log(
        idRef.current.value,
        nameRef.current.value,
        usernameRef.current.value,
        emailRef.current.value,
        streetRef.current.value,
        suiteRef.current.value,
        cityRef.current.value,
        zipcodeRef.current.value,
        latRef.current.value,
        lngRef.current.value,
        phoneRef.current.value,
        websiteRef.current.value,
        companyNameRef.current.value,
        catchPhraseRef.current.value,
        bsRef.current.value
    );

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
                id: idRef.current.value,
                name: nameRef.current.value,
                username: usernameRef.current.value,
                email: emailRef.current.value,
                street: streetRef.current.value,
                suite: suiteRef.current.value,
                city: cityRef.current.value,
                zipcode: zipcodeRef.current.value,
                lat: latRef.current.value,
                lng: lngRef.current.value,
                phone: phoneRef.current.value,
                website: websiteRef.current.value,
                companyName: companyNameRef.current.value,
                catchPhrase: catchPhraseRef.current.value,
                bs: bsRef.current.value
            })
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
};

useEffect(() => {
    console.log('looking')

});


    return (
        <div>
            <form method="post" onSubmit={handleSubmit}>
                <label>
                    New User
                    <br/>
                    id:
                    <br/>
                    <input type="number" autoComplete="id" ref={idRef}/>
                    <br/>
                    name:
                    <br/>
                    <input type="text" autoComplete="name" ref={nameRef}/>
                    <br/>
                    username:
                    <br/>
                    <input type="text" autoComplete="username" ref={usernameRef}/>
                    <br/>
                    email:
                    <br/>
                    <input type="email" autoComplete="email" ref={emailRef}/>
                    <br/>
                    address:
                    <br/>
                        street:
                    <br/>
                        <input type="text" autoComplete="street" ref={streetRef}/>
                    <br/>
                        suite:
                    <br/>
                        <input type="text" autoComplete="suite" ref={suiteRef}/>
                    <br/>
                        city:
                    <br/>
                        <input type="text" autoComplete="city" ref={cityRef}/>
                    <br/>
                        zipcode:
                    <br/>
                        <input type="number" autoComplete="zipcode" ref={zipcodeRef}/>
                    <br/>
                        geo:
                    <br/>
                            lat:
                    <br/>
                            <input type="number" autoComplete="lat" ref={latRef}/>
                    <br/>
                            lng:
                    <br/>
                            <input type="number" autoComplete="lng" ref={lngRef}/>
                    <br/>
                    phone:
                    <br/>
                    <input type="number" autoComplete="phone" ref={phoneRef}/>
                    <br/>
                    website:
                    <br/>
                    <input type="text" autoComplete="website" ref={websiteRef}/>
                    <br/>
                    company:
                    <br/>
                        name:
                    <br/>
                        <input type="text" autoComplete="companyName" ref={companyNameRef}/>
                    <br/>
                        catchPhrase:
                    <br/>
                        <input type="text" autoComplete="catchPhrase" ref={catchPhraseRef}/>
                    <br/>
                        bs:
                    <br/>
                        <input type="text" autoComplete="bs" ref={bsRef}/>
                    <br/>
                </label>
                <button>Save</button>
            </form>
        </div>
    );
};

export default UserPage;