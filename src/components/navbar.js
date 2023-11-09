import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


// ... (imports)

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [showSideMenu, setShowSideMenu] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
    setShowSideMenu(false); // Close the side menu when opening the modal
  };

  const switchPopUp = () => {
    setIsLogin(!isLogin);
  };

  const handleSideMenuToggle = () => {
    setShowSideMenu(!showSideMenu);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={"logo.svg"} alt="Logo" style={{ width: '120px', marginLeft: '-10px' }} />
        </a>

        <button
          className="navbar-toggler d-lg-none"
          type="button"
          onClick={handleSideMenuToggle}
        >
          ☰
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <form className="mx-auto d-flex w-100 position-relative">
            <div className="nosubmit input-group">
              <input
                className="nosubmit form-control rounded-pill fs-5 ps-5"
                type="search"
                placeholder="   Search for your favorite group in ATG"
                aria-label="Search"
              />
              <span className="input-group-text position-absolute" style={{ left: '15px', top: '50%', transform: 'translateY(-50%)' }}>
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
          </form>

          <ul className="navbar-nav ml-auto d-none d-lg-block">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleModalToggle}>
                Create Account/Login
              </a>
            </li>
          </ul>
        </div>

        {/* Modal */}
        {showModal && (
          <>
            <div className="modal-backdrop show" onClick={handleModalToggle}></div>
            <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{isLogin ? 'Login' : 'Create Account'}</h5>
                    <button type="button" className="btn-close" onClick={handleModalToggle}></button>
                  </div>
                  <div className="modal-body d-flex">
                    {/* Section 1 - Fields */}
                    <div className="flex-grow-1 me-3">
                      <form>
                        {isLogin ? (
                          // Login Fields
                          <>
                            <div className="mb-3">
                              <label htmlFor="loginId" className="form-label">
                                User ID
                              </label>
                              <input type="text" className="form-control" id="loginId" placeholder="Enter your user ID" />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="loginPassword" className="form-label">
                                Password
                              </label>
                              <input type="password" className="form-control" id="loginPassword" placeholder="Enter your password" />
                            </div>
                            {/* Submit button */}
                            <button type="submit" className="btn btn-primary">
                              Login
                            </button>
                          </>
                        ) : (
                          // Create Account Fields
                          <>
                            <div className="mb-3 d-flex">
                              <div className="me-2 flex-grow-1">
                                <label htmlFor="firstName" className="form-label">
                                  First Name
                                </label>
                                <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" />
                              </div>
                              <div className="flex-grow-1">
                                <label htmlFor="lastName" className="form-label">
                                  Last Name
                                </label>
                                <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" />
                              </div>
                            </div>
                            <div className="mb-3">
                              <label htmlFor="email" className="form-label">
                                Email
                              </label>
                              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="password" className="form-label">
                                Password
                              </label>
                              <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="confirmPassword" className="form-label">
                                Confirm Password
                              </label>
                              <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" />
                            </div>
                            {/* Submit button */}
                            <button type="submit" className="btn btn-primary">
                              Create Account
                            </button>
                          </>
                        )}
                      </form>
                    </div>

                    {/* Section 2 - Image and Already a User */}
                    <div className="flex-grow-1 d-flex flex-column align-items-end">
                      {/* Placeholder Image */}
                      <img src="https://via.placeholder.com/400" alt="Placeholder" className="img-fluid mb-3" />

                      <div className="text-end mt-auto">
                        {isLogin ? (
                          <>
                            Not a user{"  "}
                            <button type="button" className="btn btn-secondary" onClick={switchPopUp}>
                              Create Account
                            </button>
                          </>
                        ) : (
                          <>
                            Already a user{"  "}
                            <button type="button" className="btn btn-secondary" onClick={switchPopUp}>
                              Login
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Side Menu */}
        {showSideMenu && (
          <div className="side-menu">
            <ul>
              <li>
                <a href="#" onClick={handleModalToggle}>
                  Create Account/Login
                </a>
              </li>
              {/* Add other side menu items as needed */}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
