export async function fetchBuses(choferes){

    var coords = [];
    var names = [];
    for(var chofer of choferes) {
        await chofer.get()
        .then(function(doc){
            var {latitude, longitude} = doc.data().Posicion;
            var { Nombre } = doc.data();
            coords.push([latitude, longitude]);
            names.push(Nombre);
        })
        .catch(function(error) {
                alert("Carga erronea de datos de autobuses.");
        })
    }
    return {coords: coords, names: names};
}