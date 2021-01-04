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

let n6body = {
	id: 6,
	title: 'Você já viu o canal do GEMA no youtube?',
	resume: <> Nós estamos disponibilizando conteúdo toda semana durante essa quarentena, para que você continue estudando de casa </>,
	body: (
		<>
			<p>
				Em março começou a quarentena no Brasil, e todas as escolas e universidades foram fechadas. Com isso, nós tinhamos que descobrir alguma forma 
				de continuar nosso curso de programação e não perder a atenção dos nossos futuros medalhistas da USP São Carlos.
			</p>
			<p>
				Começamos com a ideia de fazer reuniões online via Google Meets, mas logo a gente descobriu que os alunos gostam de assistir
				às aulas quando têm vontade, no tempo deles e na velocidade (1.5x, recomendo) que quiserem. Assim as aulas ficam muito menos cansativas
				e mais interessantes.
			</p>


			<p>
				O GEMA não tem os melhores recursos pra gravação de videoaulas, mas acreditamos que a qualidade 
				dos nossos vídeos está melhorando cada vez mais. Ficaríamos muito felizes com a sua visita no nosso canal:
				<a href='https://www.youtube.com/channel/UCv051Zppxw4k11h3qlHxpGg'> https://www.youtube.com/channel/UCv051Zppxw4k11h3qlHxpGg </a>
			</p>

			<p>
				As dúvidas ainda podem ser tiradas no nosso <a href='http://bit.ly/gema020'> grupo do telegram </a>, 
				e os materiais das aulas estão disponíveis no <a href='https://github.com/icmcgema/gema'> github do gema </a>
				ou na seção <a href='http://gema.icmc.usp.br/Material'> Materiais </a> aqui do site.
			</p>

			<p> Se inscreva pra não perder nenhum conteúdo e dê sua opinião nos comentários, queremos muito um feedback </p>

			<p> Ah, e dá uma olhada nos vídeos dos finalistas mundiais na China e de Portugal! Pode ser você no futuro :D </p>
		</>
	),
	image1: 0,
	image2: 0,
	imageCover: 7,
	date: '22/05/2020'
}

let n7body = {
	id: 7,
	title: 'Como manter os estudos durante a quarentena?',
	resume: <> Nesses tempos difíceis de pandemia, é difícil continuar a estudar e manter a motivação. 
	Reunímos aqui algumas dicas e links que podem te ajudar. </>,
	body: (
		<>
			<p>
				A quarentena deixa todo mundo desanimado, e para algumas pessoas é difícil continuar a estudar em casa. Felizmente,
				esse não é o caso do pessoal da computação, e pra isso vamos te ajudar com alguns links legais relacionados
				à programação competitiva pra você não perder a motivação. #vaificartudobem
			</p>

			<p>
				No youtube, um canal muito legal é o <a href='https://www.youtube.com/channel/UCBLr7ISa_YDy5qeATupf26w'> Algorithms Live! </a>, um autodenominado talk show que 
				aborda algoritmos e problemas de CP com convidados em um estilo bem educativo. Eles fazem vídeos tanto para iniciantes como avançados.
			</p>
			
			<p>
				Outro canal que merece sua visita é o do <a href='https://www.youtube.com/channel/UCBr_Fu6q9iHYQCh13jmpbrg'> Errichto </a>, um competidor veterano
				que já ganhou várias competições e doa seu tempo para ensinar o que aprendeu aos iniciantes. Seu conteúdo é focado em streams onde ele resolve problemas 
				explicando o que está pensando durante o processo, mas também existem aulas sobre temas variados.
			</p>

			<p>
				Um site muito bom para estudar algoritmos é o <a href='https://cp-algorithms.com/'>CP-Algorithms</a>, 
				uma tradução comunitária do site russo E-Maxx para o inglês, que reúne explicações detalhadas sobre as 
				técnicas mais relevantes usadas na programação competitiva.
			</p>

			<p>
				Se você tem um notebook disponível em sua casa, é claro que você pode também participar dos contests
				oferecidos pelos judges: <a href='https://codeforces.com/'> Codeforces </a>, <a href='https://www.codechef.com/'> Codechef </a>, 
				<a href='https://atcoder.jp/'> Atcoder </a>, <a href='https://www.hackerrank.com/'> Hacker Rank</a>, 
				<a href='https://leetcode.com/contest/'> Leetcode </a> e <a href='https://neps.academy'> Neps Academy (brasileiro)</a>.
				Os quatro últimos são os mais amigáveis para os iniciantes. Participar desses contests é muito importante, porque o melhor jeito de estudar
				CP é resolvendo problemas.
			</p>

			<p>
				Espero que você se interesse por alguns desses links. É claro que você deve continuar vendo as aulas do GEMA tirando dúvidas com a gente.
				
			</p>
			<p> Se cuida! <br/> #fiqueemcasa </p>
		</>
	),
	image1: 0,
	image2: 0,
	imageCover: 8,
	date: '22/05/2020'
}

