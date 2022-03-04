
import logoDh from "../assets/images/logo-DH.png"


import '../App.css';


function SideBar() {
  return (
    <div className="App">
              <head>
                    <meta charset="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <title>Dashboard DH-Movies - Admin</title>

                  
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"/>

                  
                    <link href="assets/css/app.css" rel="stylesheet"/>
              </head>
              
              <body>        
              <div id="wrapper">
              <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
                  <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                      <img className="w-100" src={logoDh} alt="Digital House"/>
                      
                    </div>
                  </a>
                  <hr className="sidebar-divider my-0"></hr>
                  <li className="nav-item active">
                  <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard - DH movies</span></a>
                </li>
                <hr className="sidebar-divider"></hr>
                <div className="sidebar-heading">Actions</div>
                <li className="nav-item">
                  <a className="nav-link collapsed" href="/">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Tables</span></a>
                </li>
              <hr className="sidebar-divider d-none d-md-block"/>
              </ul>


            

            </div>
          </body>
    </div>
  );
}

export default SideBar;
