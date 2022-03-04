import logo from './logo.svg';
import logoDh from "./assets/images/logo-DH.png"
import jordanEalke from "./assets/images/jordan-walke.png"
import mandalorian from "./assets/images/mandalorian.jpg"

import './App.css';


function App() {
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
          <li claseName="nav-item">
            <a claseName="nav-link" href="/">
              <i claseName="fas fa-fw fa-table"></i>
              <span>Tables</span></a>
          </li>
           <hr claseName="sidebar-divider d-none d-md-block"/>
		    </ul>


        <div id="content-wrapper" claseName="d-flex flex-column">

             
              <div id="content">

              
                <nav claseName="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                
                  <button id="sidebarToggleTop" claseName="btn btn-link d-md-none rounded-circle mr-3">
                    <i claseName="fa fa-bars"></i>
                  </button>

                
                  <ul claseName="navbar-nav ml-auto">

                    
                    <li claseName="nav-item dropdown no-arrow mx-1">
                      <a claseName="nav-link dropdown-toggle" href="/" id="alertsDropdown">
                        <i claseName="fas fa-bell fa-fw"></i>
                      
                        <span claseName="badge badge-danger badge-counter">3+</span>
                      </a>
                    </li>

                    <li claseName="nav-item dropdown no-arrow mx-1">
                      <a claseName="nav-link dropdown-toggle" href="/" id="messagesDropdown">
                        <i claseName="fas fa-envelope fa-fw"></i>
                    
                        <span claseName="badge badge-danger badge-counter">7</span>
                      </a>
                    </li>

                    <div claseName="topbar-divider d-none d-sm-block"></div>

                    <li claseName="nav-item dropdown no-arrow">
                      <a claseName="nav-link dropdown-toggle" href="/" id="userDropdown">
                        <span claseName="mr-2 d-none d-lg-inline text-gray-600 small">Jordan Walke</span>
                        <img claseName="img-profile rounded-circle" src={jordanEalke} alt="Jordan Walke - Creador de React" width="60"/>
                      </a>
                    </li>

                  </ul>

                </nav>
         

             
                <div claseName="container-fluid">
                  <div claseName="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 claseName="h3 mb-0 text-gray-800">App Dashboard</h1>
                  </div>
           
                  <div claseName="row">

                
                    <div claseName="col-md-4 mb-4">
                      <div claseName="card border-left-primary shadow h-100 py-2">
                        <div claseName="card-body">
                          <div claseName="row no-gutters align-items-center">
                            <div claseName="col mr-2">
                              <div claseName="text-xs font-weight-bold text-primary text-uppercase mb-1">Movies in Data Base</div>
                              <div claseName="h5 mb-0 font-weight-bold text-gray-800">21</div>
                            </div>
                            <div claseName="col-auto">
                              <i claseName="fas fa-film fa-2x text-gray-300"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

               
                    <div claseName="col-md-4 mb-4">
                      <div claseName="card border-left-success shadow h-100 py-2">
                        <div claseName="card-body">
                          <div claseName="row no-gutters align-items-center">
                            <div claseName="col mr-2">
                              <div claseName="text-xs font-weight-bold text-success text-uppercase mb-1"> Total awards</div>
                              <div claseName="h5 mb-0 font-weight-bold text-gray-800">79</div>
                            </div>
                            <div claseName="col-auto">
                              <i claseName="fas fa-award fa-2x text-gray-300"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div claseName="col-md-4 mb-4">
                      <div claseName="card border-left-warning shadow h-100 py-2">
                        <div claseName="card-body">
                          <div claseName="row no-gutters align-items-center">
                            <div claseName="col mr-2">
                              <div claseName="text-xs font-weight-bold text-warning text-uppercase mb-1">Actors quantity
                              </div>
                              <div claseName="h5 mb-0 font-weight-bold text-gray-800">49</div>
                            </div>
                            <div claseName="col-auto">
                              <i claseName="fas fa-user fa-2x text-gray-300"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
             
                  <div claseName="row">
                 
                    <div claseName="col-lg-6 mb-4">
                      <div claseName="card shadow mb-4">
                        <div claseName="card-header py-3">
                          <h5 claseName="m-0 font-weight-bold text-gray-800">Last movie in Data Base</h5>
                        </div>
                        <div claseName="card-body">
                          <div claseName="text-center">
                            <img claseName="img-fluid px-3 px-sm-4 mt-3 mb-4" src={mandalorian} alt=" Star Wars - Mandalorian "/>
                          </div>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
                          <a claseName="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
                        </div>
                      </div>
                    </div>
                   
                    <div claseName="col-lg-6 mb-4">						
                      <div claseName="card shadow mb-4">
                        <div claseName="card-header py-3">
                          <h5 claseName="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
                        </div>
                        <div claseName="card-body">
                          <div claseName="row">
                            <div claseName="col-lg-6 mb-4">
                              <div claseName="card bg-dark text-white shadow">
                                <div claseName="card-body">
                                  Acción
                                </div>
                              </div>
                            </div>
                            <div claseName="col-lg-6 mb-4">
                              <div claseName="card bg-dark text-white shadow">
                                <div claseName="card-body">
                                  Animación
                                </div>
                              </div>
                            </div>
                            <div claseName="col-lg-6 mb-4">
                              <div claseName="card bg-dark text-white shadow">
                                <div claseName="card-body">
                                  Aventura
                                </div>
                              </div>
                            </div>
                            <div claseName="col-lg-6 mb-4">
                              <div claseName="card bg-dark text-white shadow">
                                <div claseName="card-body">
                                  Ciencia Ficción
                                </div>
                              </div>
                            </div>
                            <div claseName="col-lg-6 mb-4">
                              <div claseName="card bg-dark text-white shadow">
                                <div claseName="card-body">
                                  Comedia
                                </div>
                              </div>
                            </div>
                            <div claseName="col-lg-6 mb-4">
                              <div claseName="card bg-dark text-white shadow">
                                <div claseName="card-body">
                                  Documental
                                </div>
                              </div>
                            </div>
                            <div claseName="col-lg-6 mb-4">
                              <div claseName="card bg-dark text-white shadow">
                                <div claseName="card-body">
                                  Drama
                                </div>
                              </div>
                            </div>
                            <div claseName="col-lg-6 mb-4">
                              <div claseName="card bg-dark text-white shadow">
                                <div claseName="card-body">
                                  Fantasia
                                </div>
                              </div>
                            </div>
                            <div claseName="col-lg-6 mb-4">
                              <div claseName="card bg-dark text-white shadow">
                                <div claseName="card-body">
                                  Infantiles
                                </div>
                              </div>
                            </div>
                            <div claseName="col-lg-6 mb-4">
                              <div claseName="card bg-dark text-white shadow">
                                <div claseName="card-body">
                                  Musical
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               
              </div>
           

              <footer claseName="sticky-footer bg-white">
                <div claseName="container my-auto">
                  <div claseName="copyright text-center my-auto">
                    <span>Copyright &copy; Dashboard 2021</span>
                  </div>
                </div>
              </footer>
          

              </div>

        </div>
        </body>
      </div>
  );
}

export default App;
