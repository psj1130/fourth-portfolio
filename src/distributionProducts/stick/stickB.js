import './stickB.css';
import { BrowserRouter as  Router, Route, Routes} from 'react-router-dom';
import StickAmericano from './stickAmericano';
import StickLatte from './stickLatte';
import Sticklist from './sticklist';

function StickB() {
  return (
    <div>
       {/* <Sticklist></Sticklist> */}
       
        {/* <Routes>
          <Route path="/" element={< StickAmericano/>} />
          <Route path="/dp/stickLatte" element={<StickLatte/>} />
        </Routes> */}
    </div>
  );
}

export default StickB;
