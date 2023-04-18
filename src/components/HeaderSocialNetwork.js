const HeaderSocialNetwork = () => {
	return (
		<section className="header-social">
			<span className="header-social__title">Pratite nas:</span>
			<div className="header-social-networks secondary-text">
				<a 
					href='https://www.facebook.com/ehoradar' 
					className='header-social-networks__link  facebook'
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
					className='header-social-networks__link instagram'
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
					className='header-social-networks__link youtube'
					target='_blank'
					rel='noreferrer'
				>
					<img 
						src='/images/icons/social-icons/youtube-32.png' 
						alt="youtube"
					/>
				</a>
			</div>
		</section>
	);
};

export default HeaderSocialNetwork;
