function Name({input, children}) {
    return (
        <>
            <h1>{input}</h1>
            <p style={{color: "red"}}>{children}</p>
        </>

    )
}

export default Name;