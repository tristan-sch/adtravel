import sanitizeHtml from 'sanitize-html'

export const sanitizeAllHtmlContent = (content = '') =>
  sanitizeHtml(content, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      'img',
      'a',
      'ul',
      'li',
      'ol',
      'strong',
      'em',
    ]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ['src', 'alt', 'title', 'width', 'height'], // Allow common image attributes
      a: ['href', 'title', 'style', 'class', 'target', 'rel'], // Allow common anchor attributes
    },
    transformTags: {
      a: (tagName, attribs) => {
        return {
          tagName: 'a',
          attribs: {
            ...attribs,
            class: `${attribs.class ? `${attribs.class} ` : ''}underline text-cyan-700`, // Add Tailwind classes for styling
            target: attribs.target || '_blank', // Open links in a new tab by default
            rel: attribs.rel || 'noopener noreferrer', // Add security attributes
          },
        }
      },
    },
  })

export const getImageDisplaySize = (width?: number, height?: number) => {
  if (!width || !height) {
    // fallback to square if dimensions are missing
    return { width: 100, height: 100 }
  }
  // Rectangle: width is at least 1.2x height
  if (width / height >= 1.2) {
    return { width: 150, height: 100 }
  }
  // Otherwise, use square
  return { width: 100, height: 100 }
}
