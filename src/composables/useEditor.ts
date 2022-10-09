import { EditorView, basicSetup } from 'codemirror'
import { EditorState } from '@codemirror/state'
import { markdown, markdownLanguage } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'

export const useEditor = () => {
  const defaultOnUpdateListener = (listener) => {
    if (listener)
      return listener

    return (update) => {
      if (update.docChanged)
        console.log('doc changed')
    }
  }

  const createEditor = ({ editorDom, onUpdateListener }) => {
    if (!editorDom.value)
      throw new Error('editorRef is not defined')

    const myTheme = EditorView.theme({
      '&': {
        'color': 'black',
        'backgroundColor': 'white',
        'width': '100%',
        'height': '100%',
        'border-radius': '.375rem',
        'outline': '2px solid transparent',
        'outline-offset': '2px',
        'box-shadow': 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
      },
      '&.cm-focused': {
        outline: 'none !important',
      },
      '.cm-content': {
        caretColor: 'white',
      },
      '&.cm-focused .cm-cursor': {
        borderLeftColor: 'black',
      },
      '&.cm-focused .cm-selectionBackground, ::selection': {
        backgroundColor: '#074',
      },
      '.cm-gutters': {
        backgroundColor: 'white',
        color: 'black',
        border: 'none',
      },
    })

    const state = EditorState.create({
      doc: 'Hello world',
      extensions: [
        myTheme,
        EditorView.updateListener.of(defaultOnUpdateListener(onUpdateListener)),
        basicSetup,
        markdown({
          base: markdownLanguage,
          codeLanguages: languages,
          addKeymap: true,
          extensions: [],
        })],
    })

    const editor = new EditorView({
      state,
      parent: editorDom.value,
    })

    return editor
  }

  return {
    createEditor,
  }
}
