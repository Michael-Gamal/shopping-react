import './title.css'
const Title = ({title1,title2,disc}) => {
  return (
    <div className='title' >
      <h2 style={{fontSize: "35px",marginBottom: "15px",}}>{title1} <span style={{fontWeight: 'normal',textDecoration: 'underline', color : 'rgb(255 143 156)'}}>{title2}</span></h2>
        <p>{disc}</p>
    </div>
  )
}

export default Title
