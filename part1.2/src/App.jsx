const App = () => {
  return (
  <div>
<Header/>
<Content/>
<Total/></div>
)
}

const Header  = () => {
  const course = 'Half Stack application development'

    return (
      <div>
        <h1>{course}</h1>
      </div>
    )

}

const Content  = () => {



  return (
    <div>
        <Part part='Fundamentals of React' exercise="10"/>    
        <Part part='Using props to pass data' exercise="7"/>    
        <Part part='State of a component' exercise="14"/>    

    </div>
  )}

  const Part  = (props) => {

    return (
      <div>
        <p>
          {props.part} {props.exercise}
        </p>
  
      </div>)

  }


const Total  = () => {

  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <p>Number of exercises {exercises1  + exercises2 + exercises3}</p>
    </div>
  )

}

export default App