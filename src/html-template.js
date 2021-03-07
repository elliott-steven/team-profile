//creates a card for each element using the userData entered by prompts
const createCard = userData => {

    const manager = userData.manager.map(function(card) {
        
        let managerCard = `
        <div class="card border-primary mb-3" style="max-width: 18rem;">
            <h1 class="name">${card.name}</h1>
            <h3 class="title">Manager</h3>
            <p>ID: ${card.id}</p>
            <p>Email: <a href="mailto:${card.email}">${card.email}</a></p>
            <p>Office Number: ${card.officeNumber}</p>
        </div>
        `

        return managerCard
    });

    const engineer = userData.engineer.map(function(card) {
        
        let engineerCard = `
        <div class="card border-secondary mb-3" style="max-width: 18rem;">
            <h1 class="name">${card.name}</h1>
            <h3 class="title">Engineer</h3>
            <p>ID: ${card.id}</p>
            <p>Email: <a href="mailto:${card.email}">${card.email}</a></p>
            <p>GitHub: <a href="https://github.com/${card.github}">@${card.github}</a></p>
        </div>
        `
        
        return engineerCard
    });

    const intern = userData.intern.map(function(card) {
        
        let internCard = `
        <div class="card border-warning mb-3" style="max-width: 18rem;">
            <h1 class="name">${card.name}</h1>
            <h3 class="title">Intern</h3>
            <p>ID: ${card.id}</p>
            <p>Email: <a href="mailto:${card.email}">${card.email}</a></p>
            <p>School: ${card.school}</p>
        </div>
        `
        
        return internCard
    })
    return [manager,engineer,intern]
}

module.exports = templateData => {
    //console.log(templateData);

    //template for the output file
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <!--Make the page responsive-->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <!--This is the bootstrap cdn-->
        <link rel="stylesheet" type="text/css"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css">
        <!--I like this font-->
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
        <!-- This is my stylesheet-->
        <link rel="stylesheet" type="text/css" href="../src/style.css">
    </head>
    <body>
        <header>
            <h1 class="head">My Team</h1>
        </header>
        <div class="container">
            <div class="card-group">
            ${createCard(templateData)}
            </div>
        </div>
    </body>
    </html>
    `
}