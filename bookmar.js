// code from the bookmark
videos = document.getElementsByTagName("video");
if( videos.length > 0 ){
    videos[0].disablePictureInPicture = false;
    videos[0].requestPictureInPicture();
}
iframeVidInPage = document.getElementsByTagName("iframe"); 
if( !iframeVidInPage.length ){
    alert("No se localizó el video");
}
for( let i = 0; i < iframeVidInPage.length; i++ ){
    let innerDoc = iframeVidInPage[i].contentDocument || iframeVidInPage[i].contentWindow.document; 
    let VidInWebPage = innerDoc.getElementsByTagName("video");  
    if( VidInWebPage.length > 0 ){
        VidInWebPage[0].disablePictureInPicture = false; 
        VidInWebPage[0].requestPictureInPicture();
        break;
    }
}
