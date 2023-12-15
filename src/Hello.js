import React, { useState } from 'react';

function Hello() {
const [loggedin, setLoggedIn] = useState(3);
	return (
		<div>
			{loggedin ==1?<h1>Loggin In 1</h1>:loggedin ==2?<h1>Logged in 2</h1>:<h1>Logged in 3</h1>}
		</div>
	);
}

export default Hello;