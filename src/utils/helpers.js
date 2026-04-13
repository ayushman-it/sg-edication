function normalizeText(value) {
  return value.toLowerCase().trim()
}

function matchesSearch(text, query) {
  return normalizeText(text).includes(normalizeText(query))
}

function groupByType(items) {
  return items.reduce((groups, item) => {
    if (!groups[item.type]) {
      groups[item.type] = []
    }

    groups[item.type].push(item)
    return groups
  }, {})
}

export { groupByType, matchesSearch, normalizeText }
