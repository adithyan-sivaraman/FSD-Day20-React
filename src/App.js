
import './bootstrap.min.css';
import './App.css'


function App() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          
          <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
                <h6 className="card-price text-center">$0<span className="period">/month</span></h6>
                <hr />
                
                
                <div className='flex flex-row'><span className='material-icons'>done</span><p>Single User</p></div>
                <div className='flex flex-row'><span className='material-icons'>done</span><p>5GB Storage</p></div>
                <div className='flex flex-row'><span className='material-icons'>done</span><p>Unlimited Public Projects</p></div>
                <div className='flex flex-row'><span className='material-icons'>done</span><p>Community Access</p></div>
                <div className='flex flex-row'><span className='material-icons'>close</span><p className="text-muted">Unlimited Private Projects</p></div>
                <div className='flex flex-row'><span className='material-icons'>close</span><p className="text-muted">Dedicated Phone Support</p></div>
                <div className='flex flex-row'><span className='material-icons'>close</span><p className="text-muted">Free Subdomain</p></div>
                <div className='flex flex-row'><span className='material-icons'>close</span><p className="text-muted">Monthly Status Reports</p></div>
                  
                
                <div className="d-grid">
                  <button className="btn btn-primary text-uppercase">Button</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
                <h6 className="card-price text-center">$9<span className="period">/month</span></h6>
                <hr />
                
                
                  <div className='flex flex-row'><span className='material-icons'>done</span><p><strong>5 Users</strong></p></div>
                  <div className='flex flex-row'><span className='material-icons'>done</span><p>50GB Storage</p></div>
                  <div className='flex flex-row'><span className='material-icons'>done</span><p>Unlimited Public Projects</p></div>
                  <div className='flex flex-row'><span className='material-icons'>done</span><p>Community Access</p></div>
                  <div className='flex flex-row'><span className='material-icons'>done</span><p>Unlimited Private Projects</p></div>
                  <div className='flex flex-row'><span className='material-icons'>done</span><p>Dedicated Phone Support</p></div>
                  <div className='flex flex-row'><span className='material-icons'>done</span><p >Free Subdomain</p></div>
                  <div className='flex flex-row'><span className='material-icons'>close</span><p className="text-muted">Monthly Status Reports</p></div>
                    
                <div className="d-grid">
                <button className="btn btn-primary text-uppercase">Button</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
                <h6 className="card-price text-center">$49<span className="period">/month</span></h6>
                <hr />
                
                <div className='flex flex-row'><span className='material-icons'>done</span><p><strong>Unlimited Users</strong></p></div>
                <div className='flex flex-row'><span className='material-icons'>done</span><p>150GB Storage</p></div>
                <div className='flex flex-row'><span className='material-icons'>done</span><p>Unlimited Public Projects</p></div>
                <div className='flex flex-row'><span className='material-icons'>done</span><p>Community Access</p></div>
                <div className='flex flex-row'><span className='material-icons'>done</span><p>Unlimited Private Projects</p></div>
                <div className='flex flex-row'><span className='material-icons'>done</span><p>Dedicated Phone Support</p></div>
                <div className='flex flex-row'><span className='material-icons'>done</span><p ><strong>Unlimited Free Subdomains</strong></p></div>
                <div className='flex flex-row'><span className='material-icons'>done</span><p>Monthly Status Reports</p></div>
                
                <div className="d-grid">
                <button className="btn btn-primary text-uppercase">Button</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
