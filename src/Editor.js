import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

hljs.configure({
    languages: ['javascript', 'ruby', 'python', 'rust', 'c', 'cpp'],
});

export default function Editor({ value, onChange }) {
    return (
        <>
            <ReactQuill modules={modules} formats={formats} value={value} onChange={onChange} />
        </>

    )
}

const modules = {
    toolbar: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code', 'code-block'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
        ['link', 'image'],
        ['clean']
    ],
    syntax: {
      highlight: (text) => hljs.highlightAuto(text).value,
    },
};

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'code', 'align', 'code-block'
]