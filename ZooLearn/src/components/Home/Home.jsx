 import Header from './header.jsx'
import Banner from './banner.jsx'
import ZooFooter from './ZooFooter.jsx' 
import TaxonomyPage from './TaxonomyPage.jsx'
import HomePage from './HomePage.jsx'
 
 
 function Home() {
     return(
        <div className='Home_Page'>
            
             <nav> <Header /></nav>
            <Banner /> 
            <HomePage  />
              
         <footer><ZooFooter /> </footer>
        
    
        </div>
     )
 }

 export default Home