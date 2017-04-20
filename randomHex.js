var randomHex = function() {
	var hex = '#'
	var chars = 'abcdef0123456789'

	for (var i = 0; i < 6; i++) {
		hex += chars.charAt(Math.floor(Math.random() * chars.length));
	}

	return hex
}

module.exports = randomHex