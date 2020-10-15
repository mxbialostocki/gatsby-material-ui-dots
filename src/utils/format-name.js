export const removeWhitespace = name => name.replace(/ /g,'')

export const createSlug = name => {
  if (name === 'home') return ''
  return name.toLowerCase().replace(/ /g, '-')
}
