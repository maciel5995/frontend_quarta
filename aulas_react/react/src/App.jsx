
import './App.css'
import ConditionalComponent1 from './components/ConditionalComponent1';
import ConditionalComponent2 from './components/ConditionalComponent2';
import EventComponent from './components/EventComponent'
import GenericComponent from './components/GenericComponent';
import IntroComponent from './components/IntroComponent'
import MyButtonComponent from './components/MyButtonComponent';
import PostComponent from './components/PostComponent';
import ProductComponent from './components/ProductComponent';
import UseStateComponente from './components/UseStateComponente';


function App() {
  let component;
  const condition = false;
  if(condition) {
    component = <ConditionalComponent1 />
  } else {
    component = <ConditionalComponent2 />
  }

  const products = [
    {id: 1, name: 'Laranja'},
    {id: 2, name: 'Uva'},
    {id: 3, name: 'Maçã'}
  ]

  const listPosts = [
    {id:1, title: 'Titulo Post 1', description: 'Descrição do Post 1'},
    {id:2, title: 'Titulo Post 2', description: 'Descrição do Post 2'},
    {id:3, title: 'Titulo Post 3', description: 'Descrição do Post 3'}
  ]

  return (
    <>
      <h2>Componente principal</h2>
      <IntroComponent />
      <EventComponent />

      {/** RENDERIZAÇÃO CONDICIONAL */}
      {component}

      {condition ? <ConditionalComponent1 /> : <ConditionalComponent2 />}

      {/**RENDERIZAÇÃO DE LISTAS */}
      <ul>
        {/* {products.map((prod, index) => ( */}
        {products.map((prod) => (
          // <li key={index}>{prod.name}</li>
          <li key={prod.id}>{prod.name}</li>
        ))}
      </ul>
      <div>

      </div>
        <ol>
          {products.map((prod) => (
            <li key={prod.id}>{prod.name}</li>
          ))}
        </ol>
      <ol>
        {products.map((prod) => (
          <li key={prod.id}>{prod.name}</li>
        ))}
      </ol>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/** PROPS */}
      <div>
            <ProductComponent name='Arroz' category='Alimento' />
            <ProductComponent name='Martelo' category='Ferramenta' />
      </div>

      {/** lista de componentes */}
      <div>
        {listPosts.map((post) => (
          <PostComponent key={ post.id } title={ post.title } description={ post.description }/>
        ))}
      </div>

      {/**children props */}
        <div>
          <GenericComponent>
            <p>Conteúdo passado pela primeira chamada</p>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
            <hr />
          </GenericComponent>
        </div>
        <div>
          <GenericComponent>
            <h4>Conteúdo passado pela segunda chamada</h4>
            <ol>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ol>
            <hr />
          </GenericComponent>
        </div>
        {/** hook useState */}
        <MyButtonComponent />
        <div>
          <UseStateComponente />
        </div>
    </>
  )
}

export default App
