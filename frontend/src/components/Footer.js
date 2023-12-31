import React from "react";



const Footer = () => {

	

	return (
		<div>
			<div style={{marginTop:'0px'}}>
                 <footer className="bg-dark text-center text-white" style={{ position: "fixed", bottom: 0, width: "100%" }}>
                   
                    <div className="container p-4 pb-0" >
                       
                        <section className="mb-4">
                     
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-facebook-f"></i
                        ></a>

                      
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-twitter"></i
                        ></a>

                      
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-google"></i
                        ></a>

                       
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-instagram"></i
                        ></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-linkedin-in"></i
                        ></a>

            
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-github"></i
                        ></a>
                        </section>
                       
                    </div>
                   

             
                    <div className="text-center p-3" style={{backgroundcolor:"rgba(0, 0, 0, 0.2)"}}>
                        © 2023 Copyright: 
                        <a className="text-white" href=""> Travel Management System - Travel T</a>
                    </div>
     
                </footer>
			</div>
		</div>
		
	);
};



export default Footer;
