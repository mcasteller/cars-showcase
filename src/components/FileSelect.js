import React from 'react';

//window.URL = window.URL || window.webkitURL;

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
      if (this.props.filesURL) {
        //run onchange
         const files = this.props.filesURL,
              filesURL = [],
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
                img.src = this.props.filesURL[i];
                img.height = 60;
     
                img.onload = function() {
                   // window.URL.revokeObjectURL(this.src);
                }
     
                filesURL.push({
                    "URL": img.src,
                    "name": files[i].name,
                    "src": files[i]
                });

                li.appendChild(img);
                const info = document.createElement("span");
                info.innerHTML = files[i].name + ": " + files[i].size + " bytes";
                li.appendChild(info);
            }
        }
      }
    }

    onChange = (e) => {
        const files = e.target.files,
              filesURL = [],
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
                img.src = window.URL.createObjectURL(files[i]);
                img.height = 60;
     
                img.onload = function() {
                   // window.URL.revokeObjectURL(this.src);
                }
     
                filesURL.push({
                    "URL": img.src,
                    "name": files[i].name,
                    "src": files[i]
                });

                li.appendChild(img);
                const info = document.createElement("span");
                info.innerHTML = files[i].name + ": " + files[i].size + " bytes";
                li.appendChild(info);
            }
            // call external function
            this.props.onChange({ filesURL })
        }
    };

    render() {

        return (
            <div>
              <input type="file" id="fileElem" multiple accept="image/*" onChange={this.onChange}/>
              <div id="fileList">
                <p>No files selected!</p>
              </div>
            </div>
        )
    }
}

export default FileSelect;