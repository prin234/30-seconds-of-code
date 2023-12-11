theme = {
  tokencolors: [
    // {
    // 	"scope": "comment",
    // 	"settings": {
    // 		"foreground": "#6a9955"
    // 	}
    // },
    // {
    // 	"scope": "string.regexp",
    // 	"settings": {
    // 		"foreground": "#d16969"
    // 	}
    // },
    // {
    // 	"scope": "keyword",
    // 	"settings": {
    // 		"foreground": "#569cd6"
    // 	}
    // },
    {
      scope: [
        'meta.embedded',
        'source.groovy.embedded',
        'string meta.image.inline.markdown',
        'variable.legacy.builtin.python',
      ],
      settings: {
        foreground: '#d4d4d4',
      },
    },
    {
      scope: 'emphasis',
      settings: {
        fontstyle: 'italic',
      },
    },
    {
      scope: 'strong',
      settings: {
        fontstyle: 'bold',
      },
    },
    {
      scope: 'header',
      settings: {
        foreground: '#000080',
      },
    },
    {
      scope: 'constant.language',
      settings: {
        foreground: '#569cd6',
      },
    },
    {
      scope: [
        'constant.numeric',
        'variable.other.enummember',
        'keyword.operator.plus.exponent',
        'keyword.operator.minus.exponent',
      ],
      settings: {
        foreground: '#b5cea8',
      },
    },
    {
      scope: 'constant.regexp',
      settings: {
        foreground: '#646695',
      },
    },
    {
      scope: 'entity.name.tag',
      settings: {
        foreground: '#569cd6',
      },
    },
    {
      scope: 'entity.name.tag.css',
      settings: {
        foreground: '#d7ba7d',
      },
    },
    {
      scope: 'entity.other.attribute-name',
      settings: {
        foreground: '#9cdcfe',
      },
    },
    {
      scope: [
        'entity.other.attribute-name.class.css',
        'entity.other.attribute-name.class.mixin.css',
        'entity.other.attribute-name.id.css',
        'entity.other.attribute-name.parent-selector.css',
        'entity.other.attribute-name.pseudo-class.css',
        'entity.other.attribute-name.pseudo-element.css',
        'source.css.less entity.other.attribute-name.id',
        'entity.other.attribute-name.scss',
      ],
      settings: {
        foreground: '#d7ba7d',
      },
    },
    {
      scope: 'invalid',
      settings: {
        foreground: '#f44747',
      },
    },
    {
      scope: 'markup.underline',
      settings: {
        fontstyle: 'underline',
      },
    },
    {
      scope: 'markup.bold',
      settings: {
        foreground: '#569cd6',
        fontstyle: 'bold',
      },
    },
    {
      scope: 'markup.heading',
      settings: {
        foreground: '#569cd6',
        fontstyle: 'bold',
      },
    },
    {
      scope: 'markup.italic',
      settings: {
        fontstyle: 'italic',
      },
    },
    {
      scope: 'markup.strikethrough',
      settings: {
        fontstyle: 'strikethrough',
      },
    },
    {
      scope: 'markup.inserted',
      settings: {
        foreground: '#b5cea8',
      },
    },
    {
      scope: 'markup.deleted',
      settings: {
        foreground: '#ce9178',
      },
    },
    {
      scope: 'markup.changed',
      settings: {
        foreground: '#569cd6',
      },
    },
    {
      scope: 'punctuation.definition.quote.begin.markdown',
      settings: {
        foreground: '#6a9955',
      },
    },
    {
      scope: 'punctuation.definition.list.begin.markdown',
      settings: {
        foreground: '#6796e6',
      },
    },
    {
      scope: 'markup.inline.raw',
      settings: {
        foreground: '#ce9178',
      },
    },
    {
      scope: 'punctuation.definition.tag',
      settings: {
        foreground: '#808080',
      },
    },
    {
      scope: ['meta.preprocessor', 'entity.name.function.preprocessor'],
      settings: {
        foreground: '#569cd6',
      },
    },
    {
      scope: 'meta.preprocessor.string',
      settings: {
        foreground: '#ce9178',
      },
    },
    {
      scope: 'meta.preprocessor.numeric',
      settings: {
        foreground: '#b5cea8',
      },
    },
    {
      scope: 'meta.structure.dictionary.key.python',
      settings: {
        foreground: '#9cdcfe',
      },
    },
    {
      scope: 'meta.diff.header',
      settings: {
        foreground: '#569cd6',
      },
    },
    {
      scope: 'storage',
      settings: {
        foreground: '#569cd6',
      },
    },
    {
      scope: 'storage.type',
      settings: {
        foreground: '#569cd6',
      },
    },
    {
      scope: ['storage.modifier', 'keyword.operator.noexcept'],
      settings: {
        foreground: '#569cd6',
      },
    },
    {
      scope: ['string', 'meta.embedded.assembly'],
      settings: {
        foreground: '#ce9178',
      },
    },
    {
      scope: 'string.tag',
      settings: {
        foreground: '#ce9178',
      },
    },
    {
      scope: 'string.value',
      settings: {
        foreground: '#ce9178',
      },
    },
    {
      scope: [
        'punctuation.definition.template-expression.begin',
        'punctuation.definition.template-expression.end',
        'punctuation.section.embedded',
      ],
      settings: {
        foreground: '#569cd6',
      },
    },
    {
      scope: ['meta.template.expression'],
      settings: {
        foreground: '#d4d4d4',
      },
    },
    {
      scope: [
        'support.type.vendored.property-name',
        'support.type.property-name',
        'variable.css',
        'variable.scss',
        'variable.other.less',
        'source.coffee.embedded',
      ],
      settings: {
        foreground: '#9cdcfe',
      },
    },
    {
      scope: 'keyword.control',
      settings: {
        foreground: '#569cd6',
      },
    },
    {
      scope: 'keyword.operator',
      settings: {
        foreground: '#d4d4d4',
      },
    },
    {
      scope: [
        'keyword.operator.new',
        'keyword.operator.expression',
        'keyword.operator.cast',
        'keyword.operator.sizeof',
        'keyword.operator.alignof',
        'keyword.operator.typeid',
        'keyword.operator.alignas',
        'keyword.operator.instanceof',
        'keyword.operator.logical.python',
        'keyword.operator.wordlike',
      ],
      settings: {
        foreground: '#569cd6',
      },
    },
    {
      scope: 'keyword.other.unit',
      settings: {
        foreground: '#b5cea8',
      },
    },
    {
      scope: [
        'punctuation.section.embedded.begin.php',
        'punctuation.section.embedded.end.php',
      ],
      settings: {
        foreground: '#569cd6',
      },
    },
    {
      scope: 'support.function.git-rebase',
      settings: {
        foreground: '#9cdcfe',
      },
    },
    {
      scope: 'constant.sha.git-rebase',
      settings: {
        foreground: '#b5cea8',
      },
    },
    {
      scope: [
        'storage.modifier.import.java',
        'variable.language.wildcard.java',
        'storage.modifier.package.java',
      ],
      settings: {
        foreground: '#d4d4d4',
      },
    },
    {
      scope: 'variable.language',
      settings: {
        foreground: '#569cd6',
      },
    },
    {
      scope: [
        'entity.name.function',
        'support.function',
        'support.constant.handlebars',
        'source.powershell variable.other.member',
        'entity.name.operator.custom-literal',
      ],
      settings: {
        foreground: '#dcdcaa',
      },
    },
    {
      scope: [
        'support.class',
        'support.type',
        'entity.name.type',
        'entity.name.namespace',
        'entity.other.attribute',
        'entity.name.scope-resolution',
        'entity.name.class',
        'storage.type.numeric.go',
        'storage.type.byte.go',
        'storage.type.boolean.go',
        'storage.type.string.go',
        'storage.type.uintptr.go',
        'storage.type.error.go',
        'storage.type.rune.go',
        'storage.type.cs',
        'storage.type.generic.cs',
        'storage.type.modifier.cs',
        'storage.type.variable.cs',
        'storage.type.annotation.java',
        'storage.type.generic.java',
        'storage.type.java',
        'storage.type.object.array.java',
        'storage.type.primitive.array.java',
        'storage.type.primitive.java',
        'storage.type.token.java',
        'storage.type.groovy',
        'storage.type.annotation.groovy',
        'storage.type.parameters.groovy',
        'storage.type.generic.groovy',
        'storage.type.object.array.groovy',
        'storage.type.primitive.array.groovy',
        'storage.type.primitive.groovy',
      ],
      settings: {
        foreground: '#4ec9b0',
      },
    },
    {
      scope: [
        'meta.type.cast.expr',
        'meta.type.new.expr',
        'support.constant.math',
        'support.constant.dom',
        'support.constant.json',
        'entity.other.inherited-class',
      ],
      settings: {
        foreground: '#4ec9b0',
      },
    },
    {
      scope: [
        'keyword.control',
        'source.cpp keyword.operator.new',
        'keyword.operator.delete',
        'keyword.other.using',
        'keyword.other.directive.using',
        'keyword.other.operator',
        'entity.name.operator',
      ],
      settings: {
        foreground: '#c586c0',
      },
    },
    {
      scope: [
        'variable',
        'meta.definition.variable.name',
        'support.variable',
        'entity.name.variable',
        'constant.other.placeholder',
      ],
      settings: {
        foreground: '#9cdcfe',
      },
    },
    {
      scope: ['variable.other.constant', 'variable.other.enummember'],
      settings: {
        foreground: '#4fc1ff',
      },
    },
    {
      scope: ['meta.object-literal.key'],
      settings: {
        foreground: '#9cdcfe',
      },
    },
    {
      scope: [
        'support.constant.property-value',
        'support.constant.font-name',
        'support.constant.media-type',
        'support.constant.media',
        'constant.other.color.rgb-value',
        'constant.other.rgb-value',
        'support.constant.color',
      ],
      settings: {
        foreground: '#ce9178',
      },
    },
    {
      scope: [
        'punctuation.definition.group.regexp',
        'punctuation.definition.group.assertion.regexp',
        'punctuation.definition.character-class.regexp',
        'punctuation.character.set.begin.regexp',
        'punctuation.character.set.end.regexp',
        'keyword.operator.negation.regexp',
        'support.other.parenthesis.regexp',
      ],
      settings: {
        foreground: '#ce9178',
      },
    },
    {
      scope: [
        'constant.character.character-class.regexp',
        'constant.other.character-class.set.regexp',
        'constant.other.character-class.regexp',
        'constant.character.set.regexp',
      ],
      settings: {
        foreground: '#d16969',
      },
    },
    {
      scope: ['keyword.operator.or.regexp', 'keyword.control.anchor.regexp'],
      settings: {
        foreground: '#dcdcaa',
      },
    },
    {
      scope: 'keyword.operator.quantifier.regexp',
      settings: {
        foreground: '#d7ba7d',
      },
    },
    {
      scope: ['constant.character', 'constant.other.option'],
      settings: {
        foreground: '#569cd6',
      },
    },
    {
      scope: 'constant.character.escape',
      settings: {
        foreground: '#d7ba7d',
      },
    },
    {
      scope: 'entity.name.label',
      settings: {
        foreground: '#c8c8c8',
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
