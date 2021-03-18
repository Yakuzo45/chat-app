import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact name="Beth Cook" avatar="https://randomuser.me/api/portraits/women/66.jpg" isOnline={true}/>
      <Contact name="Daniel Simmons" avatar="https://randomuser.me/api/portraits/men/88.jpg" isOnline={false}/>
      <Contact name="Dale Prescott" avatar="https://randomuser.me/api/portraits/men/14.jpg" isOnline={true}/>
    </div>
  );
}

export default App;
