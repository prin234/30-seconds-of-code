theme = {
  tokencolors: [
    // {
    // 	"scope": [
    // 		"comment",
    // 		"punctuation.definition.comment",
    // 		"string.comment"
    // 	],
    // 	"settings": {
    // 		"foreground": "#6a737d"
    // 	}
    // },
    // {
    // 	"scope": "keyword",
    // 	"settings": {
    // 		"foreground": "#f97583"
    // 	}
    // },
    // {
    // 	"scope": [
    // 		"source.regexp",
    // 		"string.regexp"
    // 	],
    // 	"settings": {
    // 		"foreground": "#dbedff"
    // 	}
    // },
    {
      scope: [
        'constant',
        'entity.name.constant',
        'variable.other.constant',
        'variable.other.enummember',
        'variable.language',
      ],
      settings: {
        foreground: '#79b8ff',
      },
    },
    {
      scope: ['entity', 'entity.name'],
      settings: {
        foreground: '#b392f0',
      },
    },
    {
      scope: 'variable.parameter.function',
      settings: {
        foreground: '#e1e4e8',
      },
    },
    {
      scope: 'entity.name.tag',
      settings: {
        foreground: '#85e89d',
      },
    },
    {
      scope: ['storage', 'storage.type'],
      settings: {
        foreground: '#f97583',
      },
    },
    {
      scope: [
        'storage.modifier.package',
        'storage.modifier.import',
        'storage.type.java',
      ],
      settings: {
        foreground: '#e1e4e8',
      },
    },
    // todo: recheck this (.punctuation)
    // {
    // 	"scope": [
    // 		"string",
    // 		"punctuation.definition.string",
    // 		"string punctuation.section.embedded source"
    // 	],
    // 	"settings": {
    // 		"foreground": "#9ecbff"
    // 	}
    // },
    {
      scope: 'support',
      settings: {
        foreground: '#79b8ff',
      },
    },
    {
      scope: 'meta.property-name',
      settings: {
        foreground: '#79b8ff',
      },
    },
    {
      scope: 'variable',
      settings: {
        foreground: '#ffab70',
      },
    },
    {
      scope: 'variable.other',
      settings: {
        foreground: '#e1e4e8',
      },
    },
    {
      scope: 'invalid.broken',
      settings: {
        foreground: '#fdaeb7',
        fontstyle: 'italic',
      },
    },
    {
      scope: 'invalid.deprecated',
      settings: {
        foreground: '#fdaeb7',
        fontstyle: 'italic',
      },
    },
    {
      scope: 'invalid.illegal',
      settings: {
        foreground: '#fdaeb7',
        fontstyle: 'italic',
      },
    },
    {
      scope: 'invalid.unimplemented',
      settings: {
        foreground: '#fdaeb7',
        fontstyle: 'italic',
      },
    },
    {
      scope: 'carriage-return',
      settings: {
        foreground: '#24292e',
        background: '#f97583',
        fontstyle: 'italic underline',
      },
    },
    {
      scope: 'message.error',
      settings: {
        foreground: '#fdaeb7',
      },
    },
    {
      scope: 'string variable',
      settings: {
        foreground: '#79b8ff',
      },
    },
    {
      scope: [
        'string.regexp.character-class',
        'string.regexp constant.character.escape',
        'string.regexp source.ruby.embedded',
        'string.regexp string.regexp.arbitrary-repitition',
      ],
      settings: {
        foreground: '#dbedff',
      },
    },
    {
      scope: 'string.regexp constant.character.escape',
      settings: {
        foreground: '#85e89d',
        fontstyle: 'bold',
      },
    },
    {
      scope: 'support.constant',
      settings: {
        foreground: '#79b8ff',
      },
    },
    {
      scope: 'support.variable',
      settings: {
        foreground: '#79b8ff',
      },
    },
    {
      scope: 'meta.module-reference',
      settings: {
        foreground: '#79b8ff',
      },
    },
    {
      scope: 'punctuation.definition.list.begin.markdown',
      settings: {
        foreground: '#ffab70',
      },
    },
    {
      scope: ['markup.heading', 'markup.heading entity.name'],
      settings: {
        foreground: '#79b8ff',
        fontstyle: 'bold',
      },
    },
    {
      scope: 'markup.quote',
      settings: {
        foreground: '#85e89d',
      },
    },
    {
      scope: 'markup.italic',
      settings: {
        foreground: '#e1e4e8',
        fontstyle: 'italic',
      },
    },
    {
      scope: 'markup.bold',
      settings: {
        foreground: '#e1e4e8',
        fontstyle: 'bold',
      },
    },
    {
      scope: ['markup.underline'],
      settings: {
        fontstyle: 'underline',
      },
    },
    {
      scope: ['markup.strikethrough'],
      settings: {
        fontstyle: 'strikethrough',
      },
    },
    {
      scope: 'markup.inline.raw',
      settings: {
        foreground: '#79b8ff',
      },
    },
    {
      scope: [
        'markup.deleted',
        'meta.diff.header.from-file',
        'punctuation.definition.deleted',
      ],
      settings: {
        foreground: '#fdaeb7',
        background: '#86181d',
      },
    },
    {
      scope: [
        'markup.inserted',
        'meta.diff.header.to-file',
        'punctuation.definition.inserted',
      ],
      settings: {
        foreground: '#85e89d',
        background: '#144620',
      },
    },
    {
      scope: ['markup.changed', 'punctuation.definition.changed'],
      settings: {
        foreground: '#ffab70',
        background: '#c24e00',
      },
    },
    {
      scope: ['markup.ignored', 'markup.untracked'],
      settings: {
        foreground: '#2f363d',
        background: '#79b8ff',
      },
    },
    {
      scope: 'meta.diff.range',
      settings: {
        foreground: '#b392f0',
        fontstyle: 'bold',
      },
    },
    {
      scope: 'meta.diff.header',
      settings: {
        foreground: '#79b8ff',
      },
    },
    {
      scope: 'meta.separator',
      settings: {
        foreground: '#79b8ff',
        fontstyle: 'bold',
      },
    },
    {
      scope: 'meta.output',
      settings: {
        foreground: '#79b8ff',
      },
    },
    {
      scope: [
        'brackethighlighter.tag',
        'brackethighlighter.curly',
        'brackethighlighter.round',
        'brackethighlighter.square',
        'brackethighlighter.angle',
        'brackethighlighter.quote',
      ],
      settings: {
        foreground: '#d1d5da',
      },
    },
    {
      scope: 'brackethighlighter.unmatched',
      settings: {
        foreground: '#fdaeb7',
      },
    },
    {
      scope: ['constant.other.reference.link', 'string.other.link'],
      settings: {
        foreground: '#dbedff',
        fontstyle: 'underline',
      },
    },
    {
      scope: 'ref.matchtext',
      settings: {
        foreground: '#ffffff',
      },
    },
    {
      scope: 'token.info-token',
      settings: {
        foreground: '#6796e6',
      },
    },
    {
      scope: 'token.warn-token',
      settings: {
        foreground: '#cd9731',
      },
    },
    {
      scope: 'token.error-token',
      settings: {
        foreground: '#f44747',
      },
    },
    {
      scope: 'token.debug-token',
      settings: {
        foreground: '#b267e6',
      },
    },
  ],
};
