import Social from './Social'


function Footer() {
    const footerYear = new Date().getFullYear()




  return (
    <footer className='footer p-0 bg-neutral-content text-primary-content footer-center'>
    
    <div>
      <Social />
       
        <p>Copyright &copy; {footerYear} All rights reserved</p>
        <p>Created by @4lexmendez</p>

    </div>
    </footer>
  )
}

export default Footer