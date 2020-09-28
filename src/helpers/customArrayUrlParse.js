export default (arrayUrl) => {
	if (arrayUrl.length === 0) {
		return []
	}
	return arrayUrl.map((url) => {
		const splittedUrl = url.split('/')
		return splittedUrl[splittedUrl.length - 1]
	})
}
