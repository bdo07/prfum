import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
  return (
    <div className="container my-5">
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#1c2331' }}>
        <section className="d-flex justify-content-between p-4" style={{ backgroundColor: '#6351ce' }}>
          <div>Restez connecté avec nous sur les réseaux sociaux:</div>
          <div>
            {['facebook-f', 'twitter', 'google', 'instagram', 'linkedin', 'github'].map((icon) => (
              <a key={icon} href="#" className="text-white me-4">
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </section>

        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3">
                <h6 className="text-uppercase fw-bold">Nom de entreprise</h6>
                <hr style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p>Une courte description de votre entreprise ou de vos services.</p>
              </div>
              <div className="col-md-2">
                <h6 className="text-uppercase fw-bold">Produits</h6>
                <hr style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                {['MDBootstrap', 'MDWordPress', 'BrandFlow', 'Bootstrap Angular'].map((product) => (
                  <p key={product}>
                    <a href="#!" className="text-white">{product}</a>
                  </p>
                ))}
              </div>
              <div className="col-md-2">
                <h6 className="text-uppercase fw-bold">Liens utiles</h6>
                <hr style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                {['Votre compte', 'Devenir affilié', 'Tarifs d\'expédition', 'Aide'].map((link, index) => (
                  <p key={index}>
                    <a href="#!" className="text-white">{link}</a>
                  </p>
                ))}
              </div>
              <div className="col-md-3">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p><i className="fas fa-home me-3"></i> New York, États-Unis</p>
                <p><i className="fas fa-envelope me-3"></i> info@example.com</p>
                <p><i className="fas fa-phone me-3"></i> +01 234 567 88</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
