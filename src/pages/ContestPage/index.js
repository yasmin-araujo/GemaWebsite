import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

import './style.css';

// xs={12} sm={12} md={12} lg={12} xl={12}
function ContestPage() {
	// Restricts input for the given textbox to the given inputFilter function.
	// function setInputFilter(textbox, inputFilter) {
	//     ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
	//         textbox.addEventListener(event, function () {
	//             if (inputFilter(this.value)) {
	//                 this.oldValue = this.value;
	//                 this.oldSelectionStart = this.selectionStart;
	//                 this.oldSelectionEnd = this.selectionEnd;
	//             } else if (this.hasOwnProperty("oldValue")) {
	//                 this.value = this.oldValue;
	//                 this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
	//             } else {
	//                 this.value = "";
	//             }
	//         });
	//     });
	// }

	// setInputFilter(document.getElementById("duration-min"), function (value) { return /^\d*$/.test(value); });
	// setInputFilter(document.getElementById("duration-max"), function (value) { return /^\d*$/.test(value); });
	// let shouldStop = false
	// function stopSearching() {
	//     shouldStop = true
	// }

	// var names = []; // names[id] = nome do contest com id

	// function contestFilter(contest, includeFilter, excludeFilter, durmin, durmax) {
	//     let dur = contest.durationSeconds / 60
	//     durmin = Number(durmin), durmax = Number(durmax)
	//     return (includeFilter === '' || contest.name.includes(includeFilter)) &&
	//         (excludeFilter == '' || !contest.name.includes(excludeFilter)) &&
	//         (dur >= durmin && dur <= durmax) &&
	//         contest.phase === 'FINISHED'
	// }

	// function getContests(includeFilter, excludeFilter, durmin, durmax, gym) {

	//     return new Promise((resolve, reject) => {
	//         updateStatus('Baixando lista de contests')
	//         $.get('https://codeforces.com/api/contest.list', { gym }, response => {
	//             console.log(response)
	//             if (response.status === 'OK') {
	//                 resolve(response.result.filter(contest => contestFilter(contest, includeFilter, excludeFilter, durmin, durmax)).map(contest => {
	//                     names[contest.id] = contest.name
	//                     return contest.id
	//                 }))
	//             } else {
	//                 reject(`ERROR: ${response.message}`)
	//             }
	//         })
	//     })

	// }

	// function contestHasSubmissionFrom(contestId, handle) {
	//     return new Promise((resolve, reject) => {
	//         $.ajax({
	//             type: "GET",
	//             crossdomain: true,
	//             url: 'https://codeforces.com/api/contest.status',
	//             data: {
	//                 contestId,
	//                 handle
	//             },
	//             success: response => {
	//                 if (response.status === 'OK') {
	//                     resolve(response.result.length !== 0)
	//                 } else reject(response.message)
	//             },
	//             error: function (xhr, status, err) {
	//                 reject(err)
	//             }
	//         })
	//     })
	// }

	// function updateStatus(message) {
	//     let status = document.querySelector('#status')
	//     status.innerHTML = message + '...'
	// }

	// function createListItem(contest, gym) {
	//     let li = document.createElement('li')
	//     let a = document.createElement('a')
	//     a.href = `https://codeforces.com/${gym ? 'gym' : 'contest'}/${contest}`
	//     a.innerHTML = names[contest]
	//     li.append(a)
	//     return li
	// }

	// async function search() {
	//     let val = $("#handles").val();
	//     if (val == '') return
	//     shouldStop = false
	//     let includeFilter = $('#includes').val()
	//     let excludeFilter = $('#excludes').val()
	//     let durmin = $('#duration-min').val()
	//     let durmax = $('#duration-max').val()
	//     if (!durmin) durmin = '0'
	//     if (!durmax) durmax = '100000'

	//     let gym = $('#gym').prop('checked')
	//     $('#resposta').empty()
	//     $('#search').prop('disabled', true)
	//     $('#handles').prop('disabled', true)
	//     let handles = val.split(',').map(x => x.trim())

	//     getContests(includeFilter, excludeFilter, durmin, durmax, gym).then(async (contests) => {
	//         let answer = []
	//         for (let i = 0; i < contests.length; ++i) {
	//             let contestId = contests[i];
	//             updateStatus(`Checando ${contestId}`)
	//             let flag = 1
	//             if (shouldStop) break
	//             for (let i = 0; i < handles.length; ++i) {
	//                 let handle = handles[i]
	//                 let aux = 1
	//                 try {
	//                     aux = await contestHasSubmissionFrom(contestId, handle)
	//                 } catch (err) {
	//                     console.log(err)
	//                 }
	//                 flag = flag && !aux
	//             }
	//             if (flag) {
	//                 console.log('ACHOU', contestId)
	//                 let li = createListItem(contestId, gym)
	//                 $('#resposta').append($(li))
	//             }
	//         }
	//         $('#search').prop('disabled', false)
	//         $('#handles').prop('disabled', false)
	//         updateStatus('')
	//     }).catch(err => {
	//         alert(err)
	//         $('#search').prop('disabled', false)
	//         $('#handles').prop('disabled', false)
	//         updateStatus('')
	//     })

	// }
	return (
		<div id="main-camp">
			<Container fluid id="cont">
				<Row>
					<Col>
						<Header />
					</Col>
				</Row>
				<Row>
					<Col>
						<h3>Em construção</h3>
					</Col>
					{/* <h1>
						{' '}
						Encontre um contest para o seu time treinar{' '}
						<img src="http://gema.icmc.usp.br/res/gema_light.svg" width="100px" />{' '}
					</h1>
					Lista de handles, separados por vírgula
					<input id="handles" type="text" size="80" placeholder="Ex.: lucasturci, rodz, VictorForbes" />{' '}
					<br />
					<input type="checkbox" value="gym" id="gym" />{' '}
					<span title="Se o contest é do gym ou não"> Gym </span> <br />
					O nome tem que incluir:
					<input id="includes" type="text" placeholder="Ex.: Educational" /> <br />
					O nome tem que excluir:
					<input id="excludes" type="text" placeholder="Ex.: VK Cup" /> <br />
					Duração: De <input id="duration-min" value="0" type="text" /> a{' '}
					<input id="duration-max" value="100000" /> minutos
					<br />
					<br />
					<button id="search" onClick="search()">
						Procurar
					</button>
					<button onClick="stopSearching()"> Parar procura </button>
					<div>
						<div id="status" />
						<ul id="resposta" />
					</div> */}
				</Row>
				<Row className="footer-row">
					<Footer />
				</Row>
			</Container>
		</div>
	);
}

export default ContestPage;
