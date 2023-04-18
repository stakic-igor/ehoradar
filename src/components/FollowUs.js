const FollowUs = () => {
    return (
        <section className='follow-us'>
            <div className="container follow-us__wrap">
                <span>Pratite nas na:</span>
                <div className='follow-us-boxes'>
                    <a 
                        href='https://www.facebook.com/ehoradar' 
                        className='follow-us-boxes__links facebook'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img 
                            src='/images/icons/social-icons/facebook-32.png' 
                            alt="facebook"
                        />
                    </a>
                    <a 
                        href='https://www.instagram.com/ehoradar' 
                        className='follow-us-boxes__links instagram'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img 
                            src='/images/icons/social-icons/instagram-32.png' 
                            alt="instagram"
                        />
                    </a>
                    <a 
                        href='https://www.youtube.com/@ehoradar6957' 
                        className='follow-us-boxes__links youtube'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img 
                            src='/images/icons/social-icons/youtube-32.png' 
                            alt="youtube"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FollowUs;
