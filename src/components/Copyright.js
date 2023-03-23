const Copyright = () => {
    const date = new Date();
    
    return (
        <section>
            &copy; {date.getFullYear()} | Sva prava zadržana. 
        </section>
    )
}

export default Copyright;
