import React, { useEffect } from "react";
import PropTypes from "prop-types";

var audio = null;

export const Player = ({ title }) => {
	const [play, setPlay] = React.useState(false);

	useEffect(() => {
		audio = new Audio(
			"https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3"
		);
	}, []);
	return (
		<div>
			<div className="d-flex">
				{play ? (
					<button
						className="player-button"
						onClick={() => {
							audio.pause();
							setPlay(false);
						}}>
						<i className="far fa-stop-circle" />
					</button>
				) : (
					<button
						className="player-button"
						onClick={() => {
							audio.play();
							setPlay(true);
						}}>
						<i className="far fa-play-circle" />
					</button>
				)}
			</div>
		</div>
	);
};

Player.propTypes = {
	title: PropTypes.string
};
