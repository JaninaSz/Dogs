import React, { Component } from 'react'
import { Cards } from './Cards';
import ServisRick from '../../services/ServisRick';

export default class Main extends Component {
    constructor(props){
        super(props);
        console.log("main props")
        this.state={Dogs:[]};

    }
    componentDidMount(){
        ServisRick.getAllPersonajes()
      // .then((data) => console.log(data))
      .then((data) => this.setState({Dogs: data.results}))
       
        .catch((error) => console.log(error));
    }
  render() {
    return (
      <main>

          <section className="py-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Rick and Morty</h1>
                <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                <p>
                  <a href="#1" className="btn btn-primary my-2">Main call to action</a>
                  <a href="#2" className="btn btn-secondary my-2">Secundario</a>
                </p>
              </div>
            </div>
          </section>

          <Cards dogs={this.state.Dogs}/>

        </main>
    )
  }
}

