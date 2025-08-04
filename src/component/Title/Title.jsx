import './title.css'
const Title = ({title1,title2,style1,style2,disc}) => {
  return (
    <div className='title' >
      <h2 style={style1}>{title1} <span style={style2}>{title2}</span></h2>
        <p>{disc}</p>
    </div>
  )
}

export default Title
