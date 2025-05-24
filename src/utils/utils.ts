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
