import React from 'react';
import { createRoot } from 'react-dom/client';
import { CKEditor } from 'ckeditor4-react';

const { useState } = React;

const ConfigEvents = () => {
  const [content, setContent] = useState("This is a CKEditor 4 WYSIWYG editor instance created by ️⚛️ React.")

  const updateContent = (e) => {
    setContent(e.editor.getData())
  }

	return (
		<div>
			<CKEditor
      initData={content}
        onChange={updateContent}
        content={content}
				config={{
					toolbar: [
						[ 'Source' ],
						[ 'Styles', 'Format', 'Font', 'FontSize' ],
						[ 'Bold', 'Italic' ],
						[ 'Undo', 'Redo' ],
						[ 'EasyImageUpload' ],
						[ 'About' ]
					],
					extraPlugins: 'easyimage',
					removePlugins: 'image',
					cloudServices_uploadUrl: 'https://33333.cke-cs.com/easyimage/upload/',
					cloudServices_tokenUrl:
						'https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt'
				}}
			/>
      <br/>
      <h1>
        Content
      </h1>
    <div
      dangerouslySetInnerHTML={{__html: content}}
    />
		</div>
	);
}

createRoot(document.getElementById( 'root' )).render( <ConfigEvents /> );
