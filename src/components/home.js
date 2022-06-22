import AddItem from "./addItems";
import {DisplayTransaction} from "./displayTransaction"
import {BudgetBalance} from './balance'


function Home(props)
{
    return (
        <div className="container">
            <BudgetBalance/>
      {/*<DisplayTransaction list={props.transaction}/>*/}
       <AddItem  add={props.addTransaction}/>
        </div>
    );
}
export default Home;



