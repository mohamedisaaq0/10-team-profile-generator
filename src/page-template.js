module.exports = (employeeArr) => {
  const { name, id, email, role, officeNumber } = employeeArr.manager;

  return `
   <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="../dist/styles.css" />
      <title>Team Profiles</title>
    </head>
    <body>
      <header>
        <h1>My Team</h1>
      </header>
      <main>
        <div id="team-container">
          <div id="employee-card">
            <div id="head-container">
              <div id="card-head">
                <h3>${name}</h3>
                <div id="role">
                  <img
                    src="../dist/images/manager-icon.png"
                    alt="Icon of a coffee cup"
                  />
                  <h4>${role}</h4>
                </div>
              </div>
            </div>
            <div id="card-body">
              <div id="body-container">
                <p id="ID">ID: ${id}</p>
                <hr />
                <p id="body-email">
                  <a href="mailto:${email}">${email}</a>
                </p>
                <hr />
                <p id="body-info">Office Number: ${officeNumber}</p>
              </div>
            </div>
          </div>
          ${employeeArr.engineer
            .map((engineer) => {
              return `<div id="employee-card">
            <div id="head-container">
              <div id="card-head">
                <h3>${engineer.name}</h3>
                <div id="role">
                  <img
                    src="../dist/images/engineer-icon.png"
                    alt="Icon of a gear"
                  />
                  <h4>${engineer.role}</h4>
                </div>
              </div>
            </div>
            <div id="card-body">
              <div id="body-container">
                <p id="ID">ID: ${engineer.id}</p>
                <hr />
                <p id="body-email">
                  <a href="mailto:${engineer.email}">${engineer.email}</a>
                </p>
                <hr />
                <p id="body-info">
                  <a
                    href="https://github.com/${engineer.github}"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Github link</a
                  >
                </p>
              </div>
            </div>
          </div>`;
            })
            .join(" ")} 
          ${employeeArr.intern
            .map((intern) => {
              return `<div id="employee-card">
            <div id="head-container">
              <div id="card-head">
                <h3>${intern.name}</h3>
                <div id="role">
                  <img
                    src="../dist/images/intern-icon.png"
                    alt="Icon of a graduation hat"
                  />
                  <h4>${intern.role}</h4>
                </div>
              </div>
            </div>
            <div id="card-body">
              <div id="body-container">
                <p id="ID">ID: ${intern.id}</p>
                <hr />
                <p id="body-email">
                  <a href="mailto:${intern.email}">${intern.email}</a>
                </p>
                <hr />
                <p id="body-info">School: ${intern.school}</p>
              </div>
            </div>
          </div>`;
            })
            .join(" ")} 
        </div>
      </main>
    </body>
  </html>
    `;
};
