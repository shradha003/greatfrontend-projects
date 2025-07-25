function showImage(imgEl) {
  imgEl.classList.add("img-loaded");
  const skeletonImgEl = imgEl.previousElementSibling;
  if (skeletonImgEl && skeletonImgEl.classList.contains("skeleton")) {
    skeletonImgEl.remove();
  }
}
