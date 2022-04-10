import APPCONFIG from '@/app/config'
export const blobToBase64=(blob:any)=>{
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = (e:any) => {
          console.log(e.target)
        resolve(e.target.result);
      };
      fileReader.readAsDataURL(blob);
      fileReader.onerror = () => {
        reject(new Error('文件流异常'));
      };
    });
}

export const cdnImgUrl =(url:any)=>{
  const path = url && url.substring(url.lastIndexOf('/')+1) || '';
  return `https://cdn.jsdelivr.net/gh/${APPCONFIG.getHubOwner}/${APPCONFIG.getHubRepo}/${path}`
}


