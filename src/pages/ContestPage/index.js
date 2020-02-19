import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
		<div id="main-contest">
			<Container fluid id="cont">
				<Row>
					<Col>
						<Header />
					</Col>
				</Row>
				<Row>
					<Col>
						<h1 className="title">Contest Finder Tool</h1>
					</Col>
				</Row>
				<Row>
					<Col id="form" sm={{ span: 8, offset: 2 }} xs={{ span: 8, offset: 2 }}>
						<h3> Encontre um contest para o seu time treinar </h3>
						<Form>
							<Form.Group controlId="handles">
								<Form.Label>Lista de handles, separados por vírgula:</Form.Label>
								<Col>
									<Form.Control id="handles" placeholder="Ex: lucasturci, rodz, VictorForbes" />
								</Col>
							</Form.Group>
							<Form.Group controlId="gym">
								<Form.Label>Contest é do Gym?</Form.Label>
								<Col sm={4}>
									<Form.Check inline label="Sim" type="radio" name="gymRadio" id="gym" />
									<Form.Check inline label="Não" type="radio" name="gymRadio" id="noGym" checked />
								</Col>
							</Form.Group>
							<Form.Group controlId="includes">
								<Form.Label>O nome tem que incluir:</Form.Label>
								<Col>
									<Form.Control id="includes" placeholder="Ex: Educational" />
								</Col>
							</Form.Group>
							<Form.Group controlId="excludes">
								<Form.Label>O nome tem que excluir:</Form.Label>
								<Col>
									<Form.Control id="excludes" placeholder="Ex: VK Cup" />
								</Col>
							</Form.Group>
							<Form.Label>Duração em minutos:</Form.Label>
							<Form.Group as={Row} controlId="duration-min" inline>
								<Col xs={3} sm={2} md={1}>
									<Form.Label>De:</Form.Label>
								</Col>
								<Col xs={9} sm={4} md={3}>
									<Form.Control id="duration-min" value="0" />
								</Col>
							</Form.Group>
							<Form.Group as={Row} controlId="duration-max">
								<Col xs={3} sm={2} md={1}>
									<Form.Label> Até: </Form.Label>
								</Col>
								<Col xs={9} sm={4} md={3}>
									<Form.Control id="duration-max" value="100000" />
								</Col>
							</Form.Group>
							<br />
							<Button id="search" onClick="search()" variant="outline-warning" type="submit">
								Procurar
							</Button>
							&nbsp;&nbsp;
							<Button onClick="stopSearching()" variant="outline-warning">
								Parar procura
							</Button>
						</Form>
					</Col>
				</Row>
				<Row>
					<Col>
						<div>
							<div id="status" />
							<ul id="resposta" />
						</div>
					</Col>
				</Row>
				<Row className="footer-row">
					<Footer />
				</Row>
			</Container>
		</div>
	);
}

export default ContestPage;
