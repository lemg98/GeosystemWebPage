export async function fetchBuses(choferes){

    var auxArray = [];
    for(var chofer of choferes) {
        await chofer.get()
        .then(function(doc){
            //auxArray.push(doc.data().Posicion);
            auxArray.push(doc.data().Nombre);
        })
        .catch(function(error) {
                alert("Carga erronea de datos de autobuses.");
        })
    }
    return auxArray;
}