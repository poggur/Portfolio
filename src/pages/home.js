import './home.css';

export default function Homepage() {
    return (
        <div id='wrapper-container'>
            <div id='home-body-top'>
                <div id='title-div'>
                    <p className='title-prefix'>Hi! I'm</p>
                    <h1 id='title'>Jack Regan</h1>
                    <p className='title-prefix'>I think website development is complete hell.</p>
                </div>
            </div>
            <div id='image-div'>
                <img src='images/potential-blog-transition.png' id='image-transition'/>
            </div>
            <div id='home-body-bottom'>
                <div className='text-left-div'>
                    <h1 className='subtitle-left'>About me</h1>
                    <p className='text-content-left'>Hi, I'm a 17 year old software developer from the United Kingdom<br></br>
                        who happens to dislike CSS. I like to play video games in my free time.</p>
                </div>
                <div className='text-right-div'>
                    <h1 className='subtitle-right'>My blog</h1>
                    <p className='text-content-right'>Sometimes I write stuff in my blog, it's most likely about<br></br>
                        programming or games design. Click here to visit my blog
                    </p>
                </div>
                <div className='text-left-div'>
                    <h1 className='subtitle-left'>Where to contact me</h1>
                    <p className='text-content-left'>You can email me at jackregan4098@outlook.com<br></br>
                        Alternatively, you can connect with me on LinkedIn.</p>
                </div>
            </div>
        </div>

    );
}
