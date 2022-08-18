function CreateAccount({alert}) {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState("");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const ctx = React.useContext(UserContext);
  
    function clearForm() {
      setName("");
      setEmail("");
      setPassword("");
      setShow(true);
    }
  
    function validate(field, label) {
      let valid = true;
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(()=> setStatus(''),3000);
        return false
      }
      if (label == 'name') {
        valid = field.length >= 2;
        setStatus(valid ? '': "Please enter valid name that is 2 character or more.")
      }
      if (label == 'email') {
        valid = String(field).toLowerCase().match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        setStatus(valid ? '': "Please enter valid email. Ex: JaneDoe@google.com.")
      }
      if (label == 'password') {
        valid = field.length >= 8;
        setStatus(valid ? '': "Please enter valid password that is 8 characters or more.")
      }
      if (!valid) {
        console.log(status);
        return false;
      } else {
        return true;
      }
    };
    
  
    function handleCreate() {
      console.log(name, email, password);
      if (!validate(name,     'name'))     return;
      if (!validate(email,    'email'))    return;
      if (!validate(password, 'password')) return;
      ctx.users.push({ name, email, password, balance: 100 });
      setShow(false);
    }

  
    return (

      <Card
        bgcolor="warning"
        header="Create Account"
        status={status}
        body={
          show ? (
            <>
              Name
              <br />
              <input
                type="input"
                className="form-control"
                id="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
              <br />
              Email address
              <br />
              <input
                type="input"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
              <br />
              Password
              <br />
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
              <br />
              <button
                id="submit"
                type="submit"
                className="btn btn-light"
                disabled={!name || !email || !password}
                onClick={handleCreate}
              >
                Create Account
              </button>
            </>
          ) : (
            <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>
                Add another account
              </button>
            </>
          )
        }
      />
    );
  }
  