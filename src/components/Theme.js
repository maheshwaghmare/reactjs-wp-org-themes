import React from 'react';

function Theme(props) {
    return (
        <div className="theme col-md-3">
			<div className="inner" style={{backgroundImage: `url(${props.item.screenshot_url})`}}>
				<div className="overlay" />
				<div className="content">
					<h2 className="h5">{props.item.name}</h2>
					<p>Version {props.item.version}</p>
				</div>
			</div>
		</div>
    );
}

export default Theme