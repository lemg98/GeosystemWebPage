import {db,firebaseApp,firebase} from "../ConfigFirebase";

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


export async function userSignIn(user, setUser, setInvalidEmail, setInvalidPassword, setIsAuthenticated, setData ){
   
   await firebaseApp.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(async function() {
         setInvalidEmail(false);
         setInvalidPassword(false);

         var admin = true;
         var {email} = user;
         await db.collection("admins")
            .where('Email', '==', email)
            .get()
            .then(function(querySnapshot){
               if(!querySnapshot.size){
                  setInvalidEmail(true);
                  admin = false;
               }
               else{
                  setData(querySnapshot.docs[0].data());
               }
            })
            .catch(error => alert('No es posible cargas los usuarios de la base de datos.'));   
         
         if(!admin) return;

         await firebaseApp.auth().signInWithEmailAndPassword(user.email, user.password)
         .then((user) => {
            setUser(user);    
            setIsAuthenticated(true);
            setInvalidEmail(false);
            setInvalidPassword(false);
         })
         .catch((error) => {   
            if (error.code == 'auth/invalid-email' || error.code == 'auth/user-not-found')
               setInvalidEmail(true);
            else if (error.code == 'auth/wrong-password')
               setInvalidPassword(true);
         });  
      })
      .catch(function(error) {
         alert(error.code);
      });

}

export async function userSignOut(setUser, setIsAuthenticated){
   firebaseApp.auth().signOut().then(function() {
      setUser(null);
      setIsAuthenticated(false);
   }).catch(function(error) {
      alert('No pudimos cerrar tu sesión, comprueba tu conexión a internet.');
      alert(error);
   });    
}

export async function getUserState(setData,setIsAuthenticated){
   firebase.auth().onAuthStateChanged(async function(user) {
      if (user) {
        var {email} = user;
        await db.collection("admins")
           .where('Email', '==', email)
           .get()
           .then(function(querySnapshot){
               setData(querySnapshot.docs[0].data());
           })
           .catch(error => alert('No es posible cargas los usuarios de la base de datos.')); 
         setIsAuthenticated(true);
      }
      else setIsAuthenticated(false);
   });
}