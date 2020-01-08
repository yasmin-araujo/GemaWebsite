import React from 'react';
let news = [];

let n1body = {
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
    image2: 2
};

let n2body = {
	id: 2,
    title: 'Mais um ano de medalha para o GEMA!',
    resume:  <> O time "Triple G" foi muito bem na final nacional, ganhando medalhas de prata e com chances de
    ir para a fase mundial! </>,
	body: (
        <>
			A final nacional deste ano aconteceu em Campina Grande, nos dias 08 e 09 de novembro, com a participação de
			70 times do país. Nesta fase, os times "Triple G" e "Um minuto para o fim do coffe" participaram, e
			obtiveram ótimos resultados! Dos 13 problemas da prova, o time "Triple G" (à esquerda), integrado por
			Guilherme "Tubone", Gabriel "Artista" Camargo e Gustavo "gsoares" Soares, conseguiu resolver 7, se
			posicionando em sexto lugar e ganhando medalhas de prata, com chances de ir para a fase mundial!<br />
			<br /> O time "Um minuto para o fim do coffee" (à direita), composto por André "Fakhoury", Frederico "Fred"
			Bulhões e Raphael "Medeiros", solucionou 6 problemas, conseguindo o 12° no placar nacional! Você pode
			acessar o ranking completo{' '}
			<a href="http://scorelatam.naquadah.com.br/">aqui</a>. <br />
			<br /> O GEMA consegue mais uma vez um ótimo resultado na Maratona de Programação, parabéns aos
			competidores!
        </>
    ),
    image1: 3,
    image2: 0 // imagem com índice 0 quando ela não existe
};

news.push(n1body);
news.push(n2body);

export default function getNews(props) {
	let res = news.find((a) => a.id === props);
	return res;
}
