
import React, { useState } from 'react';
import Root_data_manager from './dir';
import getData from '../api/get_data';


// static json data  
const json_data_of_root ={
    "id": "1",
    "name": "root",
    "isFolder": true,
    "items": [
      {
        "id": "2",
        "name": "public",
        "isFolder": true,
        "items": [
          {
            "id": "3",
            "name": "public nested 1",
            "isFolder": true,
            "items": [
              {
                "id": "4",
                "name": "index.html",
                "isFolder": false,
                "items": []
              },
              {
                "id": "5",
                "name": "hello.html",
                "isFolder": false,
                "items": []
              }
            ]
          },
          {
            "id": "6",
            "name": "public_nested_file",
            "isFolder": false,
            "items": []
          }
        ]
      },
      {
        "id": "7",
        "name": "src",
        "isFolder": true,
        "items": [
          {
            "id": "8",
            "name": "App.js",
            "isFolder": false,
            "items": []
          },
          {
            "id": "9",
            "name": "Index.js",
            "isFolder": false,
            "items": []
          },
          {
            "id": "10",
            "name": "styles.css",
            "isFolder": false,
            "items": []
          }
        ]
      },
      {
        "id": "11",
        "name": "package.json",
        "isFolder": false,
        "items": []
      }
    ]
  }

const Root = () => {
 // call api and fetch json data

  // const [data,setData]=useState([])
  // getData()
  // .then((res) => {
  //    setData([...res.data.items])
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
  

  return (
    <div>
      <Root_data_manager data={json_data_of_root} />
    </div>
  );
};

export default Root;
