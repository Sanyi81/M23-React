import {useToggle} from "@react-hooks-library/core";

export const Toggle = () => {
    const { bool, setFalse, setTrue, toggle } = useToggle()

    return (
        <div>
            <div>{bool ? 'True' : 'False'}</div>
            <div>
                <button onClick={toggle}>Toggle</button>
                <button onClick={setTrue}>On</button>
                <button onClick={setFalse}>Off</button>
            </div>
        </div>
    )
}
