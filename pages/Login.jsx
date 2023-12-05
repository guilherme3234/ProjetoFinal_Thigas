import Conteudo from "../components/Conteudo"
import Header from "../components/Header"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Login () {
    return(
        <>
        <Header btn={false}/>
        <Conteudo>
            <h2>Login</h2>
            <Form>
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type ="email" placeholder="name@example.com"/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Senha:</Form.Label>
                    <Form.Control type ="password"/>
                </Form.Group>
                <Button type="submit">Login</Button>
            </Form>
        </Conteudo>
        </>
    )
}

export default Login