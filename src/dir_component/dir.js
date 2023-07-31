import React, { useState } from 'react';
import folder_img from './images/folder_img_01.png'
import file_img from './images/file_img_01.png'
import ('./directory.css');




const Root_data_manager = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [newFileName, setNewFileName] = useState('');
  const [isInput_Expanded_File,setIsInputExpandedFile]=useState(false);
  const [isInput_Expanded_Folder,setIsInputExpandedFolder]=useState(false);

  
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

 const handleInputFileToggle=()=>{
  setIsInputExpandedFile(!isInput_Expanded_File);
 }
 const handleInputFolderToggle=()=>{
  setIsInputExpandedFolder(!isInput_Expanded_Folder);
 }
  const handleAddFolder = () => {
    if (newFolderName!== '') {
      const newFolder = {
        id: Date.now().toString(),
        name: newFolderName,
        isFolder: true,
        items: [],
      };
      data.items.push(newFolder);
      setNewFolderName('');
    }
  };

  const handleAddFile = () => {
    if (newFileName!== '') {
      const newFile = {
        name: newFileName,
        isFolder: false,
        items: [],
      };
      data.items.push(newFile);
      setNewFileName('');
    }
    setIsInputExpandedFile(!isInput_Expanded_File);
  };

  return (
    <ul style={{listStyleType:"none"}} class="section_body">
      <li>
        <div class='list_item'>
        <img class="folder_img_class" alt='folder_image' src={folder_img} onClick={handleToggle}></img>
        <span>{data.name}</span>
        <button class="btn" onClick={()=>{ handleInputFolderToggle();handleAddFolder()}}>Add Folder</button>
        <button class="btn" onClick={()=>{ handleInputFileToggle(); handleAddFile()}}>Add File</button>
        </div>
    
     {  isInput_Expanded_Folder?
        <li>
        <img src={folder_img} class="folder_img_class"></img>  
        <input
          type="text"
          value={newFolderName}
          onChange={(e) => setNewFolderName(e.target.value)}
          placeholder="Folder Name"
        /></li>:''
     }
     {   
          isInput_Expanded_File?
        <li>  
        <img src={file_img} class='file_img_class'></img>  
        <input id={data.items.id}
         type="text"
          value={newFileName}
          onChange={(e) => setNewFileName(e.target.value)}
          placeholder="File Name"
        /></li>:''
     }

       
      </li>
      {isExpanded && data.items.map((item) => (
        <li key={item.id} class="file_section">
          {
          !item.isFolder?<li class="list_item_01"><img src={file_img} alt='file_image'class="img_class"></img><span>{item.name}</span></li> :''                    
          }
          {item.isFolder ? (
            <Root_data_manager data={item} />
          ) : (
            ''
          )}
        </li>
      ))}
    </ul>
  );
};

export default Root_data_manager;
