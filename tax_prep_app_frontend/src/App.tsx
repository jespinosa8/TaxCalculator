import '@trussworks/react-uswds/lib/index.css'
import { Grid, PrimaryNav } from '@trussworks/react-uswds'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import TaxSummary from './pages/TaxSummary';
import W2Page from './pages/W2Page';
import Page1099 from './pages/Page1099';
import PersonalInformation from './pages/PersonalInformation';
import Login from './pages/Login';

function App() {

    const navItems = [

        // creating a list of react-router-dom Links to pass to our navbar
        <Link to='/'>Home</Link>,
        <Link to='/tax-summary'>Tax Summary</Link>,
        <Link to='/add-w2'>Add W-2</Link>,
        <Link to='/add-1099'>Add 1099</Link>,
        <Link to='/personal-info'>Personal Information</Link>,
        <Link to='/login'>Log Out</Link>
    ];

    return (
        <>
        <BrowserRouter basename='/'>
            <Grid row>
                <PrimaryNav className='bg-primary' items={navItems}/>
            </Grid>

            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/tax-summary' element={<TaxSummary />}/>
                <Route path='/add-w2' element={<W2Page />}/> 
                <Route path='/add-1099' element={<Page1099/>}/> 
                <Route path='/personal-info' element={<PersonalInformation />}/>            
                <Route path='/login' element={<Login />}/>            
            </Routes>

        </BrowserRouter>        
        
        <Home/>
        </>
    )
}

export default App
