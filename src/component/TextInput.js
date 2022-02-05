const TextInput=(props)=> {
    return (
        <div>
            <h1>Hello Everyone!</h1>
            <h2>{props.name}</h2>
            <h3>{props.children}</h3>
        </div>
    );
}
export default TextInput;