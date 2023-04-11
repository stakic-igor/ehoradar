import StreamingServices from "./StreamingServices";

const AlbumDownload = () => {
    return (
        <section className="album-download">
            <h2>Album Download</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               Quisque lobortis ac sapien eu ultricies. 
               Curabitur quis erat a sapien lacinia porttitor sit amet nec urna.
            </p>
            <div>
                <ul>
                    <li>Bez Granica</li>
                    <li>Prah</li>
                    <li>Svetlost</li>
                    <li>Noć bez sna</li>
                    <li>Oprosti za bol</li>
                    <li>Tvoj</li>
                    <li>Sve je spremno za kraj</li>
                    <li>Još jedan dan</li>  
                </ul>
                <img alt="Bez granica album cover"/>
                <input type="radio" name="download-as"/>.mp3
                <input type="radio" name="download-as"/>.waw
                <button class="btn" disabled>Download</button>
            </div>
            <StreamingServices />
        </section>
    );
};

export default AlbumDownload;
