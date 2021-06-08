export function checkImgUrl(image,url) {
  const img = new Image()
  img.src = url
  img.onload = () => {
    return image.src = url
  };
}