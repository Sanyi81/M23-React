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
                    <label>
                    id:
                    <br/>
                    <input type="number" autoComplete="id" ref={idRef}/>
                        </label>
                    <br/>
                    <label>
                    name:
                    <br/>
                    <input type="text" autoComplete="name" ref={nameRef}/>
                        </label>
                    <br/>
                    <label>
                    username:
                    <br/>
                    <input type="text" autoComplete="username" ref={usernameRef}/>
                        </label>
                    <br/>
                    <label>
                    email:
                    <br/>
                    <input type="email" autoComplete="email" ref={emailRef}/>
                        </label>
                    <br/>
                    address:
                    <br/>
                    <label>
                        street:
                    <br/>
                        <input type="text" autoComplete="street" ref={streetRef}/>
                        </label>
                    <br/>
                    <label>
                        suite:
                    <br/>
                        <input type="text" autoComplete="suite" ref={suiteRef}/>
                        </label>
                    <br/>
                    <label>
                        city:
                    <br/>
                        <input type="text" autoComplete="city" ref={cityRef}/>
                        </label>
                    <br/>
                    <label>
                        zipcode:
                    <br/>
                        <input type="number" autoComplete="zipcode" ref={zipcodeRef}/>
                        </label>
                    <br/>
                        geo:
                    <br/>
                    <label>
                            lat:
                    <br/>
                            <input type="number" autoComplete="lat" ref={latRef}/>
                        </label>
                    <br/>
                    <label>
                            lng:
                    <br/>
                            <input type="number" autoComplete="lng" ref={lngRef}/>
                        </label>
                    <br/>
                    <label>
                    phone:
                    <br/>
                    <input type="number" autoComplete="phone" ref={phoneRef}/>
                        </label>
                    <br/>
                    <label>
                    website:
                    <br/>
                    <input type="text" autoComplete="website" ref={websiteRef}/>
                        </label>
                    <br/>
                    company:
                    <br/>
                    <label>
                        name:
                    <br/>
                        <input type="text" autoComplete="companyName" ref={companyNameRef}/>
                        </label>
                    <br/>
                    <label>
                        catchPhrase:
                    <br/>
                        <input type="text" autoComplete="catchPhrase" ref={catchPhraseRef}/>
                        </label>
                    <br/>
                    <label>
                        bs:
                    <br/>
                        <input type="text" autoComplete="bs" ref={bsRef}/>
                        </label>
                    <br/>
                </label>
                <button>Save</button>
            </form>
        </div>
    );
};

export default UserPage;