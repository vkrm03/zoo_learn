 import Header from './header.jsx'
import Banner from './banner.jsx'
import ZooFooter from './ZooFooter.jsx' 
import TaxonomyPage from './TaxonomyPage.jsx'
import HomePage from './HomePage.jsx'
 
 
 function Home() {
     return(
        <div className='Home_Page'>
            
             <HomePage />
            <Header />

            <TaxonomyPage />
            <ZooFooter />
            
    
        </div>
     )
 }

 export default Home