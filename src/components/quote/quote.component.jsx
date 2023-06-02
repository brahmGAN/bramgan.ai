import './quote.css'

export default function quote(){
    return(
        <div className='section5Container'>
            <section className='section5'>
                <h1>Get a Quote</h1>
                <div className='details'>
                    <div className='labelcontainer'>
                        <label>First Name</label>
                        <input type='text' className='input' />
                    </div>
                    <div className='labelcontainer'>
                        <label>Last Name</label>
                        < input type='text' className='input' />
                    </div>
                    <div className='labelcontainer'>
                        <label>Email *</label>
                        <input type='text' className='input' />
                    </div>
                    <div>
                        <button className='btn'>Send</button>
                    </div>
                </div>
            </section>
        </div>
    )
}