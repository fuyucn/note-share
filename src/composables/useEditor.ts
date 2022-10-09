import { EditorView } from '@codemirror/view'
import { basicSetup } from 'codemirror'
import { EditorState } from '@codemirror/state'

export const useEditor = () => {
  const createEditor = ({ editorDom }) => {
    if (!editorDom.value)
      throw new Error('editorRef is not defined')

    const state = EditorState.create({
      doc: 'Hello world',
      extensions: [
        EditorView.updateListener.of((update) => {
          if (update.docChanged)
            console.log('doc changed')
        }),
      ],
    })

    const myTheme = EditorView.baseTheme({
      '&': {
        color: 'red',
        backgroundColor: '#034',
      },
      '.cm-content': {
        caretColor: '#0e9',
      },
      '&.cm-focused .cm-cursor': {
        borderLeftColor: '#0e9',
      },
      '&.cm-focused .cm-selectionBackground, ::selection': {
        backgroundColor: '#074',
      },
      '.cm-gutters': {
        backgroundColor: '#045',
        color: '#ddd',
        border: 'none',
      },
    })

    const editor = new EditorView({
      state,
      parent: editorDom.value,
      extensions: [basicSetup, myTheme],

    })

    return editor
  }

  return {
    createEditor,
  }
}
