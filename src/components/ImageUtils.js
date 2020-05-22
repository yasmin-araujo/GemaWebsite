import React from 'react'
//------------------
//  Para adicionar imagens:
//  1 - Importe a imagem como Imgx
//  2 - Indexe a imagem colocando respectivo id x e link para a Imgx definida antes
//  3 - Insira no array photos
//------------------

// Importação das imagens
import Img1 from '../images/time1.png';
import Img2 from '../images/time2.png';
import Img3 from '../images/tripleg.jpg';
import ImgAulas from '../images/aulas_gema.png'
import ImgCamp from '../images/camp_gema.png';
import ImgApresentacao from '../images/chamada_apresentacao.png'

// Indexação das imagens
let img1 = { id: 1, image: Img1 };
let img2 = { id: 2, image: Img2 };
let img3 = { id: 3, image: Img3 };
let img4 = { id: 4, image: ImgAulas }
let img5 = { id: 5, image: ImgCamp }
let img6 = { id: 6, image: ImgApresentacao }

let photos = [];

photos.push(img1);
photos.push(img2);
photos.push(img3);
photos.push(img4);
photos.push(img5);
photos.push(img6);

// Retorna elemento imagem de acordo com o id fornecido
export function imageElement(props) {
	if (props) {
		let img = photos.find((a) => a.id === props);
		return <img alt="" src={img.image} />;
	}
	return;
}

export function getImage(id) {
	return photos.find((a) => a.id === id).image;
}
