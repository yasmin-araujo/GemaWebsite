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
import ImgYoutube from '../images/youtube_channel_banner.png'
import ImgSanchaoEstudando from '../images/sanchao_estudando.jpg'
import ImgNacional2020 from '../images/nacional2020.png'
import ImgFotosTimesClassificados2020 from '../images/montagem-nacional.png'
import GemaAndYoutube from '../images/gema_and_youtube.png'
import PlacarNacional2021 from '../images/placar-nacional-2021.png'

// Indexação das imagens
let img1 = { id: 1, image: Img1 };
let img2 = { id: 2, image: Img2 };
let img3 = { id: 3, image: Img3 };
let img4 = { id: 4, image: ImgAulas }
let img5 = { id: 5, image: ImgCamp }
let img6 = { id: 6, image: ImgApresentacao }
let img7 = { id: 7, image: ImgYoutube }
let img8 = { id: 8, image: ImgSanchaoEstudando }
let img9 = { id: 9, image: ImgNacional2020 }
let img10 = { id: 10, image: ImgFotosTimesClassificados2020 }
let img11 = { id: 11, image: GemaAndYoutube }
let img12 = { id: 12, image: PlacarNacional2021 }



let photos = [];

photos.push(img1);
photos.push(img2);
photos.push(img3);
photos.push(img4);
photos.push(img5);
photos.push(img6);
photos.push(img7);
photos.push(img8);
photos.push(img9);
photos.push(img10);
photos.push(img11);
photos.push(img12);

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
