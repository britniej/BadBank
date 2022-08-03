function Home() {
    return(
        <Card
            bgcolor="info"
            txtcolor="white"
            header="BadBank Landing Page"
            title="Welcome to the Bank"
            text="You can use this bank"
            body={<img src="bank.png" className="img-fluid" alt="Responsive image"/>}
        />
    );
}