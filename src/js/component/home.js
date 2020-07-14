import React, { useEffect, useState } from "react";
import { Player } from "./Player";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [songs, setSongs] = useState([]);
	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/sound/songs")
			.then(response => response.json())
			.then(data => setSongs(data));
	}, []);
	return (
		<div className="text-center mt-5">
			<div>
				{songs.map(song => (
					<li className="songTitle" key={song.id}>
						{song.name}
					</li>
				))}
			</div>
			<Player />
		</div>
	);
}
