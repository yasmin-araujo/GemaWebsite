import React, { useState } from 'react';
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

import './style.css';

let names = []

function contestFilter(contest, includeFilter, excludeFilter, durmin, durmax) {
	let dur = contest.durationSeconds / 60
	return (includeFilter === '' || contest.name.includes(includeFilter)) &&
		(excludeFilter === '' || !contest.name.includes(excludeFilter)) &&
		(dur >= durmin && dur <= durmax) &&
		contest.phase === 'FINISHED'
}

const API = axios.create({
	baseURL: 'https://codeforces.com/api',
	responseType: "json"
})

let shouldStop = false

function ContestPage() {
	const [handles, setHandles] = useState('');
	const [gym, setGym] = useState(false);
	const [includes, setIncludes] = useState('');
	const [excludes, setExcludes] = useState('');
	const [durationMin, setDurationMin] = useState('');
	const [durationMax, setDurationMax] = useState('');
	const [disableSearch, setDisableSearch] = useState(false)
	const [answers, setAnswers] = useState([])
	const [status, setStatus] = useState('')

	function getContests(includeFilter, excludeFilter, durmin, durmax, gym) {

		return new Promise((resolve, reject) => {
			setStatus('Baixando lista de contests')
			try {
				API.get('/contest.list', { params: { gym } }).then(response => {
					response = response.data
					console.log(response)
					if (response.status === 'OK') {
						resolve(response.result.filter(contest => contestFilter(contest, includeFilter, excludeFilter, durmin, durmax)).map(contest => {
							names[contest.id] = contest.name
							return contest.id
						}))
					} else {
						reject(`ERROR: ${response.message}`)
					}
				})
			} catch(err) {
				reject(`ERROR: ${err}`)
			}
			
		})
	
	}

	function contestHasSubmissionFrom(contestId, handle) {
	    return new Promise((resolve, reject) => {
			API.get('/contest.status', { params: { contestId, handle } }).then(response => {
				response = response.data
				if (response.status === 'OK') {
					resolve(response.result.length !== 0)
				} else reject(response.message)
			}).catch(err => {
				reject(`ERROR: ${err}`)
			})
			
	    })
	}

	function createListItem(contest, gym) {
		setAnswers(a => [...a, {link: `https://codeforces.com/${gym ? 'gym' : 'contest'}/${contest}`, name: names[contest]}])
	}

	
	 function search() {
	    let val = handles || ''
	    if (val === '') return
	    shouldStop = false
	    let includeFilter = includes
	    let excludeFilter = excludes
	    let durmin = Number(durationMin) || 0
		let durmax = Number(durationMax) || 100000

		setStatus('Looking for contest')
		setAnswers([])
		setDisableSearch(true)

	    let handlesArray = val.split(',').map(x => x.trim())

	    getContests(includeFilter, excludeFilter, durmin, durmax, gym).then(async (contests) => {
	        for (let i = 0; i < contests.length; ++i) {
				const idx = gym? contests.length - 1 - i : i
	            let contestId = contests[idx];
	            setStatus(`Checando ${contestId}`)
				let flag = 1
	            if (shouldStop) break
	            for (let i = 0; i < handlesArray.length; ++i) {
	                let handle = handlesArray[i]
	                let aux = 1
	                try {
	                    aux = await contestHasSubmissionFrom(contestId, handle)
	                } catch (err) {
	                    console.log(err)
	                }
	                flag = flag && !aux
	            }
	            if (flag) {
	                console.log('ACHOU', contestId)
	                createListItem(contestId, gym)
	            }
	        }
	        setDisableSearch(false)
	        setStatus('')
	    }).catch(err => {
	        alert(err)
			setDisableSearch(false)
	        setStatus('')
	    })
	}

	const setDuration = (dur, id) => {
		if(/^\d*$/.test(dur)) {
			if(id === 'min') setDurationMin(dur)
			else setDurationMax(dur)
		}
	}
	console.log('DISABLE', disableSearch)
	return (
		<div id="main-contest">
			<Container fluid id="cont">
				<Row>
					<Col>
						<Header />
					</Col>
				</Row>
				<Row>
					<Col id="form" sm={{ span: 8, offset: 2 }} xs={{ span: 8, offset: 2 }}>
						<h3> Encontre um contest para o seu time treinar </h3>
						<Form>
							<Form.Group controlId="handles">
								<Form.Label>Lista de handles, separados por vírgula:</Form.Label>
								<Col>
									<Form.Control value={handles} onChange={e => setHandles(e.target.value)} placeholder="Ex: lucasturci, rodz, VictorForbes" disabled={disableSearch}/>
								</Col>
							</Form.Group>
							<Form.Group controlId="gym">
								<Form.Label>Contest é do Gym?</Form.Label>
								<Col sm={4}>
									<Form.Check onChange={() => setGym(true)} label="Sim" type="radio" name="gymRadio" checked={gym}/>
									<Form.Check onChange={() => setGym(false)} label="Não" type="radio" name="gymRadio" checked={!gym} />
								</Col>
							</Form.Group>
							<Form.Group controlId="includes">
								<Form.Label>O nome tem que incluir:</Form.Label>
								<Col>
									<Form.Control value={includes} onChange={e => setIncludes(e.target.value)} placeholder="Ex: Educational" />
								</Col>
							</Form.Group>
							<Form.Group controlId="excludes">
								<Form.Label>O nome tem que excluir:</Form.Label>
								<Col>
									<Form.Control value={excludes} onChange={e => setExcludes(e.target.value)} placeholder="Ex: VK Cup" />
								</Col>
							</Form.Group>
							<Form.Label>Duração em minutos:</Form.Label>
							<Form.Group as={Row} controlId="duration-min" >
								<Col xs={3} sm={2} md={1}>
									<Form.Label>De:</Form.Label>
								</Col>
								<Col xs={9} sm={4} md={3}>
									<Form.Control value={durationMin} onChange={e => setDuration(e.target.value, 'min')} placeholder="0"/>
								</Col>
							</Form.Group>
							<Form.Group as={Row} controlId="duration-max">
								<Col xs={3} sm={2} md={1}>
									<Form.Label> Até: </Form.Label>
								</Col>
								<Col xs={9} sm={4} md={3}>
									<Form.Control value={durationMax} onChange={e => setDuration(e.target.value, 'max')} placeholder="10000" />
								</Col>
							</Form.Group>
							<br />
							<Button id="search" onClick={() => {search()}} variant="outline-warning" disabled={disableSearch}>
								Procurar
							</Button>
							&nbsp;&nbsp;
							<Button onClick={() => {shouldStop = true}} variant="outline-warning">
								Parar procura
							</Button>
						</Form>
					</Col>
				</Row>
				<br/>
				<br/>
				<Row>
					<Col sm={{ span: 8, offset: 2 }} xs={{ span: 8, offset: 2 }}>
						<div>
							<div id="status">
								{status+(status? "..." : '')}
							</div>
							{answers.length? 
							<Card>
								<ListGroup variant="flush">
									<div style={{
										maxHeight: "400px",
										overflow: "scroll",
										paddingBottom: "2px",
									}}>
									{answers.map(c => (
										<ListGroup.Item>
											<a href={c.link}> {c.name} </a>
										</ListGroup.Item>
									))}
									</div>
								</ListGroup>
							</Card> : null}
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
