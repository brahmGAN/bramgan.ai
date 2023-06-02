import './questions.css'

export default function question ({data}){

    return(
        <>
            <div style={{ display: "flex", justifyContent:"center" ,FlexDirection: "row" }}>
                <p>{data.question}</p>
                <img src={'icons/drop-down.svg'} alt={''} height={'20px'} width={'20px'} />
            </div>
            <div className='expandable'>
                <p>{data.answer}</p>
            </div>
            <hr />
        </> 
    )
}
