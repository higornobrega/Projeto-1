
import './App.css';
import { Component } from 'react';
import { loadPost } from './utils/load-pots';
import { Post } from './components/Posts';

class App extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {  //Roda ao montar o componente
    await this.loadPosts();    //Chama a função
  }

  loadPosts = async () => { //Aero Function para poder usar o this e o async para ser assíncrona 
    const postsAndPhotos = await loadPost();
    this.setState({ posts: postsAndPhotos }); //Adiciona tudo a posts
  }

  render() {
    const { posts } = this.state;
    return (
      <section className="container">
        <Post posts={posts}/>
      </section>
    );
  }
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
