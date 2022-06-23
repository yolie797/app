import '../css/balance.css'

function BudgetBalance(props) 
{
    return (
        <div style={{marginTop:"5%"}}>
            <h4>Your Balance</h4>
            <h2>R {props.income-props.expense}</h2>

            <div className="balance">
                <div>
                    <h3>Income</h3>
                    <h3 style={{color:"green"}}>{props.income}</h3>
                </div>


                <div className="line"></div>
                <div>
                    <h3>Expenses</h3>
                    <h3 style={{color:"red"}}>{props.income}</h3>
                </div>
            </div>
        </div>
    );
}

export {BudgetBalance};