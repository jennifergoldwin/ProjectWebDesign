var bouncingBall = anime({
	targets: '.ball',
	translateY: '15vh',
	duration: 300,
	loop: true,
	direction: 'alternate',
	easing: 'easeInCubic',
	scaleX: {
		value: 1.05,
		duration: 150,
		delay: 268
	}
});



