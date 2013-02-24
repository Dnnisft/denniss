module.exports = function(app) {

    //Pagina de inicio
    app.get('/', function(req, res) {        
        res.render('index', { title: 'Bienvenidos al mundo de Android  ' })
    });

    // Acerca de
    app.get('/about', function(req, res) {
        res.render('about', { title: 'Acerca de Nosotros.  ' })
    });    

    // Pagina novedades
    app.get('/novedades', function(req, res) {        
        res.render('novedades', { title: 'Novedades. ' })
    });

    // Pagina intereses
    app.get('/intereses', function(req, res) {        
        res.render('intereses', { title: 'Intereses.  ' })
    });
// Pagina Aplicaciones
    app.get('/aplicaciones', function(req, res) {        
        res.render('aplicaciones', { title: 'Aplicaciones.  ' })
    });

    //Pagina para el juego Monster Shooter
    app.get('/MonsterShooter', function(req, res) {        
        res.render('MonsterShooter', { title: 'MonsterShooter. Pura Diversion en la Palma de tu Mano.  ' })
    });

    //Pagina para el juego Major Mayhem
    app.get('/major', function(req, res) {        
        res.render('major', { title: 'Major Mayhem, salva al amor de tu vida disparando sin cesar.' })
    });

    //Pagina para el juego Temple Run 2
    app.get('/templerun2', function(req, res) {        
        res.render('templerun2', { title: 'Temple Run 2 ya disponible en Google Play.' })
    });
}

