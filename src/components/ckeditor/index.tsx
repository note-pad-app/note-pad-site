import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function CkEditor({data, onchange}) {
    return (
        <CKEditor
            editor={ClassicEditor}
            data={data}
            onChange={onchange}
        />
    )
}

export default CkEditor