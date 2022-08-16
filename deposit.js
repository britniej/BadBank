
function Deposit() {
  const ctx = React.useContext(UserContext);
  const user = ctx.users[0].name;
  const [balance, setBalance] = React.useState("");
  const [deposit, setDeposit] = React.useState("");
  const [show, setShow] = React.useState(true);

  function clearForm() {
    setDeposit("");
    setShow(true);
  }

  function handleDeposit() {
    let deposit = document.getElementById("deposit").value;
    if (deposit > 0 && !isNaN(deposit)) {
        user.balance += deposit = balance;
        setBalance({balance});
        console.log(balance);
    } else {
        alert("Deposit must be a positive number!");
    }
  }
  return (
    <Card
      bgcolor="primary"
      header="Deposit"
      //status={status}
      body={
        show ? (
          <>
            <br />
            Deposit Amount
            <br />
            <input
              type="number"
              className="form-control"
              id="deposit"
              placeholder="0.00"
              value={deposit}
              onChange={(e) => setDeposit(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              disabled={!deposit}
              onClick={handleDeposit}
            >
              Deposit
            </button>
          </>
        ) : (
          <>
            <h3>Successful deposit transaction!</h3>
            <br />
            <h5>New balance is user.balance</h5>

            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Add another account
            </button>
          </>
        )
      }
    />
  );
}
