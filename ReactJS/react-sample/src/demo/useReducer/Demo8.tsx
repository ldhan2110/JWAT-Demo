import React from "react";


function reducer(state, action) {
    switch (action.type) {
        case 'incremented_age': {
            return {
                name: state.name,
                age: state.age + action.value
            };
        }
        case 'changed_name': {
            return {
                name: action.value,
                age: state.age
            };
        }
    }
    throw Error('Unknown action: ' + action.type);
}

export const Demo8 = () => {
    const [state, dispatch] = React.useReducer(reducer, { name: 'Taylor', age: 42 });

    return (<>
        <div>{state.name}</div>
        <div>{state.age}</div>
        <button onClick={() => dispatch({
            type: "incremented_age",
            value: 1
        })}>Increase Age</button>
    </>)
}