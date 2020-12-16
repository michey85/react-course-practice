import React from 'react';

export function Post(props) {
    const { id, name, removePost } = props;

    return (
        <h2>
            {name} <button onClick={() => removePost(id)}>delete</button>
        </h2>
    );
}
