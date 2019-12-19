import React from 'react';
import Logo_Facebook from '../../images/facebook_icon.png'
import Logo_Github from '../../images/github_icon.png'
import './style.css';

export default function Footer() {
	return (
		// <div className="footer">
		// 	<div className="footer-name">Yas</div>
		// 	<div className="footer-links">Face</div>
		// 	<div className="footer-info">Gema</div>
		// </div>
		<footer class="footer">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-md-4 footer-item">
						<span class="copyright">GEMA - ICMC/USP 2019</span>
					</div>
					<div class="col-md-4 footer-item">
						<ul class="list-inline social-buttons">
							<li class="list-inline-item">
								<a href="https://www.facebook.com/gemaicmc/">
									<img src={Logo_Facebook} alt="Facebook" className="logos"/>
								</a>
							</li>
							<li class="list-inline-item">
								<a href="https://github.com/lusmoura/CompetitiveProgramming-Classes">
									<img src={Logo_Github} alt="Github" className="logos"/>
								</a>
							</li>
						</ul>
					</div>
					<div class="col-md-4 footer-item">
						<span class="copyright">Made with ❤ by Yasmin Araujo</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
