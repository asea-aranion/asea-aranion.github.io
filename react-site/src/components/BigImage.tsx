import React from 'react';

interface BigImageProps {
	imageSrc: string,
	shadowColor: string
}

const BigImage = (props: BigImageProps) => {
	return (
		<div class="apppage-bigimage-container">
			<img class="apppage-bigimage" src={props.imageSrc} alt="" style={{boxShadow: "30px 30px " + props.shadowColor}}></img>
		</div>
		
	);
}

export default BigImage;