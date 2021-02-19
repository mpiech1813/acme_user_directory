const render = ({ users, usersList, curr }) => {
  const html = `
        ${users
          .map((user, idx) => {
            return `
                <li><a href='#${idx + 1}'>${user.name}</a>
                    <ul>
                    ${curr === idx + 1 ? `${user.email}` : ``}
                    </ul>
                </li>
            `;
          })
          .join('')}
        `;
  console.log(users);
  usersList.innerHTML = html;
};

module.exports = render;
