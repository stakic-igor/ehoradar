import StreamingServices from './StreamingServices';

const songList = [
	{
		id: 1,
		name: 'Bez Granica',
		duration: '4:31'
	},
	{
        id: 2,
        name: 'Svetlost',
        duration: '3:36'
    },
	{
        id: 3,
        name: 'Tvoj',
        duration: '3:04'
    },
	{
        id: 4,
        name: 'Još jedan dan',
        duration: '3:46'
    },
	{
        id: 5,
        name: 'Sve je spremno za kraj',
        duration: '5:01'
    },    
	{
        id: 6,
        name: 'Oprosti za bol',
        duration: '5:31'
    },
	{
        id: 7,
        name: 'Tražim te',
        duration: '3:38'
    },
	{
        id: 8,
        name: 'Prah',
        duration: '4:36'
    },
	{
        id: 9,
        name: 'Noć bez sna',
        duration: '4:00'
    }
]

const AlbumDownload = () => {
	return (
		<section className='album-download container'>
			<h2>Album Download</h2>
			<h4>Naš prvi album, Bez granica, je upravo objavljen i dostupan je za preuzimanje!</h4>
			<div class="album-wrap">
				<ul className='song-list'>
					{
						songList.map((song) => (
							<li className='song-list__item secondary-text' key={song.id}>
								{song.id}. {song.name} - 
								<span className='song-list__item__duration'>&nbsp;{song.duration}</span>
							</li>
						))
					}
				</ul>
				<img 
					src='/images/hero-1.jpg'
					className='album-cover'
					alt='Bez granica album cover'
				/>
			</div>
			<input type='radio' name='download-as'/>.mp3
			<input type='radio' name='download-as'/>.waw
			<button className='btn' disabled>Download</button>
			<StreamingServices />
		</section>
	);
};

export default AlbumDownload;
