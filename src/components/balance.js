import '..css/balance.css';

function BudgetBalance () 
{
    return (
        <div>
            <h4>Your Balance</h4>
            <h2>R4000</h2>

            <div className="balance">
                <div>
                    <h3>Income</h3>
                    <h3>R12000</h3>
                </div>
                <div className="line"></div>
                <div>
                    <h3>Expenses</h3>
                    <h3 style={{color:"red"}}>8000</h3>
                </div>
            </div>
        </div>
    );
}