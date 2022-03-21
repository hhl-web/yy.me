
function useImgs(){
    const getAssetsFile =(imgUrl:string)=>{
        return new URL(`/src/assets/imgs/${imgUrl}`,import.meta.url).href
    }
    return {
        getAssetsFile
    }
}

export default useImgs;