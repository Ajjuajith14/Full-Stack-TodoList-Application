import './App.css';
// import LearningComponent from './components/learnings/LearningComponent'
//import CounterButton from './components/Counters/Counter';
import TodoApp from './components/todo/todos';

function App()
{
  return(
    <div className="App">
      <TodoApp/>
      


      {/* <LearningComponent/> */}
    </div>
  )
}

// function props(property1,property2)
// {
//   console.log(property1)
//   console.log(property2)

//   return <div>props</div>
// }


export default App;
