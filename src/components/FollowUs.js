const FollowUs = () => {
    return (
        <section className='follow-us'>
            <span>Pratite nas na:</span>
            <div className='follow-us-boxes'>
                <a 
                    href='https://www.facebook.com/ehoradar' 
                    className='follow-us-boxes__links facebook'
                    target='_blank'
                    rel='noreferrer'
                >
                    facebook
                </a>
                <a 
                    href='https://www.instagram.com/ehoradar' 
                    className='follow-us-boxes__links instagram'
                    target='_blank'
                    rel='noreferrer'
                >
                    instagram
                </a>
                <a 
                    href='https://www.youtube.com/@ehoradar6957' 
                    className='follow-us-boxes__links youtube'
                    target='_blank'
                    rel='noreferrer'
                >
                    youtube
                </a>
            </div>
        </section>
    );
};

export default FollowUs;
