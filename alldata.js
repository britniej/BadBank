function AllData() {
    const ctx = React.useContext(UserContext);
    const users = ctx.users;
    return(
        <>
        All Data 
        {JSON.stringify(ctx)}
            <table class="table">
            <thead>
              <tr>
              <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{users[0].name}</th>
                <td>{users[0].email}</td>
                <td>{users[0].password}</td>
                <td>{users[0].balance}</td>
              </tr>
              <tr>
                <th scope="row">{users[1].name}</th>
                <td>{users[1].email}</td>
                <td>{users[1].password}</td>
                <td>{users[1].balance}</td>
              </tr>
              <tr>
                <th scope="row">{users[2].name}</th>
                <td>{users[2].email}</td>
                <td>{users[2].password}</td>
                <td>{users[2].balance}</td>
              </tr>
            </tbody>
          </table>
          </>
    ); 
 }
