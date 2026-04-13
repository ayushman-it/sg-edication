export function assetPath(path) {
  return `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, '')}`
}

export function commonsFilePath(fileName) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}`
}
