
const managerSection = function (manager) {
    return  ``;

}

const engineerSection = function (engineer) {
    return `
    `;

}

const internSection = function (intern) {
    return `
<div class="col-xs-2 col-sm-3 py-2">
    <div class="card" style="width: 18rem;">
        <div class="card-header custom-background-color ">
            <h4>${intern.name}</h4>
            <p><i class="fas fa-graduation-cap"></i> Intern</p>
        </div>

        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID:${intern.id} </li>
                <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>
</div>  
    `;

}

const generateHTML = function (team) {


 }

// Here the function of generateHTML is exported 
module.exports = generateHTML