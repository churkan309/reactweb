import Header from '../header'
import Navar from '../navbar'
import Contact from '../contact'

const LeftSection = () => {
    return (
        <div className='px-5'>
        <div className='sticky top-0 grid gap-y-5 lg:grid-rows-[35%_40%_20%] h-[90vh]'>
          <Header />
          <Navar />
          <Contact />
        </div>
      </div>
    )
}

export default LeftSection