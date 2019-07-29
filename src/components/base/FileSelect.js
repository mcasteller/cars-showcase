import React from 'react';
import strings from '../../resources/strings';

class FileSelect extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          description: '',
          error: ''
        };
   
    };

    componentDidMount() {
      // Typical usage (don't forget to compare props):
      if (this.props.files) {
        //run onchange
         const files = this.props.files,
               fileList = document.getElementById("fileList");
       
        if (!files.length) {
            fileList.innerHTML = "<p>No files selected!</p>";
        } else {
            fileList.innerHTML = "";
            const list = document.createElement("ul");
            fileList.appendChild(list);
            
            for (let i = 0; i < files.length; i++) {
                const li = document.createElement("li");
                list.appendChild(li);
                
                const img = document.createElement("img");
                img.src = files[i].url;
                img.height = 60;

                li.appendChild(img);
                const info = document.createElement("span");
                info.innerHTML = files[i].name + ": " + files[i].size + " bytes";
                li.appendChild(info);
            }
        }
      }
    }

    onChange = (e) => {
        const selectedFiles = e.target.files,
              files = [],
              fileList = document.getElementById("fileList");
       
        if (!selectedFiles.length) {
            fileList.innerHTML = "<p>No files selected!</p>";
        } else {
            fileList.innerHTML = "";
            const list = document.createElement("ul");
            fileList.appendChild(list);
            
            for (let i = 0; i < selectedFiles.length; i++) {
                const li = document.createElement("li");
                list.appendChild(li);
                
                const img = document.createElement("img");
                img.src = window.URL.createObjectURL(selectedFiles[i]);
                img.height = 60;
     
                img.onload = function() {
                   // window.URL.revokeObjectURL(this.src);
                }
     
                files.push({
                    "url": img.src,
                    "name": selectedFiles[i].name,
                    "src": selectedFiles[i]
                });

                li.appendChild(img);
                const info = document.createElement("span");
                info.innerHTML = selectedFiles[i].name + ": " + selectedFiles[i].size + " bytes";
                li.appendChild(info);
            }
            // call external function
            this.props.onChange({ files })
        }
    };

    render() {

        return (
            <div>
              <input type="file" id="fileElem" multiple accept="image/*" onChange={this.onChange}/>
              <div id="fileList">
                <p>{strings.site.noFilesSelected}</p>
              </div>
            </div>
        )
    }
}

export default FileSelect;