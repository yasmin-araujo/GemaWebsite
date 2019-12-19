import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../components/Header/index';
import Wallpaper from '../../components/Wallpaper/index';
import NewsCard from '../../components/NewsCard/index';
import Footer from '../../components/Footer/index';
// xs={12} sm={12} md={12} lg={12} xl={12}
function HomePage() {
	return (
		<div className="main">
			<Container fluid>
				<Row>
					<Col>
						<Header />
					</Col>
				</Row>
				<Row noGutters>
					<Col auto>
                        <div id="backg"></div>
						{/* <Wallpaper /> */}
					</Col>
				</Row>
				<Row>
					<Col>
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notícias</h3>
						<NewsCard />
					</Col>
				</Row>
                <Row>
                        <Footer/>
                </Row>
			</Container>
		</div>
	);
}

export default HomePage;

// <!-- Footer -->
//   <footer class="footer">
//     <div class="container">
//       <div class="row align-items-center">
//         <div class="col-md-4">
//           <span class="copyright">Copyright &copy; Your Website 2019</span>
//         </div>
//         <div class="col-md-4">
//           <ul class="list-inline social-buttons">
//             <li class="list-inline-item">
//               <a href="#">
//                 <i class="fab fa-twitter"></i>
//               </a>
//             </li>
//             <li class="list-inline-item">
//               <a href="#">
//                 <i class="fab fa-facebook-f"></i>
//               </a>
//             </li>
//             <li class="list-inline-item">
//               <a href="#">
//                 <i class="fab fa-linkedin-in"></i>
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div class="col-md-4">
//           <ul class="list-inline quicklinks">
//             <li class="list-inline-item">
//               <a href="#">Privacy Policy</a>
//             </li>
//             <li class="list-inline-item">
//               <a href="#">Terms of Use</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </footer>
