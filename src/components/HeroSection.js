const HeroSection = () => {

    const randomHeroImage = Math.floor(Math.random() * 3 + 1);

    return (
        <section className='hero'>
            <img 
                src={`/images/hero-${randomHeroImage}.jpg`}
                alt='' 
                className='hero-image'
                />
        </section>
    );
};

export default HeroSection;
