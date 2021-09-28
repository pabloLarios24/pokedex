
export async function httpRequest( request ){
    let getAct = await fetch(request)
    try{
        let data = await getAct.json()
        if(!data.error && data){
            return data
          }else{
              return false
          }   
    }catch( err ){
        return {
            code: 500
        }
    }
    
}
