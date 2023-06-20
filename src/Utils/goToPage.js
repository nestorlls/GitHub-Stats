function totalPage(size, data) {
  return Math.ceil(data.length / size);
}

function getCurrentPage(data, currentPage, size) {
  const startPage = (currentPage - 1) * size;
  const endPage = startPage + size;
  return data.slice(startPage, endPage);
}

export { totalPage, getCurrentPage };
