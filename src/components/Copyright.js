const Copyright = () => {
    
    const date = new Date();
    
    return (
        <section className="copyright secondary-text text-center">
            &copy; {date.getFullYear()} | Sva prava zadržana. 
        </section>
    );
};

export default Copyright;
