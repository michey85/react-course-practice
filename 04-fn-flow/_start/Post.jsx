export function Post(props) {
    const { name } = props;

    return (
        <h2>
            {name} <button>delete</button>
        </h2>
    );
}
