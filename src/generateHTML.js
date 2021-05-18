
const htmlMemberSection = function (employee) {

    const role = employee.getRole();
    let fontIcon = '';
    let extraInfo = '';
    if (role === "Manager") {
        fontIcon = `<i class="fas fa-chart-bar"></i>`;
        extraInfo = `
                            <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
        `;
    } else if (role === "Engineer") {
        fontIcon = `<i class="fas fa-laptop-code"></i>`;
        extraInfo = `
                            <li class="list-group-item">Github: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a> </li>
        `;
    } else {
        fontIcon = `<i class="fas fa-graduation-cap"></i>`;
        extraInfo = `
                            <li class="list-group-item">School: ${employee.getSchool()}</li>
        `;
    }

    let htmlMemberSection =  `
            <div class="col-xs-2 col-sm-3 py-2">
                <div class="card" style="width: 18rem;">
                    <div class="card-header custom-background-color ">
                        <h4>${employee.getName()}</h4>
                        <p>${fontIcon} ${role}</p>
                    </div>

                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${employee.getId()} </li>
                            <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                            ${extraInfo}
                        </ul>
                    </div>
                </div>
            </div>  
    `;
    return htmlMemberSection;
}

const generateHTML = function (team) {
    let memberSection = '';
    team.forEach(employee => {
        memberSection += htmlMemberSection(employee);
    });
    const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="assets/css/reset.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/css/style.css" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <link rel="shortcut icon" href="./assets/img/favicon.ico" type="image/x-icon">
    <link rel="icon" href="./assets/img/favicon.ico" type="image/x-icon">
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"></script>
</head>

<body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
            <div class="container-fluid justify-content-center">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <h1 class="custom-text-color ">My Team</h1>
            </div>
        </nav>
    </header>
    <main>
        <div class="container-fluid">
            <div class="row p-3 ">
                <div class="col-sm-12">
                    <div class="row pt-4">
                    ${memberSection}                     
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer class="pt-4 my-md-5 pt-md-5">
        <div class="row">
            <div class="col-12 text-center">
                <small class="d-block mb-3 custom-text-color ">&copy; 2021 German Ramirez.</small>
            </div>
        </div>
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
        crossorigin="anonymous"></script>
</body>

</html>
    `;
    return htmlTemplate;
 }

// Here the function of generateHTML is exported 
module.exports = generateHTML