import AddItem from "./addItems";
//import DisplayTransation from '//displayTransaction';


function Home(props)
{
    return (
        <div >
      {/*<DisplayTransation list={props.list}/>*/}
      <AddItem  add={props.add}/>
        </div>
    )
}
export default Home;



