function generateCards(teamMembers) {
    const cards = teamMembers.map((member) => {
      const { name, id, email } = member;
      let memberInfo = '';
  
      if (member.role === 'Manager') {
        memberInfo = `Office Number: ${member.officeNumber}`;
      } else if (member.role === 'Engineer') {
        memberInfo = `GitHub: <a href="https://github.com/${member.github}">${member.github}</a>`;
      } else if (member.role === 'Intern') {
        memberInfo = `School: ${member.school}`;
      }
  
      return `
        <div class="card">
          <div class="card-header">
            <h2>${name}</h2>
            <h3>${member.role}</h3>
          </div>
          <div class="card-body">
            <ul>
              <li>ID: ${id}</li>
              <li>Email: <a href="mailto:${email}">${email}</a></li>
              <li>${memberInfo}</li>
            </ul>
          </div>
        </div>
      `;
    });
  
    return `
      <div class="card-container">
        ${cards.join('')}
      </div>
    `;
  }
  
  const createHTML = (teamData) => {
    const cardHTML = generateCards(teamData);
      // generate HTML code for employee card
    
  
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>My Team</title>
          <link rel="stylesheet" href='./style.css'>
        </head>
        <body>
          <header>
            <h1>My Team</h1>
          </header>
          <main>
            <div class="card-container">
              ${cardHTML}
            </div>
          </main>
        </body>
      </html>
    `;
  };

  module.exports = createHTML;
  