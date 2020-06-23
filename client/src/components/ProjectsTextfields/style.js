const style = (theme) => ({
	btn: {
		color: 'white',
		backgroundColor: '#4CB7A7',
		borderRadius: 61,
		width: 196,
		height: 55,
		fontSize: 25,
		margin: '11px 0px 0px 5px ',
		'&:disabled': {
			color: '#4CB7A7',
			backgroundColor: 'unset',
		},
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 46,
		paddingRight: 64,
	},
});

export default style;