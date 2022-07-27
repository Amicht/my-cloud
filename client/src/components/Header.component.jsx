import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FolderCtxt } from '../contexts/folderCtxt';
import IsLoadingCtxt from '../contexts/loadinfCtxt';
import { getFolderData } from '../services/api.service';

const HeaderComponent = (props) => {
  const { SetIsLoadindgValue } = useContext(IsLoadingCtxt);
  const  {setFolderData} = useContext(FolderCtxt);

  const setLastFolder = () => {
    SetIsLoadindgValue(() => true);
    
    getFolderData(props.parentFolder).then(data => {
      setFolderData(() => data);
      SetIsLoadindgValue(false);
    });
  }
  return (
    <Navbar>
      <Container>
        <Navbar.Brand role='button'>My Cloud</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {props.parentFolder?
          <Navbar.Text className='hover-light' onClick={setLastFolder}>
            Go back
          </Navbar.Text>:null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default HeaderComponent