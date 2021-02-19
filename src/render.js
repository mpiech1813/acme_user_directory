const render = ({ users, usersList }) => {
  const html = `
        ${users
          .map((user, idx) => {
            return `
                <li><a href='${idx}'>${user.name}</a></li>
            `;
          })
          .join('')}
        `;
  usersList.innerHTML = html;
};

module.exports = render;
