import React from 'react';
import Logo_Facebook from '../../images/facebook_icon.png'
import Logo_Github from '../../images/github_icon.png'
import './style.css';

export default function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-4 footer-item">
						<span className="copyright">GEMA - ICMC/USP 2020</span>
					</div>
					<div className="col-md-4 footer-item">
						<ul className="list-inline social-buttons">
							<li className="list-inline-item">
								<a href="https://www.facebook.com/gemaicmc/" rel="noopener noreferrer" target="_blank">
									<img src={Logo_Facebook} alt="Facebook" className="logos"/>
								</a>
							</li>
							<li className="list-inline-item">
								<a href="https://github.com/icmcgema" rel="noopener noreferrer" target="_blank">
									<img src={Logo_Github} alt="Github" className="logos"/>
								</a>
							</li>
						</ul>
					</div>
					<div className="col-md-4 footer-item">
						<span className="copyright">Made with ❤ by <a className="footer-link" href="https://github.com/yasmin-araujo">Yasmin Araujo</a></span>
					</div>
				</div>
			</div>
		</footer>
	);
}
