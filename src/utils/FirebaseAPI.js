import {db} from "../ConfigFirebase";

export async function fetchRoutes(){
    var routes = [];
    await db.collection("rutas")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc){
            var data = doc.data();
            routes.push({...data, id: doc.id});
        });
    })
    .catch(function(error) {
        alert("No se pudo cargar los datos");
    });
    routes.sort(function(a,b){
        if (a['Nombre'].toString().toLowerCase() < b['Nombre'].toString().toLowerCase()) return -1;
        if (a['Nombre'].toString().toLowerCase() == b['Nombre'].toString().toLowerCase()) return 0;
        if (a['Nombre'].toString().toLowerCase() > b['Nombre'].toString().toLowerCase()) return 1;
    });
    return routes;
}

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

