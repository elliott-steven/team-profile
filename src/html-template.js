const createCard = userData => {

    const manager = userData.manager.map(function(job) {
        
        let managerCard = `
        <div class="card">
            <h1>${job.name}</h1>
            <h3>Manager</h3>
            <p>ID: ${job.id}</p>
            <p>Email: <a href="mailto:${job.email}">${job.email}</a></p>
            <p>Office Number: ${job.officeNumber}</p>
        </div>
        `

        return managerCard
    });

    const engineer = userData.engineer.map(function(job) {
        
        let engineerCard = `
        <div class="card">
            <h1>${job.name}</h1>
            <h3>Engineer</h3>
            <p>ID: ${job.id}</p>
            <p>Email: <a href="mailto:${job.email}">${job.email}</a></p>
            <p>GitHub: <a href="https://github.com/${job.github}">@${job.github}</a></p>
        </div>
        `
        
        return engineerCard
    });

    const intern = userData.intern.map(function(job) {
        
        let internCard = `
        <div class="card">
            <h1>${job.name}</h1>
            <h3>Intern</h3>
            <p>ID: ${job.id}</p>
            <p>Email: <a href="mailto:${job.email}">${job.email}</a></p>
            <p>School: ${job.school}</p>
        </div>
        `
        
        return internCard
    });

}

module.exports = templateData => {

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
        <link rel="stylesheet" type="text/css" href="./src/style.css">
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        ${createCard(templateData)}
    </body>
    </html>
    `
}