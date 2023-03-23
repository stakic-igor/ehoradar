const Copyright = () => {
    const date = new Date();
    
    return (
        <section className="copyright text-center">
            &copy; {date.getFullYear()} | Sva prava zadržana. 
        </section>
    )
}

export default Copyright;
