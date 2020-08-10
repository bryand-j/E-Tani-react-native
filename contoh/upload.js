// /**
//  * Contoh Upload Gambar
//  * @rey1024
//  */
// import React, { Component } from 'react';
// import {
//   StyleSheet, Text, View, Button, Alert, Image, ActivityIndicator,Modal
// } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
// export default class App extends Component{
//     constructor(props) {
//       super(props);
//       this.state = {
//                     srcImg: '',
//                     uri: '',
//                     fileName: '',
//                     loading: false,
//                    };
//     }
//   choosePicture = () =&gt; {
//       var ImagePicker = require('react-native-image-picker');
//       var options = {
//           title: 'Pilih Gambar',
//           storageOptions: {
//             skipBackup: true,
//             path: 'images'
//           }
//       };
//       ImagePicker.showImagePicker(options, (response) =&gt; {
//           console.log('Response = ', response);
//           if (response.didCancel) {
//             console.log('User cancelled image picker');
//           }
//           else if (response.error) {
//             console.log('ImagePicker Error: ', response.error);
//           }
//           else if (response.customButton) {
//             console.log('User tapped custom button: ', response.customButton);
//           }
//           else {
//             console.log(response.fileName);
//             this.setState({
//               srcImg: { uri: response.uri },
//               uri: response.uri,
//               fileName: response.fileName
//             });
//           }
//       });
//   };
//   uploadPicture = () =&gt; {
//     console.log('mulai upload');
//     this.setState  ({loading : true })
//     const data = new FormData();
//     //data.append('id', 'id apa saja'); // you can append anyone.
//     data.append('fileToUpload', {
//       uri: this.state.uri,
//       type: 'image/jpeg',
//       name: this.state.fileName,
//     });
//     const url= "http://wadaya.rey1024.com/api/uploadimg.php"
//     fetch(url, {
//       method: 'post',
//       body: data
//     })
//     .then((response) =&gt; response.json())
//     .then((responseJson) =&gt;
//       {
//         console.log(responseJson);
//         this.setState  ({
//             loading : false
//            })
//       });
//   }
//   render() {
//     return (
//       {
//           (this.state.loading===true)&amp;&amp;
//              (
//                      {
//                           alert('Modal has been closed.');
//                         }}
//                         &gt;
//             )
//         }
//           Contoh Upload Foto
//          {(this.state.srcImg!='') &amp;&amp;
//             ()
//          }
//           <button> this.choosePicture()
//             }
//             title="Pilih Foto"
//           /&gt;
//           </button><button> this.uploadPicture()
//             }
//             title="Upload Foto"
//           /&gt;
//           </button>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   conMain : {
//     flex:1
//   },
//   conHeader : {
//     flex:1,
//     backgroundColor: '#6200EE',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   textHeader : {
//     fontSize: 20,
//     color :'white'
//   },
//   conPreview: {
//     flex:8,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   conButton: {
//     flex:1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-around'
//   },
//   uploadAvatar: {
//     height: 400,
//     width: 400
//   },
//   indicator: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 80
//   }
// });