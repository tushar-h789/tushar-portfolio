import client from '../../assets/icone/client.png'
import coffee from '../../assets/icone/coffee-cup.png'
import projects from '../../assets/icone/project.png'

const HappyClients = () => {
  return (
    <div className='bg-primary'>
    <div className="md:max-w-screen-xl mx-auto my-20 py-20 text-center md:text-start text-white md:flex items-center ">
        <div className='md:w-1/3 md:flex items-center gap-4 '>
            <div >
                <img src={client} alt="client" width={100} height={100} className='mx-auto my-4'/>
            </div>
            <div className='text-2xl font-bold'>
                <p>3,000</p>
                <p className="uppercase">Happy Customer</p>
            </div>
        </div>
        <div className='md:w-1/3 md:flex items-center gap-4 my-20 md:my-0'>
            <div>
                <img src={projects} alt="client" width={100} height={100} className='mx-auto my-4'/>
            </div>
            <div className='text-2xl font-bold'>
                <p>320</p>
                <p className="uppercase">PROJECT COMPLETED</p>
            </div>
        </div>
        <div className='md:w-1/3 md:flex items-center gap-4'>
            <div>
                <img src={coffee} alt="client" width={100} height={100} className='mx-auto my-6'/>
            </div>
            <div className='text-2xl font-bold'>
                <p>1,000</p>
                <p className="uppercase">CUPS OF COFFEE</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default HappyClients