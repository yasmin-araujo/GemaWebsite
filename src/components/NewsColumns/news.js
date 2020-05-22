//-----------
//  Banco de notícias
//
//  Para adicionar:
//  1 - Crie uma variável nxbody no final da lista e preencha com os dados necessários (caso a imagem não exista -> id = 0)
//  2 - Adicione a nova variável no array news
//-----------

import React from 'react';
let news = [];

let n2body = {
	id: 1,
    title: 'O GEMA classificou para a nacional!',
    resume:<> Confira os times que conseguiram se classificar para a final brasileira da competição! </>,
	body: (
		<>
			A fase regional da maratona de programação aconteceu no dia 14 de setembro, na qual participaram 726 times
			distribuídos em 47 sedes espalhadas pelo Brasil. Nesta fase, 7 times do ICMC foram até a sede de Piracicaba
			competir, e conseguiram ótimos resultados!<br />
			<br />
			Os times "Triple G" e "Um minuto para o fim do coffe" conseguiram se classificar para a final brasileira da
			competição, obtendo 11° e 12° lugares no ranking nacional. O detalhe é que para irem para a próxima fase, os
			dois times deveriam ficar entre os top 15 do país, e conseguirem uma vaga na fase nacional, que acontecerá
			em Campina Grande, em novembro.<br />
			<br />Você pode ler mais sobre a competição e conferir os problemas da prova na{' '}
			<a href="http://maratona.ime.usp.br/primfase19/">página da maratona</a>.<br />
			<br /> O GEMA, pelo quinto ano seguido, consegue classificar pelo menos dois times para a final brasileira
			da Maratona de Programação. Parabéns aos competidores!
		</>
    ),
    image1: 1,
	image2: 2,
	imageCover: 1,
	date: '15/02/2020'
};

let n3body = {
	id: 2,
    title: 'Mais um ano de medalha para o GEMA!',
    resume:  <> O time "Triple G" foi muito bem na final nacional, ganhando medalhas de prata e uma vaga na fase mundial do ICPC! </>,
	body: (
        <>
		
			A final nacional deste ano aconteceu em Campina Grande, nos dias 08 e 09 de novembro, com a participação de
			70 times do país. Nesta fase, os times "Triple G" e "Um minuto para o fim do coffe" participaram, e
			obtiveram ótimos resultados! Dos 13 problemas da prova, o time "Triple G" (à esquerda), integrado por
			Guilherme "Tubone", Gabriel "Artista" Camargo e Gustavo "gsoares" Soares, conseguiu resolver 7, se
			posicionando em sexto lugar e ganhando medalhas de prata. Com isso, o time classificou-se para a final mundial, 
			que ocorrerá em junho de 2020 em Moscow, na Rússia! <br />
			<br /> O time "Um minuto para o fim do coffee" (à direita), composto por André "Fakhoury", Frederico "Fred"
			Bulhões e Raphael "Medeiros", solucionou 6 problemas, conseguindo o 12° no placar nacional! Você pode
			acessar o ranking completo &nbsp; 
			<a href="http://scorelatam.naquadah.com.br/">aqui</a>. <br />
			<br /> O GEMA consegue mais uma vez um ótimo resultado na Maratona de Programação, parabéns aos
			competidores!
        </>
    ),
    image1: 3,
	image2: 0, // imagem com índice 0 quando ela não existe
	imageCover: 3,
	date: '15/02/2020'
};

const n1body = {
	id: 3,
    title: 'O GEMA vai dar aulas de programação!',
    resume:  <> Fique atento às datas, as aulas de programação em C++ do GEMA começarão em breve! </>,
	body: (
        <>
			<p>
			As aulas do GEMA voltaram! Com a entrada dos calouros da USP de São Carlos, o GEMA ministrará aulas semanais sobre 
			programação competitiva, algoritmos e outros tópicos. Qualquer um pode participar (inclusive veteranos interessados) e 
			não é preciso nenhum conhecimento prévio. Será ensinado o básico de programação, além do uso da linguagem C++ com foco em 
			programação competitiva, com exercícios semanais para praticar na plataforma Codeforces.
			</p>
			<p>
			No dia 02/03 (segunda-feira), haverá uma apresentação no Auditório Fernão (ao lado do Bloco 6) dando mais informações 
			sobre o grupo e como funcionarão as aulas para os calouros. Essa apresentação ocorrerá em conjunto com o FoG (grupo de 
			desenvolvimento de jogos do ICMC) em dois horários: (14 às 16) ou (16 às 18). Tenha em mente que não é preciso ir nas 
			duas! O conteúdo da apresentação será o mesmo!
			</p>
			<p>
			O horário das aulas semanais ainda está para ser determinado e provavelmente a partir da segunda-feira será escolhido com 
			base na disponibilidade dos atuais membros do grupo e dos ingressantes.
			</p>
        </>
    ),
    image1: 4,
	image2: 0, // imagem com índice 0 quando ela não existe
	imageCover: 4,
	date: '01/03/2020'
};

let n4body = {
	id: 4,
	title: 'Veja como foi o primeiro curso de férias do GEMA!',
	resume: <> Na primeira semana de dezembro, o GEMA organizou um curso intensivo de programação competitiva em Python e C++ para alunos da USP e do ensino médio </>,
	body: (
		<>
			<p>
				Na semana de 02 a 06 de dezembro, aconteceu primeiro curso de férias do GEMA,
				que contou com a participação de cerca de 15 pessoas! De segunda a sexta, elas tiveram aulas teóricas de manhã e 
				exercícios práticos na parte da tarde, sempre com coffe break nos dois períodos, é claro.
			</p>

			<p>
				Os alunos foram divididos em duas turmas: C++ e Python. Ambas, no entanto, puderam ter
				um gosto de como é o mundo da programação competitiva, o que acreditamos ser muito importante,
				principalmente para os alunos de ensino médio.
			</p>
		</>
	),
	image1: 5,
	imageCover: 5,
	date: '01/03/2020'
}

let n5body = {
	id: 5,
	title: 'Confira a apresentação do GEMA!',
	resume: <> Vamos fazer uma apresentação para os caluros no dia 02/03 (segunda-feira) </>,
	body: (
		<>
			<p>
				Nesta segunda (02/03), o GEMA irá fazer uma apresentação do grupo juntamente com o FoG, 
				no auditório Fernão, durante o período da tarde.
			</p>
			<p>
				Teremos duas apresentações por grupo, para poder atender todos os alunos.
				Os horários serão: das 14h às 16h e das 16h às 18h.
			</p>

			<p>
				Se você ficou interessado no grupo na semana de recepção, vale a pena comparecer
				a esse evento, onde você vai aprender muito mais sobre o que nós fazemos e como pode
				participar. 
			</p>

			<p> Compareçam! </p>
		</>
	),
	image1: 6,
	imageCover: 6,
	date: '01/03/2020'
}

news.push(n1body);
news.push(n2body);
news.push(n3body);
news.push(n4body);
news.push(n5body);

// Retorna notícia de respectivo id recebido no props
export default function getNews(props) {
	let res = news.find((a) => a.id === props);
	return res;
}

export const getNewsCount = () => news.length
