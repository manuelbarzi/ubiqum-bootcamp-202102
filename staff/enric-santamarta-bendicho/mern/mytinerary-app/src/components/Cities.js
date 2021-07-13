import React, { Component } from 'react';
import './Cities.css'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Home from './images/homeIcon.png'
import { NavLink } from 'react-router-dom'
import FilterCities from './FilterCities';
import retrieveAllCities from '../logic/retrieve-all-cities'


//separar cada componente

class Cities extends Component {
    constructor() {
        super()
        this.state = {
            isFetching: false,
            cities: [],
            citiesFilter: ""
        }
    }
    componentDidMount() {
        this.fetchCities()

        //this.timer = setInterval(() => this.fetchCities(), 5000)
    }

    componentWillUnmount() {
        this.timer = null
    }

    fetchCities = () => {
        this.setState({ ...this.state, isFetching: true })

        retrieveAllCities()
            .then(cities => {
                this.setState({
                    cities,
                    isFetching: false
                })
            })
            .catch(error => {
                alert(error)
            })
    }

    handleFilterCities = filter => {
        retrieveAllCities()
            .then(cities => {
                const filteredCities = cities.filter(city => city.name.includes(filter))

                this.setState({
                    cities: filteredCities,
                    isFetching: false
                })
            })
            .catch(error => {
                alert(error)
            })
    }

render() {

    const { state: { cities, isFetching } } = this

    const listCitiesNames = cities.map((cities,index) => <ul key={index}> {cities.name} </ul>)

    const listCitiesCountries = cities.map((cities,index) => <ul key={index}> {cities.country} </ul>)

    const listCitiesImage = cities.map((cities,index) => <ul key={index}> {cities.img} </ul>)

    return <div><h2>City List</h2>
        <Box>
            <p>Search a city name:</p>
            <FilterCities onChange={this.handleFilterCities} />
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow><TableCell align="center">City</TableCell><TableCell align="center">Country</TableCell></TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow><TableCell align="center">{listCitiesNames}</TableCell><TableCell align="center">{listCitiesCountries}</TableCell></TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <footer>
                <NavLink to='/' ><Button><img src={Home} alt="return home" /> </Button></NavLink>
            </footer>
        </Box>
    </div>
}
}
export default Cities

