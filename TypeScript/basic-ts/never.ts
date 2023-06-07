function error(message: string): never{
    throw new Error();
}

function fail(){
    return error("failed");
}

function infiniteLoop(): never{
    while(true){
        
    }
}