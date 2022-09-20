import Input from './components/inputs';
import Button from './components/buttons';
import { Container ,Content, Row, Column} from './styles';

const App = () => {
  return (
      <Container>
        <Content>
        <Input/>  
        <Row>
            <Button label="7" />
            <Button label="8" />
            <Button label="9" />
            <Button label="-" />
        </Row>
        <Row>        
            <Button label="4" />
            <Button label="5" />
            <Button label="6" />
            <Button label="+" />
        </Row>
        <Row>
            <Button label="1" />
            <Button label="3" />
            <Button label="4" />
            <Button label="=" />
        </Row>
        
        </Content>
      </Container>
  );
}

export default App;
