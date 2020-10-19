const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db =>{
    // Inserir dados na tabela
    /*await db.run(`
        INSERT INTO orphanages(
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-27.2192089",
            "-49.6590542",
            "Lar das meninos",
            "Presta assistência a crianças de 06 a 15 ano que se encontre em situação de risco e/ou vulnerabilidade social ",
            "84439183948"
            "https://images.unsplash.com/photo-1554312879-371d7377dea0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar",
            "Horário de visitas das 18h as 8h",
            "0"

        );
    `)*/

    await saveOrphanage(db, {
        lat: "-27.2192089",
        lng: "-49.6690542",
        name: "Lar das meninos",
        about: "Presta assistência a crianças de 06 a 15 ano que se encontre em situação de risco e/ou vulnerabilidade social ",
        whatsapp: "83249129381",
        images: [

            "https://images.unsplash.com/photo-1554312879-371d7377dea0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1585338927000-1c787b17eb5e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),

        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas das 18h as 8h",
        open_on_weekends: "1"
        }
    )

    // Consutar dados da tabela
    const selectedOrphanages =   await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // Consutar somente 1 orfanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

    // Remover um dado da tabela
    //console.log(await db.run("DELETE FROM orphanages WHERE  id = '4'"))    
})