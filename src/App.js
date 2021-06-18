import logo from './logo.svg';
import './App.css';
import ChatList from './ChatList';
import ChatWin from './ChatWin';

function App() {
  return (
    <div className="main">
      <ChatList />
      <ChatWin />
    </div>
  );
}

export default App;
