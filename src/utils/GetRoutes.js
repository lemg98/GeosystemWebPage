import {db,firebase} from "../ConfigFirebase";

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
        if (a.toString().toLowerCase() < b.toString().toLowerCase()) return -1;
        if (a.toString().toLowerCase() == b.toString().toLowerCase()) return -1;
        if (a.toString().toLowerCase() > b.toString().toLowerCase()) return -1;
    });

    return routes;
}