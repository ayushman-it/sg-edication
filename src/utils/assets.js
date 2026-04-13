export function assetPath(path) {
  return `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, '')}`
}
