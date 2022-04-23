import React from 'react'
import logo from './images/troll-face.png'
import memesdata from './memesData'

function Header() {
	return(
	<div className="header">
		<a href="#" className="header-link">
			<img src={logo} alt="logo"/>
			<span>Meme Generator</span>
		</a>
		<p className="header-text">React Course - Project 3</p>
	</div>
	)
}

function Content() {

	const memes = memesdata.data.memes
	const [url, setUrl] = React.useState(memes[Math.floor(Math.random() * memes.length)].url);

	function changeMeme() {
		var randomMemeUrl = memes[Math.floor(Math.random() * memes.length)].url;
		setUrl(randomMemeUrl)
	}

	
	const [topText, setTopText] = React.useState("");
	
	function changeTopText(event) {
		let text = event.target.value
		setTopText(text)
	}
	
	const [bottomText, setBottomText] = React.useState("");
	
	function changeBottomText(event) {
		let text = event.target.value
		setBottomText(text)
	}
	
	return(
		<main>
			<div className="form-div">
				<form>
					<div className="text-forms">
  					<input type="text" placeholder="top text" onChange={changeTopText}/>
    				<input type="text" id="text-bottom" placeholder="bottom text" onChange={changeBottomText}/><br/>
    			</div>
				</form>
				<button id="submit-button" onClick={changeMeme}>Get a new meme image 🖼️</button> 
			</div>
			<div className="img-div">
				<p className="top--text">{topText}</p>
				<div className="bottom--text">{bottomText}</div>
				<img src={url} alt="meme"/>
			</div>
		</main>
	)
}

export {Header, Content}
