const getCroppedImageUrl = (url: string) => {
  if (!url) return 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
  const target = 'media/'
  const index = url.indexOf(target) + target.length
  const newUrl = url.slice(0, index) + 'crop/600/400/' + url.slice(index)
  return newUrl
}

export default getCroppedImageUrl