let n8body = {
	id: 8,
    title: 'Mais um ano de dois times classificados para a nacional!',
    resume:<> Em 2020, pela quinta vez consecutiva o GEMA consegue classificar dois times para a fase brasileira da Maratona de Programação. </>,
	body: (
		<>

			<p>
				A fase regional da Maratona de Programação, que geralmente acontece em várias escolas-sede ao redor do Brasil, este ano aconteceu de forma online. 
				Nos anos anteriores, os times da USP de São Carlos viajavam até Piracicaba pra realizar essa fase da competição, mas dessa vez os competidores fizeram a prova em suas casas, o que resultou em algumas mudanças importantes no teor da competição. Enquanto antes somente um computador era usado pra resolver os problemas, agora três puderam ser usados ao mesmo tempo. Além disso, as inscrições deste ano foram abertas e gratuitas, e para evitar trapaças, dessa vez só os competidores tiveram acesso a prova, e por isso não aconteceram provas de Café com Leite nem <i> mirrors </i> online.
			</p>

			<p>
				Nesse ano, com 799 times inscritos de 196 escolas, a prova foi realizada no dia 14 de novembro, um sábado. Os 15 problemas da prova foram bem distribuídos em dificuldade, mas ainda assim 3 problemas (D, J e O) ficaram sem soluções de nenhum time. A USP São Carlos, que geralmente leva 7 times para esta fase regional, este ano levou 16. Todos tiveram ótimos resultados, com pelo menos dois problemas da prova resolvidos.
			</p>
			<p>
				Pela quinta vez consecutiva, dois times da USP São Carlos conseguiram novamente se classificar para a final brasileira, que acontecerá também de forma online, com data ainda a ser definida. O time "deitando no gramado", composto por André Fakhoury, Frederico Bulhões e Lucas Turci resolveu 9 problemas, conseguindo o segundo lugar no placar brasileiro geral. O time "cuscuz com cachaça", composto por Dikson Ferreira, Fernando Lincoln e Thiago Queiroz, resolvendo 8 problemas, ficou no décimo segundo lugar geral. O placar completo pode ser consultado <a href="http://maratona.sbc.org.br/primfase20/reports/ScoreBrasil.html"> aqui</a>.
			</p>


			<p>
				Mais informações sobre a prova (inclusive um editorial) e os resultados podem ser consultadas <a href="http://maratona.sbc.org.br/primfase20.html">aqui</a>.
			</p>

			<p> Parabéns aos competidores! </p>
		</>
    ),
    image1: 10,
	image2: 0,
	imageCover: 9,
	date: '24/11/2020'
};

let n9body = {
	id: 9,
    title: 'Novas séries de aulas do GEMA',
    resume:<> No ano passado, com a situação da pandemia, o principal meio pelo qual conseguimos ensinar programação foi o <i>youtube</i>. Nessas férias de 2021, vai ter novidade no canal! </>,
	body: (
		<>

			<p>
				Como vocês sabem, o EAD se tornou o principal (e talvez único) meio de ministrar aulas no ano passado, e o GEMA também entrou no barco. 
				No primeiro semestre de 2020, nós publicamos várias vídeo-aulas de programação básica em C++. No segundo semestre, nós tivemos reuniões semanais que também foram gravadas e publicadas no canal. Ao todo, tivemos mais de 5.000 visualizações em nossos vídeos, o que significa um alcance de público muito importante para nós.
			</p>

			<p>
				Nessas férias, para manter o interesse dos estudantes que querem continuar treinando para a maratona de programação e OBI, nós vamos fazer novas séries de vídeos: dessa vez mais curtos, para promover conteúdo sem ser cansativo para o público (afinal, a gente está de férias para descansar né).
			</p>
			<p>
				A partir da segunda semana de Janeiro, espere novidades no <a href='https://www.youtube.com/channel/UCv051Zppxw4k11h3qlHxpGg'>canal do GEMA do youtube</a>: nós vamos te ensinar <i>tricks</i> e resoluções de problemas nestas férias prolongadas.
			</p>
			<p>
				Esperamos vocês!
			</p>
		</>
    ),
    image1: 0,
	image2: 0,
	imageCover: 11,
	date: '04/01/2021'
};

news.push(n1body);
news.push(n2body);
news.push(n3body);
news.push(n4body);
news.push(n5body);
news.push(n6body);
news.push(n7body);
news.push(n8body);
news.push(n9body);

// Retorna notícia de respectivo id recebido no props
export default function getNews(props) {
	let res = news.find((a) => a.id === props);
	return res;
}

export const getNewsCount = () => news.length
