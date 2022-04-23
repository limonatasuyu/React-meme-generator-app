import React from 'react'
import ReactDom from 'react-dom'
import {Header, Content} from './Components'
import './index.css'

function App() {
	return(
	<>
		<Header />
		<Content />
	</>
	)
}

ReactDom.render(<App />, document.querySelector("#root"))
