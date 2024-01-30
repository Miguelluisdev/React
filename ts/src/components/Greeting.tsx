type gretingProps = {
  name: string;
}

const Greeting = ({ name }: gretingProps) => {
  return (
    <div>Greeting {name}</div>
  )
}

export default Greeting